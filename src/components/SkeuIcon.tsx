import type { CoreName } from './CoreIcon'

/** 风格一专属 · 拟物高光磁贴：垂直渐变 + 顶部釉面高光 + 白色浮雕图形 */
const PALETTE: Record<CoreName, { top: string; mid: string; deep: string }> = {
  courseware: { top: '#ffc06a', mid: '#f08a24', deep: '#c95e0e' },
  board: { top: '#c9a4ff', mid: '#8f5fe8', deep: '#6a3cc4' },
  cast: { top: '#ff9a70', mid: '#e85a28', deep: '#bf3d12' },
  live: { top: '#7cbcff', mid: '#3383e8', deep: '#1c5fb8' },
}

function Glyph({ name, deep }: { name: CoreName; deep: string }) {
  switch (name) {
    case 'courseware':
      return (
        <g>
          <rect x="-25" y="-24" width="50" height="36" rx="7" fill="#fff" />
          <rect x="-17" y="-14" width="7" height="16" rx="2.5" fill={deep} />
          <rect x="-6" y="-19" width="7" height="21" rx="2.5" fill={deep} opacity="0.75" />
          <rect x="5" y="-10" width="7" height="12" rx="2.5" fill={deep} opacity="0.55" />
          <path d="M-10 12l-5 9M10 12l5 9M-14 21h28" stroke="#fff" strokeWidth="5" strokeLinecap="round" fill="none" />
        </g>
      )
    case 'board':
      return (
        <g>
          <path d="M-20 20l3.5-12L12-20a7 7 0 0110 10L-6 16l-14 4z" fill="#fff" />
          <path d="M8-16l10 10" stroke={deep} strokeWidth="4" strokeLinecap="round" opacity="0.5" />
          <path d="M-20 20l3.5-12 8.5 8.5L-20 20z" fill={deep} opacity="0.65" />
        </g>
      )
    case 'cast':
      return (
        <g>
          <rect x="-26" y="-24" width="52" height="36" rx="7" fill="#fff" />
          <path d="M0 6v-18M-9-4l9-9 9 9" stroke={deep} strokeWidth="6" strokeLinecap="round" strokeLinejoin="round" fill="none" />
          <path d="M-12 21h24" stroke="#fff" strokeWidth="6" strokeLinecap="round" />
        </g>
      )
    case 'live':
      return (
        <g>
          <rect x="-26" y="-24" width="52" height="36" rx="7" fill="#fff" />
          <path d="M-6-15l16 9-16 9z" fill={deep} />
          <path d="M-10 12l-5 9M10 12l5 9" stroke="#fff" strokeWidth="5" strokeLinecap="round" />
        </g>
      )
  }
}

export function SkeuIcon({ name, size = 112 }: { name: CoreName; size?: number }) {
  const c = PALETTE[name]
  const gid = `sk-${name}`
  return (
    <svg viewBox="0 0 120 120" width={size} height={size} aria-hidden="true" style={{ display: 'block' }}>
      <defs>
        <linearGradient id={`${gid}-body`} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor={c.top} />
          <stop offset="0.55" stopColor={c.mid} />
          <stop offset="1" stopColor={c.deep} />
        </linearGradient>
        <linearGradient id={`${gid}-gloss`} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#fff" stopOpacity="0.75" />
          <stop offset="1" stopColor="#fff" stopOpacity="0" />
        </linearGradient>
        <filter id={`${gid}-gs`} x="-40%" y="-40%" width="180%" height="180%">
          <feDropShadow dx="0" dy="2.5" stdDeviation="2" floodColor="#000" floodOpacity="0.3" />
        </filter>
      </defs>
      {/* 磁贴主体 */}
      <rect x="8" y="8" width="104" height="104" rx="28" fill={`url(#${gid}-body)`} />
      <rect x="8.75" y="8.75" width="102.5" height="102.5" rx="27.25" fill="none" stroke="#000" strokeOpacity="0.22" strokeWidth="1.5" />
      <rect x="11" y="10.5" width="98" height="99" rx="25.5" fill="none" stroke="#fff" strokeOpacity="0.4" strokeWidth="1.5" />
      {/* 釉面高光 */}
      <path d="M14 36a24 24 0 0124-24h44a24 24 0 0124 24v6c-14 8-30 12-46 12s-32-4-46-12z" fill={`url(#${gid}-gloss)`} />
      {/* 浮雕图形 */}
      <g transform="translate(60 62)" filter={`url(#${gid}-gs)`}>
        <Glyph name={name} deep={c.deep} />
      </g>
    </svg>
  )
}