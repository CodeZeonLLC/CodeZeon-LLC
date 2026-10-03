const iconClass = "h-5 w-5";

const icons = {
  website: (
    <svg viewBox="0 0 24 24" className={iconClass} fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
      <circle cx="12" cy="12" r="9" />
      <path d="M3 12h18M12 3a14 14 0 0 1 0 18M12 3a14 14 0 0 0 0 18" />
    </svg>
  ),
  whatsapp: (
    <svg viewBox="0 0 24 24" className={iconClass} fill="currentColor" aria-hidden="true">
      <path d="M17.47 14.38c-.3-.15-1.77-.87-2.04-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.94 1.17-.17.2-.35.22-.64.07-.3-.15-1.25-.46-2.38-1.47-.88-.78-1.47-1.75-1.64-2.04-.17-.3-.02-.46.13-.61.13-.13.3-.35.44-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.07-.15-.67-1.62-.92-2.22-.24-.58-.49-.5-.67-.5h-.57c-.2 0-.52.07-.79.37-.27.3-1.04 1.02-1.04 2.48s1.07 2.87 1.22 3.07c.15.2 2.1 3.2 5.08 4.48.71.3 1.26.49 1.69.63.71.23 1.36.2 1.87.12.57-.08 1.77-.72 2.02-1.42.25-.7.25-1.3.17-1.42-.07-.12-.27-.2-.57-.35z" />
      <path d="M12.04 2C6.58 2 2.15 6.42 2.15 11.87c0 1.75.46 3.45 1.34 4.95L2 22l5.34-1.4c1.45.79 3.08 1.21 4.7 1.21h.01c5.46 0 9.89-4.42 9.89-9.87C21.94 6.42 17.5 2 12.04 2zm0 18.05h-.01c-1.48 0-2.93-.4-4.2-1.15l-.3-.18-3.16.83.84-3.08-.2-.32a8.16 8.16 0 0 1-1.26-4.36c0-4.52 3.68-8.2 8.2-8.2 4.52 0 8.2 3.68 8.2 8.2 0 4.51-3.69 8.18-8.21 8.18z" />
    </svg>
  ),
  email: (
    <svg viewBox="0 0 24 24" className={iconClass} fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="m4 7 8 6 8-6" />
    </svg>
  ),
  call: (
    <svg viewBox="0 0 24 24" className={iconClass} fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
      <path d="M6.5 4.5h3l1.5 4-2 1.5a12 12 0 0 0 5.5 5.5l1.5-2 4 1.5v3a2 2 0 0 1-2 2A14.5 14.5 0 0 1 4.5 6.5a2 2 0 0 1 2-2z" />
    </svg>
  ),
  linkedin: (
    <svg viewBox="0 0 24 24" className={iconClass} fill="currentColor" aria-hidden="true">
      <path d="M20.45 20.45h-3.55v-5.57c0-1.33-.02-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.35V9h3.41v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28zM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12zM7.12 20.45H3.56V9h3.56v11.45z" />
    </svg>
  ),
  x: (
    <svg viewBox="0 0 24 24" className={iconClass} fill="currentColor" aria-hidden="true">
      <path d="M18.9 1.5h3.67l-8.02 9.17L24 22.5h-7.41l-5.8-7.59-6.64 7.59H.46l8.58-9.81L0 1.5h7.6l5.24 6.93L18.9 1.5zm-1.29 18.88h2.03L6.48 3.5H4.3l13.31 16.88z" />
    </svg>
  ),
  github: (
    <svg viewBox="0 0 24 24" className={iconClass} fill="currentColor" aria-hidden="true">
      <path d="M12 .3a12 12 0 0 0-3.79 23.4c.6.11.82-.26.82-.58v-2.02c-3.34.73-4.04-1.61-4.04-1.61-.55-1.39-1.33-1.76-1.33-1.76-1.09-.74.08-.73.08-.73 1.2.09 1.84 1.24 1.84 1.24 1.07 1.83 2.8 1.3 3.49 1 .11-.78.42-1.3.76-1.6-2.66-.3-5.46-1.33-5.46-5.93 0-1.31.47-2.38 1.24-3.22-.13-.3-.54-1.52.12-3.17 0 0 1.01-.32 3.3 1.23a11.5 11.5 0 0 1 6 0c2.29-1.55 3.3-1.23 3.3-1.23.66 1.65.25 2.87.12 3.17.77.84 1.24 1.91 1.24 3.22 0 4.61-2.81 5.62-5.48 5.92.43.37.81 1.1.81 2.22v3.29c0 .32.22.7.82.58A12 12 0 0 0 12 .3z" />
    </svg>
  ),
};

const tones = {
  website: "bg-brand text-cream",
  whatsapp: "bg-[#25D366] text-white",
  email: "bg-brand-soft text-cream",
  call: "bg-ink text-cream",
  linkedin: "bg-[#0A66C2] text-white",
  x: "bg-[#111111] text-white",
  github: "bg-[#24292F] text-white",
};

export function channelTone(kind) {
  return tones[kind] || "bg-brand text-cream";
}

export default function ConnectChannelIcon({ kind }) {
  return icons[kind] || icons.website;
}
