import type { CoreName } from './CoreIcon'

/** 风格九专属 · 软陶捏塑：上光下暗渐变 + 顶部高光点 + 软投影，圆润厚实的黏土物件 */
const CLAY: Record<CoreName, { light: string; base: string; dark: string }> = {
  courseware: { light: '#ffb387', base: '#e8703a', dark: '#c4521f' },
  board: { light: '#8fd4a8', base: '#3f8a5c', dark: '#2c6a44' },
  cast: { light: '#8fc0f0', base: '#4a7fc0', dark: '#33619e' },
  live: { light: '#b9a0e8', base: '#7a5cc0', dark: '#5c409e' },
}

function Art({ name, c }: { name: CoreName; c: { light: string; base: string; dark: string } }) {
  const body = `url(#cl-${name}-body)`
  switch (name) {
    case 'courseware':
      return (
        <g>
          <rect x="28" y="24" width="64" height="72" rx="16" fill={body} />
          <rect x="28" y="24" width="14" height="72" rx="7" fill={c.dark} opacity={0.55} />
          <path d="M52 44h26M52 58h20M52 72h24" stroke="#fff" strokeWidth="6" strokeLinecap="round" opacity={0.9} />
          <ellipse cx="48" cy="34" rx="12" ry="6" fill="#fff" opacity={0.4} />
        </g>
      )
    case 'board':
      return (
        <g>
          <path d="M34 86l5-16 32-32a10 10 0 0114 14L53 84l-19 2z" fill={body} />
          <path d="M34 86l5-16 11 11-16 5z" fill={c.dark} opacity={0.7} />
          <path d="M66 44l12 12" stroke="#fff" strokeWidth="6" strokeLinecap="round" opacity={0.6} />
          <ellipse cx="72" cy="40" rx="9" ry="5" fill="#fff" opacity={0.45} transform="rotate(-45 72 40)" />
        </g>
      )
    case 'cast':
      return (
        <g>
          <rect x="24" y="26" width="72" height="52" rx="16" fill={body} />
          <path d="M60 66V44M50 53l10-10 10 10" stroke="#fff" strokeWidth="6" strokeLinecap="round" strokeLinejoin="round" fill="none" opacity={0.95} />
          <rect x="50" y="80" width="20" height="12" rx="6" fill={c.dark} />
          <ellipse cx="44" cy="36" rx="12" ry="6" fill="#fff" opacity={0.4} />
        </g>
      )
    case 'live':
      return (
        <g>
          <rect x="24" y="26" width="72" height="52" rx="16" fill={body} />
          <path d="M52 40l22 12-22 12z" fill="#fff" opacity={0.95} />
          <path d="M46 78l-6 12M74 78l6 12" stroke={c.dark} strokeWidth="9" strokeLinecap="round" />
          <ellipse cx="44" cy="36" rx="12" ry="6" fill="#fff" opacity={0.4} />
        </g>
      )
  }
}

export function ClayIcon({ name, size = 96 }: { name: CoreName; size?: number }) {
  const c = CLAY[name]
  const gid = `cl-${name}`
  return (
    <svg viewBox="0 0 120 120" width={size} height={size} aria-hidden="true" style={{ display: 'block' }}>
      <defs>
        <linearGradient id={`${gid}-body`} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor={c.light} />
          <stop offset="0.6" stopColor={c.base} />
          <stop offset="1" stopColor={c.dark} />
        </linearGradient>
        <filter id={`${gid}-soft`} x="-30%" y="-30%" width="160%" height="160%">
          <feDropShadow dx="0" dy="4" stdDeviation="3" floodColor={c.dark} floodOpacity="0.35" />
        </filter>
      </defs>
      <g filter={`url(#${gid}-soft)`}>
        <Art name={name} c={c} />
      </g>
    </svg>
  )
}