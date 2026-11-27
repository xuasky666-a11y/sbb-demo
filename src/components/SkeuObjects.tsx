/**
 * 拟物风格核心物件：与翻页钟同材质语言（石墨机身 / 象牙面板 / 黄铜件 / 琥珀指示灯）。
 * 纯 SVG 材质渲染：渐变金属、玻璃高光、接触投影由外层 .skeu-object 承担。
 */
type P = { size?: number }

const Graphite = ({ id }: { id: string }) => (
  <linearGradient id={id} x1="0" y1="0" x2="0" y2="1">
    <stop offset="0" stopColor="#5a5e66" />
    <stop offset="0.45" stopColor="#33363c" />
    <stop offset="0.55" stopColor="#24262b" />
    <stop offset="1" stopColor="#3a3d43" />
  </linearGradient>
)
const Ivory = ({ id }: { id: string }) => (
  <linearGradient id={id} x1="0" y1="0" x2="0" y2="1">
    <stop offset="0" stopColor="#fdfcf8" />
    <stop offset="0.6" stopColor="#f0ece1" />
    <stop offset="1" stopColor="#ddd6c6" />
  </linearGradient>
)
const Brass = ({ id }: { id: string }) => (
  <linearGradient id={id} x1="0" y1="0" x2="0" y2="1">
    <stop offset="0" stopColor="#e8c877" />
    <stop offset="0.5" stopColor="#c9a24a" />
    <stop offset="1" stopColor="#8a6a2a" />
  </linearGradient>
)

/** 课件：石墨封面文件夹 + 象牙纸页 + 黄铜搭扣 */
export function CoursewareObject({ size = 160 }: P) {
  return (
    <svg viewBox="0 0 120 120" width={size} height={size} aria-hidden="true">
      <defs>
        <Graphite id="cw-g" /><Ivory id="cw-i" /><Brass id="cw-b" />
        <linearGradient id="cw-spine" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0" stopColor="#6a6e76" /><stop offset="1" stopColor="#2a2c31" />
        </linearGradient>
      </defs>
      {/* 纸页（右侧露出） */}
      <rect x="34" y="26" width="62" height="76" rx="4" fill="url(#cw-i)" />
      <g stroke="#c9c2b0" strokeWidth="1.4">
        <line x1="90" y1="34" x2="90" y2="96" /><line x1="93" y1="36" x2="93" y2="94" />
      </g>
      {/* 封面 */}
      <rect x="24" y="20" width="62" height="82" rx="7" fill="url(#cw-g)" />
      <rect x="24" y="20" width="10" height="82" rx="5" fill="url(#cw-spine)" />
      <rect x="26" y="22" width="58" height="4" rx="2" fill="#ffffff" opacity="0.16" />
      {/* 压印标题线 */}
      <rect x="42" y="40" width="34" height="4" rx="2" fill="#f4f1ea" opacity="0.75" />
      <rect x="42" y="50" width="24" height="3" rx="1.5" fill="#f4f1ea" opacity="0.4" />
      {/* 黄铜搭扣 */}
      <rect x="78" y="56" width="16" height="14" rx="3" fill="url(#cw-b)" />
      <rect x="80" y="58" width="12" height="3" rx="1.5" fill="#fff" opacity="0.5" />
      <circle cx="86" cy="66" r="2.4" fill="#5f4718" />
    </svg>
  )
}

/** 白板：石墨边框 + 象牙书写面 + 黄铜笔槽与马克笔 */
export function BoardObject({ size = 160 }: P) {
  return (
    <svg viewBox="0 0 120 120" width={size} height={size} aria-hidden="true">
      <defs>
        <Graphite id="wb-g" /><Ivory id="wb-i" /><Brass id="wb-b" />
      </defs>
      {/* 边框 */}
      <rect x="16" y="22" width="88" height="64" rx="7" fill="url(#wb-g)" />
      <rect x="18" y="24" width="84" height="3" rx="1.5" fill="#fff" opacity="0.16" />
      {/* 书写面 */}
      <rect x="23" y="29" width="74" height="50" rx="3" fill="url(#wb-i)" />
      {/* 淡墨笔迹 */}
      <path d="M32 44 q10 -8 20 0 t20 0" fill="none" stroke="#5f6663" strokeWidth="2.4" strokeLinecap="round" opacity="0.5" />
      <path d="M32 58 q14 6 30 -2" fill="none" stroke="#a93420" strokeWidth="2.4" strokeLinecap="round" opacity="0.55" />
      {/* 笔槽 */}
      <rect x="30" y="86" width="60" height="7" rx="3.5" fill="url(#wb-b)" />
      <rect x="32" y="87.5" width="56" height="2" rx="1" fill="#fff" opacity="0.45" />
      {/* 马克笔 */}
      <rect x="40" y="80" width="30" height="7" rx="3.5" fill="url(#wb-g)" />
      <rect x="66" y="80" width="9" height="7" rx="3" fill="#f0ece1" />
      {/* 支脚 */}
      <rect x="26" y="93" width="8" height="8" rx="2" fill="#2a2c31" />
      <rect x="86" y="93" width="8" height="8" rx="2" fill="#2a2c31" />
    </svg>
  )
}

/** 投屏：石墨投影机身 + 黄铜镜头 + 琥珀光束 */
export function CastObject({ size = 160 }: P) {
  return (
    <svg viewBox="0 0 120 120" width={size} height={size} aria-hidden="true">
      <defs>
        <Graphite id="pj-g" /><Brass id="pj-b" />
        <radialGradient id="pj-lens" cx="0.4" cy="0.35" r="0.8">
          <stop offset="0" stopColor="#ffe9b0" /><stop offset="0.45" stopColor="#ffc76a" /><stop offset="1" stopColor="#7a4a10" />
        </radialGradient>
        <linearGradient id="pj-beam" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0" stopColor="#ffc76a" stopOpacity="0.5" /><stop offset="1" stopColor="#ffc76a" stopOpacity="0" />
        </linearGradient>
      </defs>
      {/* 光束 */}
      <path d="M88 52 L116 34 L116 78 L88 66 Z" fill="url(#pj-beam)" />
      {/* 机身 */}
      <rect x="16" y="40" width="76" height="44" rx="9" fill="url(#pj-g)" />
      <rect x="18" y="42" width="72" height="4" rx="2" fill="#fff" opacity="0.16" />
      {/* 散热格栅 */}
      <g stroke="#1c1e22" strokeWidth="2.4" strokeLinecap="round">
        <line x1="26" y1="52" x2="26" y2="72" /><line x1="33" y1="52" x2="33" y2="72" /><line x1="40" y1="52" x2="40" y2="72" />
      </g>
      {/* 琥珀指示灯 */}
      <circle cx="52" cy="50" r="3" fill="#ffc76a" />
      <circle cx="52" cy="50" r="5" fill="#ffc76a" opacity="0.25" />
      {/* 黄铜镜头 */}
      <circle cx="76" cy="62" r="17" fill="url(#pj-b)" />
      <circle cx="76" cy="62" r="12" fill="url(#pj-lens)" />
      <circle cx="71" cy="57" r="4" fill="#fff" opacity="0.65" />
      {/* 支脚 */}
      <rect x="26" y="84" width="10" height="7" rx="2" fill="#2a2c31" />
      <rect x="66" y="84" width="10" height="7" rx="2" fill="#2a2c31" />
    </svg>
  )
}

/** 线上课堂：石墨监视器 + 象牙辉光屏 + 播放符 + 琥珀电源灯 */
export function LiveObject({ size = 160 }: P) {
  return (
    <svg viewBox="0 0 120 120" width={size} height={size} aria-hidden="true">
      <defs>
        <Graphite id="tv-g" /><Brass id="tv-b" />
        <radialGradient id="tv-screen" cx="0.5" cy="0.4" r="0.85">
          <stop offset="0" stopColor="#fdfcf8" /><stop offset="0.6" stopColor="#e8e2d2" /><stop offset="1" stopColor="#c9c2b0" />
        </radialGradient>
      </defs>
      {/* 边框 */}
      <rect x="20" y="20" width="80" height="58" rx="9" fill="url(#tv-g)" />
      <rect x="22" y="22" width="76" height="4" rx="2" fill="#fff" opacity="0.16" />
      {/* 屏幕 */}
      <rect x="27" y="27" width="66" height="44" rx="4" fill="url(#tv-screen)" />
      <path d="M27 27 h66 v10 q-33 8 -66 0 Z" fill="#fff" opacity="0.35" />
      {/* 播放符（石墨压印） */}
      <path d="M54 40 l16 9 -16 9 Z" fill="#33363c" />
      <path d="M54 40 l16 9 -16 9 Z" fill="none" stroke="#fff" strokeWidth="1" opacity="0.4" />
      {/* 电源灯 */}
      <circle cx="92" cy="74" r="2.6" fill="#ffc76a" />
      {/* 支架 */}
      <rect x="54" y="78" width="12" height="12" fill="url(#tv-g)" />
      <rect x="38" y="90" width="44" height="7" rx="3.5" fill="url(#tv-b)" />
      <rect x="40" y="91.5" width="40" height="2" rx="1" fill="#fff" opacity="0.45" />
    </svg>
  )
}

export const SKEU_OBJECTS = {
  courseware: CoursewareObject,
  board: BoardObject,
  cast: CastObject,
  live: LiveObject,
} as const