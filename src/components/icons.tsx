import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & { size?: number; sw?: number };

function Base({ size = 20, sw = 1.7, children, ...rest }: IconProps & { children: React.ReactNode }) {
  return (
    <svg
      width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor"
      strokeWidth={sw} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...rest}
    >
      {children}
    </svg>
  );
}

export const IconArrow = (p: IconProps) => <Base {...p}><path d="M5 12h14M13 6l6 6-6 6" /></Base>;
export const IconArrowUpRight = (p: IconProps) => <Base {...p}><path d="M7 17 17 7M9 7h8v8" /></Base>;
export const IconExternal = (p: IconProps) => <Base {...p}><path d="M14 4h6v6M20 4 10 14M18 13v6a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1h6" /></Base>;
export const IconDownload = (p: IconProps) => <Base {...p}><path d="M12 3v12m0 0 4-4m-4 4-4-4M5 21h14" /></Base>;
export const IconMail = (p: IconProps) => <Base {...p}><rect x="3" y="5" width="18" height="14" rx="2" /><path d="m3 7 9 6 9-6" /></Base>;
export const IconArrowUp = (p: IconProps) => <Base {...p}><path d="M12 19V5M5 12l7-7 7 7" /></Base>;
export const IconClose = (p: IconProps) => <Base {...p}><path d="M6 6l12 12M18 6 6 18" /></Base>;
export const IconCheck = (p: IconProps) => <Base {...p}><path d="M4 12l5 5L20 6" /></Base>;
export const IconMenu = (p: IconProps) => <Base {...p}><path d="M4 7h16M4 12h16M4 17h16" /></Base>;
export const IconSpark = (p: IconProps) => <Base {...p}><path d="M12 3v4M12 17v4M3 12h4M17 12h4M6.3 6.3l2.8 2.8M14.9 14.9l2.8 2.8M17.7 6.3l-2.8 2.8M9.1 14.9l-2.8 2.8" /></Base>;
export const IconLayers = (p: IconProps) => <Base {...p}><path d="m12 3 9 5-9 5-9-5 9-5ZM3 13l9 5 9-5M3 18l9 5 9-5" /></Base>;
export const IconStack = (p: IconProps) => <Base {...p}><path d="m12 2 8 4.5-8 4.5-8-4.5L12 2Z" /><path d="m4 12 8 4.5 8-4.5" /></Base>;
export const IconPlug = (p: IconProps) => <Base {...p}><path d="M9 2v6m6-6v6M6 8h12v3a6 6 0 0 1-12 0V8ZM12 17v5" /></Base>;
export const IconBox = (p: IconProps) => <Base {...p}><path d="M21 8 12 3 3 8v8l9 5 9-5V8Z" /><path d="m3 8 9 5 9-5M12 13v8" /></Base>;
export const IconDb = (p: IconProps) => <Base {...p}><ellipse cx="12" cy="5" rx="8" ry="3" /><path d="M4 5v14c0 1.66 3.58 3 8 3s8-1.34 8-3V5M4 12c0 1.66 3.58 3 8 3s8-1.34 8-3" /></Base>;

export const IconGithub = ({ size = 20, ...rest }: IconProps) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...rest}>
    <path d="M12 2C6.48 2 2 6.58 2 12.26c0 4.5 2.87 8.32 6.84 9.67.5.1.68-.22.68-.48 0-.24-.01-.87-.01-1.7-2.78.62-3.37-1.37-3.37-1.37-.45-1.18-1.11-1.5-1.11-1.5-.91-.64.07-.62.07-.62 1 .07 1.53 1.06 1.53 1.06.89 1.56 2.34 1.11 2.91.85.09-.66.35-1.11.63-1.37-2.22-.26-4.55-1.14-4.55-5.05 0-1.12.39-2.03 1.03-2.74-.1-.26-.45-1.3.1-2.71 0 0 .84-.27 2.75 1.05A9.39 9.39 0 0 1 12 6.85c.85 0 1.71.12 2.51.34 1.91-1.32 2.75-1.05 2.75-1.05.55 1.41.2 2.45.1 2.71.64.71 1.03 1.62 1.03 2.74 0 3.92-2.34 4.78-4.57 5.04.36.32.68.94.68 1.9 0 1.37-.01 2.48-.01 2.82 0 .27.18.59.69.48A10.02 10.02 0 0 0 22 12.26C22 6.58 17.52 2 12 2Z" />
  </svg>
);

export const IconLinkedin = ({ size = 20, ...rest }: IconProps) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...rest}>
    <path d="M20.45 20.45h-3.56v-5.57c0-1.33-.02-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.35V9h3.41v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28ZM5.34 7.43a2.06 2.06 0 1 1 0-4.13 2.06 2.06 0 0 1 0 4.13ZM7.12 20.45H3.56V9h3.56v11.45ZM22.22 0H1.77C.79 0 0 .77 0 1.73v20.54C0 23.22.79 24 1.77 24h20.45c.98 0 1.78-.78 1.78-1.73V1.73C24 .77 23.2 0 22.22 0Z" />
  </svg>
);

export const IconWhatsapp = ({ size = 20, ...rest }: IconProps) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...rest}>
    <path d="M.06 24l1.69-6.16a11.86 11.86 0 0 1-1.59-5.95C.16 5.34 5.5 0 12.05 0a11.82 11.82 0 0 1 8.41 3.49 11.82 11.82 0 0 1 3.48 8.42c0 6.55-5.34 11.89-11.89 11.89a11.9 11.9 0 0 1-5.68-1.45L.06 24ZM6.6 20.13c1.68.99 3.28 1.59 5.45 1.59 5.44 0 9.87-4.43 9.88-9.88a9.79 9.79 0 0 0-2.88-6.99 9.81 9.81 0 0 0-6.98-2.9c-5.45 0-9.88 4.43-9.88 9.88 0 2.27.66 3.97 1.77 5.75l-1 3.65 3.64-1.1ZM17.9 14.6c-.07-.12-.27-.2-.56-.34-.3-.15-1.76-.87-2.03-.97-.27-.1-.47-.15-.67.15-.2.3-.77.96-.94 1.16-.17.2-.35.22-.64.07-.3-.15-1.25-.46-2.38-1.47-.88-.78-1.47-1.76-1.65-2.06-.17-.3-.02-.46.13-.6.13-.14.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.07-.15-.67-1.62-.92-2.22-.24-.58-.49-.5-.67-.51l-.57-.01c-.2 0-.52.07-.79.37-.27.3-1.04 1.01-1.04 2.48 0 1.46 1.06 2.87 1.21 3.07.15.2 2.1 3.2 5.08 4.49.71.3 1.26.49 1.69.63.71.23 1.36.2 1.87.12.57-.08 1.76-.72 2-1.41.25-.69.25-1.29.18-1.41Z" />
  </svg>
);

export const DIFF_ICONS = [IconLayers, IconSpark, IconStack, IconPlug, IconBox, IconDb];
