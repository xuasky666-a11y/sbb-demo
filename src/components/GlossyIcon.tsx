import { useId } from 'react'

export type GlossyName = 'courseware' | 'board' | 'cast' | 'live'

/** 拟物高光图标：参考原型的糖果质感 3D 图标，供拟物 / 深空风格复用 */
export function GlossyIcon({ name, size = 96 }: { name: GlossyName; size?: number }) {
  const uid = useId().replace(/:/g, '')
  const g = (n: string) => `url(#${uid}-${n})`

  const defs = (
    <defs>
      <linearGradient id={`${uid}-orange`} x1="0" y1="0" x2="0.6" y2="1">
        <stop offset="0" stopColor="#FFB25E" /><stop offset="1" stopColor="#F4633A" />
      </linearGradient>
      <linearGradient id={`${uid}-purple`} x1="0" y1="0" x2="0.5" y2="1">
        <stop offset="0" stopColor="#C9A6FF" /><stop offset="1" stopColor="#8B5CF6" />
      </linearGradient>
      <linearGradient id={`${uid}-blue`} x1="0" y1="0" x2="0.5" y2="1">
        <stop offset="0" stopColor="#7CC5FF" /><stop offset="1" stopColor="#2F8FE8" />
      </linearGradient>
      <linearGradient id={`${uid}-paper`} x1="0" y1="0" x2="0" y2="1">
        <stop offset="0" stopColor="#FFFFFF" /><stop offset="1" stopColor="#E9EDF2" />
      </linearGradient>
      <linearGradient id={`${uid}-metal`} x1="0" y1="0" x2="0" y2="1">
        <stop offset="0" stopColor="#E7EBF0" /><stop offset="1" stopColor="#B9C2CC" />
      </linearGradient>
      <linearGradient id={`${uid}-shine`} x1="0" y1="0" x2="0" y2="1">
        <stop offset="0" stopColor="#FFFFFF" stopOpacity="0.55" />
        <stop offset="0.5" stopColor="#FFFFFF" stopOpacity="0.08" />
        <stop offset="1" stopColor="#FFFFFF" stopOpacity="0" />
      </linearGradient>
    </defs>
  )

  return (
    <svg viewBox="0 0 96 96" width={size} height={size} aria-hidden="true">
      {defs}
      {name === 'courseware' && (
        <g>
          <rect x="34" y="16" width="44" height="60" rx="7" fill={g('paper')} />
          <circle cx="63" cy="34" r="9" fill="#F4A23A" />
          <path d="M63 25a9 9 0 019 9h-9z" fill="#F4633A" />
          <rect x="48" y="50" width="24" height="4" rx="2" fill="#C6CDD6" />
          <rect x="48" y="59" width="18" height="4" rx="2" fill="#D6DCE4" />
          <rect x="16" y="22" width="40" height="56" rx="8" fill={g('orange')} />
          <rect x="16" y="22" width="40" height="28" rx="8" fill={g('shine')} />
          <text x="36" y="60" textAnchor="middle" fontSize="32" fontWeight="800" fill="#fff" fontFamily="'SF Pro Display',system-ui">P</text>
        </g>
      )}
      {name === 'board' && (
        <g>
          <rect x="16" y="18" width="64" height="60" rx="13" fill={g('purple')} />
          <rect x="16" y="18" width="64" height="30" rx="13" fill={g('shine')} />
          <rect x="26" y="34" width="30" height="4" rx="2" fill="#fff" opacity="0.5" />
          <rect x="26" y="44" width="38" height="4" rx="2" fill="#fff" opacity="0.4" />
          <rect x="26" y="54" width="24" height="4" rx="2" fill="#fff" opacity="0.3" />
          <g transform="rotate(45 62 52)">
            <rect x="56" y="24" width="12" height="42" rx="5" fill={g('paper')} />
            <path d="M56 66h12l-6 12z" fill="#E7EBF0" />
            <path d="M59.5 73h5l-2.5 5z" fill="#6B7280" />
          </g>
        </g>
      )}
      {name === 'cast' && (
        <g>
          <rect x="40" y="70" width="16" height="10" fill={g('metal')} />
          <rect x="30" y="78" width="36" height="7" rx="3.5" fill={g('metal')} />
          <rect x="14" y="16" width="68" height="56" rx="10" fill={g('orange')} />
          <rect x="14" y="16" width="68" height="28" rx="10" fill={g('shine')} />
          <path d="M48 30l14 14h-8v12h-12V44h-8z" fill="#fff" />
        </g>
      )}
      {name === 'live' && (
        <g>
          <path d="M30 76l-6 10h8l5-8zM66 76l6 10h-8l-5-8z" fill="#2F8FE8" />
          <rect x="14" y="14" width="68" height="10" rx="5" fill={g('blue')} />
          <rect x="18" y="22" width="60" height="54" rx="8" fill={g('blue')} />
          <rect x="18" y="22" width="60" height="26" rx="8" fill={g('shine')} />
          <path d="M42 36l18 11-18 11z" fill="#fff" />
        </g>
      )}
    </svg>
  )
}