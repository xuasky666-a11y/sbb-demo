import type { ReactNode } from 'react'

/** 共享线性图标：所有风格共用同一套几何，靠描边/滤镜/颜色区分气质 */
export type IconName =
  | 'courseware' | 'board' | 'cast' | 'live'
  | 'pen' | 'interact' | 'more' | 'exit'
  | 'chevron-left' | 'chevron-right' | 'feather'

const PATHS: Record<IconName, ReactNode> = {
  courseware: (
    <>
      <rect x="3.5" y="4.5" width="17" height="12.5" rx="2" />
      <path d="M8 21l4-3.6 4 3.6" />
      <path d="M8 13.5v-3M12 13.5v-5.5M16 13.5v-2" />
    </>
  ),
  board: (
    <>
      <rect x="3.5" y="4.5" width="17" height="12.5" rx="2" />
      <path d="M8 13.9l5.5-5.5a1.45 1.45 0 012.1 2.1L10.1 16l-2.9.8z" />
      <path d="M8 21l1.6-3.5M16 21l-1.6-3.5" />
    </>
  ),
  cast: (
    <>
      <rect x="3.5" y="4.5" width="17" height="12" rx="2" />
      <path d="M12 13.2V8.4M9.4 10.8L12 8.2l2.6 2.6" />
      <path d="M8.5 20.5h7" />
    </>
  ),
  live: (
    <>
      <rect x="3.5" y="4.5" width="17" height="12.5" rx="2" />
      <path d="M10.4 8.2l4.8 2.7-4.8 2.7z" />
      <path d="M8 21l1.6-3.5M16 21l-1.6-3.5" />
    </>
  ),
  pen: (
    <>
      <path d="M4 20l1.1-4.1L16.4 4.6a2.15 2.15 0 013 3L8.1 18.9 4 20z" />
      <path d="M14.3 6.7l3 3" />
    </>
  ),
  interact: (
    <>
      <circle cx="9" cy="8.2" r="3.1" />
      <path d="M3.4 19.5c.6-3.1 2.8-4.7 5.6-4.7s5 1.6 5.6 4.7" />
      <circle cx="17.2" cy="9.4" r="2.4" />
      <path d="M16.4 14.6c2.4.3 3.9 1.7 4.4 4.3" />
    </>
  ),
  more: (
    <>
      <rect x="4" y="4" width="6.6" height="6.6" rx="1.8" />
      <rect x="13.4" y="4" width="6.6" height="6.6" rx="1.8" />
      <rect x="4" y="13.4" width="6.6" height="6.6" rx="1.8" />
      <rect x="13.4" y="13.4" width="6.6" height="6.6" rx="1.8" />
    </>
  ),
  exit: (
    <>
      <path d="M10.5 4H5.8A1.8 1.8 0 004 5.8v12.4A1.8 1.8 0 005.8 20h4.7" />
      <path d="M15.5 8.5L19 12l-3.5 3.5M9 12h10" />
    </>
  ),
  'chevron-left': <path d="M14.5 5l-7 7 7 7" />,
  'chevron-right': <path d="M9.5 5l7 7-7 7" />,
  feather: (
    <>
      <path d="M6.2 17.8C6.2 10.4 11.8 5 19 5c0 7.4-5.4 12.8-12.8 12.8z" />
      <path d="M6.2 17.8C9 12.4 12.6 9.2 16 7.6" />
    </>
  ),
}

interface IconProps {
  name: IconName
  size?: number
  strokeWidth?: number
  className?: string
  filled?: boolean
}

export function Icon({ name, size = 24, strokeWidth = 1.7, className, filled }: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      width={size}
      height={size}
      fill={filled ? 'currentColor' : 'none'}
      stroke="currentColor"
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      {PATHS[name]}
    </svg>
  )
}