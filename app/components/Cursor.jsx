"use client";

import { useEffect, useRef } from "react";

const INTERACTIVE = "a, button, input, textarea, select, [role='button']";
function loadThree() {
  if (typeof window === "undefined") {
    return Promise.reject(new Error("no window"));
  }
  if (window.THREE) {
    return Promise.resolve(window.THREE);
  }

  return new Promise((resolve, reject) => {
    const onReady = () => resolve(window.THREE);
    window.addEventListener("three-ready", onReady, { once: true });

    const script = document.createElement("script");
    script.type = "module";
    script.textContent = `
      import * as THREE from "https://unpkg.com/three@0.160.1/build/three.module.js";
      window.THREE = THREE;
      window.dispatchEvent(new Event("three-ready"));
    `;
    script.onerror = () => {
      window.removeEventListener("three-ready", onReady);
      reject(new Error("three failed"));
    };
    document.head.appendChild(script);
  });
}

const CTA = 'button, [type="submit"], [data-cursor="cta"]';

function isCta(target) {
  if (target.closest(CTA)) {
    return true;
  }
  const link = target.closest("a");
  if (!link || link.closest("nav")) {
    return false;
  }
  return link.classList.contains("inline-flex");
}

export default function Cursor() {
  const canvasRef = useRef(null);
  const dotRef = useRef(null);
  const ctaRef = useRef(null);

  useEffect(() => {
    const fine = window.matchMedia("(pointer: fine)").matches;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (!fine || reduce) {
      return undefined;
    }

    const canvas = canvasRef.current;
    const dot = dotRef.current;
    const ctaEl = ctaRef.current;
    if (!canvas || !dot || !ctaEl) {
      return undefined;
    }

    let cancelled = false;
    let raf = 0;
    let dispose = () => {};

    loadThree()
      .then((THREE) => {
        if (cancelled || !THREE) {
          return;
        }

        document.documentElement.classList.add("has-custom-cursor");

        const size = 72;
        const renderer = new THREE.WebGLRenderer({
          canvas,
          alpha: true,
          antialias: true,
        });
        renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
        renderer.setSize(size, size, false);

        const scene = new THREE.Scene();
        const camera = new THREE.PerspectiveCamera(40, 1, 0.1, 20);
        camera.position.z = 3.2;

        const geometry = new THREE.IcosahedronGeometry(0.95, 0);
        const material = new THREE.MeshBasicMaterial({
          color: 0xf2f1e6,
          wireframe: true,
          transparent: true,
          opacity: 0.95,
        });
        const mesh = new THREE.Mesh(geometry, material);
        scene.add(mesh);

        const innerGeo = new THREE.OctahedronGeometry(0.38, 0);
        const innerMat = new THREE.MeshBasicMaterial({
          color: 0xf2f1e6,
          wireframe: true,
          transparent: true,
          opacity: 0.55,
        });
        const inner = new THREE.Mesh(innerGeo, innerMat);
        scene.add(inner);

        const mouse = {
          x: window.innerWidth / 2,
          y: window.innerHeight / 2,
        };
        const cursor = { x: mouse.x, y: mouse.y };
        const state = { hover: false, text: false, cta: false };
        const ctaScale = { current: 0 };

        const onMove = (event) => {
          mouse.x = event.clientX;
          mouse.y = event.clientY;
        };

        const onOver = (event) => {
          const target = event.target;
          if (!(target instanceof Element)) {
            return;
          }
          state.text = Boolean(target.closest("input, textarea, select"));
          state.cta = !state.text && isCta(target);
          state.hover = Boolean(target.closest(INTERACTIVE));
        };

        const tick = () => {
          cursor.x += (mouse.x - cursor.x) * 0.2;
          cursor.y += (mouse.y - cursor.y) * 0.2;

          mesh.rotation.x += 0.012;
          mesh.rotation.y += 0.018;
          inner.rotation.x -= 0.02;
          inner.rotation.y += 0.014;

          const goal = state.cta ? 0.2 : state.hover && !state.text ? 1.45 : 1;
          const next = mesh.scale.x + (goal - mesh.scale.x) * 0.14;
          mesh.scale.setScalar(next);
          inner.scale.setScalar(next * 0.92);
          material.opacity = state.cta ? 0 : state.hover ? 1 : 0.88;

          renderer.render(scene, camera);

          const hide = state.text;
          const showCta = state.cta && !hide;
          ctaScale.current += ((showCta ? 1 : 0) - ctaScale.current) * 0.18;

          canvas.style.opacity = hide || showCta ? "0" : "1";
          dot.style.opacity = hide || showCta ? "0" : "1";
          ctaEl.style.opacity = String(ctaScale.current);
          ctaEl.style.transform = `translate3d(${cursor.x - 40}px, ${cursor.y - 40}px, 0) scale(${0.55 + ctaScale.current * 0.45})`;

          canvas.style.transform = `translate3d(${cursor.x - size / 2}px, ${cursor.y - size / 2}px, 0)`;
          dot.style.transform = `translate3d(${mouse.x - 4}px, ${mouse.y - 4}px, 0) scale(${state.hover ? 0.35 : 1})`;

          raf = requestAnimationFrame(tick);
        };

        window.addEventListener("pointermove", onMove, { passive: true });
        window.addEventListener("pointerover", onOver, { passive: true });
        raf = requestAnimationFrame(tick);

        dispose = () => {
          window.removeEventListener("pointermove", onMove);
          window.removeEventListener("pointerover", onOver);
          cancelAnimationFrame(raf);
          geometry.dispose();
          material.dispose();
          innerGeo.dispose();
          innerMat.dispose();
          renderer.dispose();
          document.documentElement.classList.remove("has-custom-cursor");
        };
      })
      .catch(() => {
        document.documentElement.classList.remove("has-custom-cursor");
      });

    return () => {
      cancelled = true;
      dispose();
    };
  }, []);

  return (
    <div className="cursor-root pointer-events-none" aria-hidden="true">
      <canvas
        ref={canvasRef}
        className="fixed top-0 left-0 z-[90] mix-blend-difference transition-opacity duration-150"
        width={72}
        height={72}
      />
      <span
        ref={dotRef}
        className="fixed top-0 left-0 z-[91] h-2 w-2 rounded-full bg-cream mix-blend-difference transition-opacity duration-150"
      />
      <span
        ref={ctaRef}
        className="cursor-cta fixed top-0 left-0 z-[92] flex h-20 w-20 items-center justify-center rounded-full bg-ink text-cream opacity-0 shadow-[0_10px_28px_rgba(26,46,46,0.28)]"
      >
        <svg
          viewBox="0 0 24 24"
          className="h-7 w-7"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.8"
          aria-hidden="true"
        >
          <path d="M7 17 17 7M9 7h8v8" />
        </svg>
      </span>
    </div>
  );
}
