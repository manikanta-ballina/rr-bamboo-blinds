/**
 * SVG path definitions for the Icon component.
 * All icons share a 24×24 viewBox and inherit `currentColor`.
 * Stroke-based icons rely on the parent <svg> defaults; filled icons set fill explicitly.
 */
export const ICON_PATHS = {
  phone: (
    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
  ),
  mail: (
    <>
      <rect x="2" y="4" width="20" height="16" rx="2" />
      <path d="M22 6 12 13 2 6" />
    </>
  ),
  insta: (
    <>
      <rect x="2" y="2" width="20" height="20" rx="5" />
      <circle cx="12" cy="12" r="4.2" />
      <circle cx="17.3" cy="6.7" r="0.6" fill="currentColor" stroke="none" />
    </>
  ),
  sun: (
    <>
      <circle cx="12" cy="12" r="4.2" />
      <path d="M12 2v2M12 20v2M4.2 4.2l1.4 1.4M18.4 18.4l1.4 1.4M2 12h2M20 12h2M4.2 19.8l1.4-1.4M18.4 5.6l1.4-1.4" />
    </>
  ),
  wind: (
    <>
      <path d="M3 8h10.5a2.5 2.5 0 1 0-2.4-3.2" />
      <path d="M3 16h13.5a2.5 2.5 0 1 1-2.4 3.2" />
      <path d="M3 12h16.5a2.5 2.5 0 1 0-2.4-3.2" />
    </>
  ),
  thermo: <path d="M12 3a2 2 0 0 0-2 2v9.5a4 4 0 1 0 4 0V5a2 2 0 0 0-2-2Z" />,
  rain: (
    <>
      <path d="M8 16.5V13M12 17.5V13M16 16.5V13" />
      <path d="M6.5 13a4 4 0 0 1 .3-8 5 5 0 0 1 9.6-1.3A4.5 4.5 0 0 1 17 13H6.5Z" />
    </>
  ),
  shield: <path d="M12 3l7 3v6c0 4.5-3 7.7-7 9-4-1.3-7-4.5-7-9V6l7-3Z" />,
  dust: (
    <>
      <circle cx="6" cy="8" r="1.3" fill="currentColor" stroke="none" />
      <circle cx="11" cy="5.5" r="1" fill="currentColor" stroke="none" />
      <circle cx="9" cy="11.5" r="1.6" fill="currentColor" stroke="none" />
      <circle cx="15" cy="9" r="1.1" fill="currentColor" stroke="none" />
      <path d="M4 16h9a3 3 0 1 0-.8-5.9M6 20h11a2.6 2.6 0 1 0-.7-5.1" />
    </>
  ),
  zoom: (
    <>
      <circle cx="11" cy="11" r="7" />
      <path d="m21 21-4.3-4.3M11 8v6M8 11h6" />
    </>
  ),
  close: <path d="M6 6l12 12M18 6 6 18" />,
  pin: (
    <>
      <path d="M12 21s7-6.6 7-12a7 7 0 1 0-14 0c0 5.4 7 12 7 12Z" />
      <circle cx="12" cy="9" r="2.6" />
    </>
  ),
  leaf: <path d="M4 21c8-1 15-8 16-16-8 1-14 6-16 16Z" />,
  star: (
    <path
      d="M12 2.5l2.9 6.3 6.7.8-5 4.7 1.4 6.7L12 17.7 5.9 21l1.4-6.7-5-4.7 6.7-.8L12 2.5Z"
      fill="currentColor"
      stroke="none"
    />
  ),
  chevronLeft: <path d="M15 18l-6-6 6-6" />,
  chevronRight: <path d="M9 18l6-6-6-6" />,
  menu: (
    <>
      <path d="M3 6h18" />
      <path d="M3 12h18" />
      <path d="M3 18h18" />
    </>
  ),
  whatsapp: (
    <path
      d="M12 2a10 10 0 0 0-8.6 15L2 22l5.2-1.4A10 10 0 1 0 12 2Zm0 18a8 8 0 0 1-4.1-1.1l-.3-.2-3 .8.8-2.9-.2-.3A8 8 0 1 1 12 20Zm4.4-5.9c-.2-.1-1.4-.7-1.6-.8s-.4-.1-.5.1-.6.8-.7.9-.3.2-.5.1a6.6 6.6 0 0 1-1.9-1.2 7 7 0 0 1-1.3-1.6c-.1-.2 0-.4.1-.5l.4-.4.2-.4v-.4c-.1-.1-.5-1.3-.7-1.8s-.4-.4-.5-.4h-.5a.9.9 0 0 0-.6.3 2.8 2.8 0 0 0-.9 2.1c0 1.2.9 2.4 1 2.6.1.2 1.8 2.7 4.3 3.8a14.5 14.5 0 0 0 1.5.5 3.6 3.6 0 0 0 1.6.1 2.7 2.7 0 0 0 1.8-1.2 2.1 2.1 0 0 0 .1-1.2c0-.1-.2-.2-.4-.3Z"
      fill="currentColor"
      stroke="none"
    />
  ),
};

export const ICON_NAMES = Object.keys(ICON_PATHS);
