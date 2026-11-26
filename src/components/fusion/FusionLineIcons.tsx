/** 风格一 · 融合玻璃 线性小图标（对应 Figma 线宽 4 / 36 盒，换算 24 盒 ≈ 2.6） */
export type FIconName =
  | 'grid' | 'list' | 'clock' | 'monitor' | 'chevron'
  | 'folder' | 'cloud' | 'refresh' | 'screen' | 'copy'

const PATHS: Record<FIconName, JSX.Element> = {
  grid: (
    <>
      <rect x="3.5" y="3.5" width="7" height="7" rx="1.6" />
      <rect x="13.5" y="3.5" width="7" height="7" rx="1.6" />
      <rect x="3.5" y="13.5" width="7" height="7" rx="1.6" />
      <rect x="13.5" y="13.5" width="7" height="7" rx="1.6" />
    </>
  ),
  list: (
    <>
      <path d="M8.6 6h11.9M8.6 12h11.9M8.6 18h11.9" />
      <path d="M3.6 6h.01M3.6 12h.01M3.6 18h.01" />
    </>
  ),
  clock: (
    <>
      <circle cx="12" cy="12" r="8.6" />
      <path d="M12 7.4V12l3.2 2.1" />
    </>
  ),
  monitor: (
    <>
      <rect x="2.8" y="4.2" width="18.4" height="12.6" rx="2" />
      <path d="M9 20.4h6M12 16.8v3.6" />
    </>
  ),
  chevron: <path d="M9.2 5.6l6.4 6.4-6.4 6.4" />,
  folder: (
    <>
      <path d="M3 7.2c0-1.1.9-2 2-2h4l2 2.4h8c1.1 0 2 .9 2 2v7.2c0 1.1-.9 2-2 2H5c-1.1 0-2-.9-2-2V7.2Z" />
    </>
  ),
  cloud: (
    <>
      <path d="M7 18.4h10.2a3.8 3.8 0 0 0 .5-7.57 5.6 5.6 0 0 0-10.9-1.1A4.35 4.35 0 0 0 7 18.4Z" />
    </>
  ),
  refresh: (
    <>
      <path d="M19.4 12a7.4 7.4 0 1 1-2.17-5.23" />
      <path d="M19.6 3.6v3.4h-3.4" />
    </>
  ),
  screen: (
    <>
      <rect x="2.8" y="4.2" width="18.4" height="12.6" rx="2" />
      <path d="M12 13.6V8.2M9.4 10.6L12 8l2.6 2.6M9 20.4h6" />
    </>
  ),
  copy: (
    <>
      <rect x="8.6" y="8.6" width="11.6" height="11.6" rx="2" />
      <path d="M15.4 5.4V4.6c0-1.1-.9-2-2-2H5.6c-1.1 0-2 .9-2 2v7.8c0 1.1.9 2 2 2h.8" />
    </>
  ),
}

export function FIcon({ name, size = 18 }: { name: FIconName; size?: number }) {
  return (
    <svg
      className="fg-i"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2.6}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
    >
      {PATHS[name]}
    </svg>
  )
}