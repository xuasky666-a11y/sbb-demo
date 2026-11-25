import type { CoreName } from './CoreIcon'

/** 风格六专属 · 手绘贴纸：粗墨线描边 + 暖色平涂 + 微微歪斜的手作感 */
const INK = '#4a3a28'

function Art({ name }: { name: CoreName }) {
  const line = { stroke: INK, strokeWidth: 4, strokeLinecap: 'round' as const, strokeLinejoin: 'round' as const }
  switch (name) {
    case 'courseware':
      return (
        <g>
          <rect x="24" y="24" width="72" height="54" rx="10" fill="#ff9d5c" {...line} />
          <rect x="34" y="34" width="52" height="34" rx="6" fill="#fffdf7" {...line} strokeWidth={3} />
          <path d="M44 60v-9M56 60v-16M68 60v-6" stroke="#e8703a" strokeWidth="5" strokeLinecap="round" />
          <path d="M46 78l-6 14M74 78l6 14M38 92h44" fill="none" {...line} />
        </g>
      )
    case 'board':
      return (
        <g>
          <rect x="26" y="22" width="62" height="76" rx="9" fill="#fffdf7" {...line} />
          <path d="M36 38h30M36 50h22" stroke="#b08a54" strokeWidth="3.5" strokeLinecap="round" />
          <path d="M52 84l4-13 26-26a7.5 7.5 0 0111 11L67 82l-15 2z" fill="#5b8fd9" {...line} strokeWidth={3.5} />
          <path d="M78 49l10 10" stroke="#fffdf7" strokeWidth="3.5" strokeLinecap="round" />
        </g>
      )
    case 'cast':
      return (
        <g>
          <rect x="22" y="26" width="76" height="52" rx="11" fill="#e8703a" {...line} />
          <path d="M60 66V44M49 54l11-11 11 11" fill="none" stroke="#fffdf7" strokeWidth="6" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M60 78v8M42 92h36" fill="none" {...line} />
        </g>
      )
    case 'live':
      return (
        <g>
          <rect x="22" y="26" width="76" height="52" rx="11" fill="#7fbf9a" {...line} />
          <path d="M52 40l22 12-22 12z" fill="#fffdf7" {...line} strokeWidth={3.5} />
          <path d="M46 78l-6 14M74 78l6 14" fill="none" {...line} />
        </g>
      )
  }
}

export function WarmIcon({ name, size = 84 }: { name: CoreName; size?: number }) {
  return (
    <svg viewBox="0 0 120 120" width={size} height={size} aria-hidden="true" style={{ display: 'block' }}>
      <g transform="rotate(-2 60 60)">
        <Art name={name} />
      </g>
    </svg>
  )
}