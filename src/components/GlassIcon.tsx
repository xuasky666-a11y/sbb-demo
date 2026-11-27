import type { CoreName } from './CoreIcon'

/** 风格二专属 · 彩色磨砂玻璃：半透渐变 + 白色内描边 + 顶部扫光 + 白色图形 */
const TINT: Record<CoreName, string> = {
  courseware: '#f08a24',
  board: '#8a5cf0',
  cast: '#e05a2a',
  live: '#2f7fe0',
}

function Glyph({ name }: { name: CoreName }) {
  const common = { stroke: '#fff', strokeWidth: 5, strokeLinecap: 'round' as const, strokeLinejoin: 'round' as const, fill: 'none' }
  switch (name) {
    case 'courseware':
      return (
        <g>
          <rect x="-24" y="-22" width="48" height="34" rx="7" {...common} />
          <path d="M-12 4v-8M0 4v-14M12 4v-5" {...common} />
          <path d="M-9 12l-4 8M9 12l4 8" {...common} />
        </g>
      )
    case 'board':
      return (
        <g>
          <path d="M-18 18l3-10L11-18a6.5 6.5 0 019 9L-5 15l-13 3z" {...common} />
          <path d="M7-14l9 9" {...common} opacity={0.7} />
        </g>
      )
    case 'cast':
      return (
        <g>
          <rect x="-24" y="-22" width="48" height="34" rx="7" {...common} />
          <path d="M0 4v-14M-7-3l7-7 7 7" {...common} />
          <path d="M-10 19h20" {...common} />
        </g>
      )
    case 'live':
      return (
        <g>
          <rect x="-24" y="-22" width="48" height="34" rx="7" {...common} />
          <path d="M-5-13l14 8-14 8z" fill="#fff" stroke="none" />
          <path d="M-9 12l-4 8M9 12l4 8" {...common} />
        </g>
      )
  }
}

export function GlassIcon({ name, size = 100 }: { name: CoreName; size?: number }) {
  const tint = TINT[name]
  const gid = `gl-${name}`
  return (
    <svg viewBox="0 0 120 120" width={size} height={size} aria-hidden="true" style={{ display: 'block' }}>
      <defs>
        <linearGradient id={`${gid}-body`} x1="0" y1="0" x2="0.6" y2="1">
          <stop offset="0" stopColor={tint} stopOpacity="0.62" />
          <stop offset="1" stopColor={tint} stopOpacity="0.3" />
        </linearGradient>
        <linearGradient id={`${gid}-sheen`} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#fff" stopOpacity="0.65" />
          <stop offset="1" stopColor="#fff" stopOpacity="0" />
        </linearGradient>
        <filter id={`${gid}-gs`} x="-40%" y="-40%" width="180%" height="180%">
          <feDropShadow dx="0" dy="1.5" stdDeviation="1.5" floodColor={tint} floodOpacity="0.45" />
        </filter>
      </defs>
      {/* 玻璃砖 */}
      <rect x="10" y="10" width="100" height="100" rx="27" fill={`url(#${gid}-body)`} />
      <rect x="10.8" y="10.8" width="98.4" height="98.4" rx="26.2" fill="none" stroke="#fff" strokeOpacity="0.9" strokeWidth="1.6" />
      <rect x="14" y="14" width="92" height="92" rx="23" fill="none" stroke={tint} strokeOpacity="0.25" strokeWidth="1" />
      {/* 顶部扫光 */}
      <path d="M16 38a22 22 0 0122-22h44a22 22 0 0122 22v4c-13 7-28 10-44 10s-31-3-44-10z" fill={`url(#${gid}-sheen)`} />
      <g transform="translate(60 61)" filter={`url(#${gid}-gs)`}>
        <Glyph name={name} />
      </g>
    </svg>
  )
}