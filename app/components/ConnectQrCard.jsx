"use client";

import { useEffect, useState } from "react";
import QRCode from "qrcode";

const CONNECT_URL = "https://codezeon.com/connect-with-us";

export default function ConnectQrCard() {
  const [previewSrc, setPreviewSrc] = useState("");
  const [downloading, setDownloading] = useState(false);

  useEffect(() => {
    let active = true;

    QRCode.toDataURL(CONNECT_URL, {
      width: 480,
      margin: 2,
      color: {
        dark: "#1a2e2e",
        light: "#ffffff",
      },
    })
      .then((url) => {
        if (active) {
          setPreviewSrc(url);
        }
      })
      .catch(() => {
        if (active) {
          setPreviewSrc("");
        }
      });

    return () => {
      active = false;
    };
  }, []);

  async function downloadQr() {
    setDownloading(true);
    try {
      const dataUrl = await QRCode.toDataURL(CONNECT_URL, {
        width: 1024,
        margin: 2,
        color: {
          dark: "#1a2e2e",
          light: "#ffffff",
        },
      });
      const link = document.createElement("a");
      link.href = dataUrl;
      link.download = "codezeon-connect-with-us-qr.png";
      document.body.appendChild(link);
      link.click();
      link.remove();
    } finally {
      setDownloading(false);
    }
  }

  return (
    <div className="mx-auto flex w-full max-w-md flex-col items-center">
      <div className="w-full border border-line bg-cream p-6 sm:p-8">
        {previewSrc ? (
          <img
            src={previewSrc}
            alt="QR code linking to Codezeon Connect With Us"
            width={480}
            height={480}
            className="mx-auto h-auto w-full max-w-[20rem] bg-white"
          />
        ) : (
          <div className="mx-auto aspect-square w-full max-w-[20rem] bg-white" />
        )}
      </div>

      <p className="mt-6 break-all text-center text-sm text-muted">
        {CONNECT_URL}
      </p>

      <div className="mt-8 flex w-full justify-center">
        <button
          type="button"
          onClick={downloadQr}
          disabled={downloading || !previewSrc}
          className="btn btn-primary w-full sm:w-auto"
        >
          {downloading ? "Preparing…" : "Download QR"}
        </button>
      </div>
    </div>
  );
}
