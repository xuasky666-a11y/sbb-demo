import type { CoreName } from './CoreIcon'

/** 风格七专属 · 水墨笔触：浓淡墨线 + 飞白复笔 + 朱砂小印点缀（随 currentColor 着墨） */
const SEAL = '#a93420'

function Art({ name }: { name: CoreName }) {
  const brush = { stroke: 'currentColor', strokeLinecap: 'round' as const, strokeLinejoin: 'round' as const, fill: 'none' }
  switch (name) {
    case 'courseware':
      return (
        <g>
          {/* 书卷 */}
          <rect x="30" y="26" width="60" height="68" rx="4" {...brush} strokeWidth={3.5} />
          <rect x="22" y="22" width="10" height="76" rx="5" fill="currentColor" opacity={0.85} />
          <rect x="88" y="22" width="10" height="76" rx="5" fill="currentColor" opacity={0.85} />
          <path d="M42 44h36M42 58h28M42 72h32" {...brush} strokeWidth={3} opacity={0.6} />
          <rect x="70" y="78" width="12" height="12" rx="2" fill={SEAL} opacity={0.9} />
        </g>
      )
    case 'board':
      return (
        <g>
          {/* 毛笔 + 墨迹 */}
          <path d="M78 22L52 58" {...brush} strokeWidth={6} />
          <path d="M52 58c-6 8-8 14-6 20 6 2 12 0 18-6l-4-10z" fill="currentColor" />
          <path d="M30 92c14-8 34-8 58-2" {...brush} strokeWidth={4.5} opacity={0.55} />
          <path d="M32 96c12-6 28-6 46-2" {...brush} strokeWidth={2} opacity={0.3} />
          <rect x="82" y="76" width="12" height="12" rx="2" fill={SEAL} opacity={0.9} />
        </g>
      )
    case 'cast':
      return (
        <g>
          {/* 飞白双线屏 */}
          <rect x="26" y="28" width="68" height="48" rx="6" {...brush} strokeWidth={3.5} />
          <rect x="30" y="32" width="60" height="40" rx="4" {...brush} strokeWidth={1.5} opacity={0.3} />
          <path d="M60 66V44M50 53l10-10 10 10" {...brush} strokeWidth={4.5} />
          <path d="M60 76v8M44 90h32" {...brush} strokeWidth={3.5} opacity={0.8} />
          <rect x="80" y="80" width="12" height="12" rx="2" fill={SEAL} opacity={0.9} />
        </g>
      )
    case 'live':
      return (
        <g>
          <rect x="26" y="28" width="68" height="48" rx="6" {...brush} strokeWidth={3.5} />
          <path d="M52 40l22 12-22 12z" fill="currentColor" />
          <path d="M46 76l-6 14M74 76l6 14" {...brush} strokeWidth={3.5} opacity={0.8} />
          <rect x="80" y="80" width="12" height="12" rx="2" fill={SEAL} opacity={0.9} />
        </g>
      )
  }
}

export function InkIcon({ name, size = 96 }: { name: CoreName; size?: number }) {
  return (
    <svg viewBox="0 0 120 120" width={size} height={size} aria-hidden="true" style={{ display: 'block' }}>
      <Art name={name} />
    </svg>
  )
}