import { useCallback, useEffect, useRef, useState } from 'react'
import { Icon } from '@/components/Icon'
import { STYLES } from '@/styles/registry'
import './scene.css'

const N = STYLES.length

/* 场景背景透明"白板洞"实测边界（1920×1080 设计坐标） */
const HOLE = { x: 621.3, y: 167.5, w: 691.3, h: 382.5 }
/* 黑板右侧蓝色墙牌实测边界（风格指示载体） */
const BADGE = { x: 1335, y: 461.3, w: 97.5, h: 95 }

const ExpandIcon = ({ size = 16 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden>
    <path d="M4 9V4h5M20 9V4h-5M4 15v5h5M20 15v5h-5" />
  </svg>
)
const ShrinkIcon = ({ size = 15 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden>
    <path d="M9 4v5H4M15 4v5h5M9 20v-5H4M15 20v-5h5" />
  </svg>
)

function App() {
  /* 刷新默认进入教室场景 */
  const [mode, setMode] = useState<'scene' | 'board'>('scene')
  const [index, setIndex] = useState(0)
  const [vp, setVp] = useState({ w: window.innerWidth, h: window.innerHeight })
  const [toast, setToast] = useState<string | null>(null)
  const [hover, setHover] = useState(false)
  const [zooming, setZooming] = useState(false)
  const toastTimer = useRef<number>()
  const zoomTimer = useRef<number>()

  useEffect(() => {
    const onResize = () => {
      setVp({ w: window.innerWidth, h: window.innerHeight })
      /* resize 时关闭 zoom 过渡，黑板与背景瞬时同步 */
      setZooming(false)
    }
    window.addEventListener('resize', onResize)
    return () => window.removeEventListener('resize', onResize)
  }, [])

  /* 模式切换：与 transform 变化同帧启用 zoom 过渡，避免跳变 */
  const toggleMode = useCallback((m: 'scene' | 'board') => {
    setZooming(true)
    setMode(m)
    window.clearTimeout(zoomTimer.current)
    zoomTimer.current = window.setTimeout(() => setZooming(false), 750)
  }, [])

  const go = useCallback((d: 1 | -1) => {
    setIndex(i => (i + d + N) % N)
  }, [])

  /* 键盘 ← → 翻页（两种模式通用），Esc 返回场景 */
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight') go(1)
      if (e.key === 'ArrowLeft') go(-1)
      if (e.key === 'Escape') toggleMode('scene')
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [go, toggleMode])

  const onAction = useCallback((label: string) => {
    setToast(`演示模式 · 已点击「${label}」`)
    window.clearTimeout(toastTimer.current)
    toastTimer.current = window.setTimeout(() => setToast(null), 1600)
  }, [])

  const style = STYLES[index]
  const Screen = style.component
  const board = mode === 'board'

  /* 场景背景：填充(cover) + 顶对齐；全屏舞台：等比(contain)居中 */
  const cover = Math.max(vp.w / 1920, vp.h / 1080)
  const cox = (vp.w - 1920 * cover) / 2
  const contain = Math.min(vp.w / 1920, vp.h / 1080)
  const fox = (vp.w - 1920 * contain) / 2
  const foy = (vp.h - 1080 * contain) / 2

  /* 黑板层在"白板洞(cover 坐标) ↔ 全屏(contain 坐标)"间 zoom */
  const tx = board ? fox : cox + HOLE.x * cover
  const ty = board ? foy : HOLE.y * cover
  const sx = board ? contain : (cover * HOLE.w) / 1920
  const sy = board ? contain : (cover * HOLE.h) / 1080

  /* 翻页按钮屏幕空间自适应：尺寸随窗口缩放，位置夹取保证恒在画面内 */
  const navSize = Math.max(64, Math.min(100, vp.w * 0.052))
  const boardCY = ty + (1080 * sy) / 2
  const navTop = Math.max(16, Math.min(vp.h - navSize - 16, boardCY - navSize / 2))
  const navLeft = Math.max(16, Math.min(vp.w - navSize - 16, cox + 180 * cover))
  const navRight = Math.max(16, Math.min(vp.w - navSize - 16, cox + 1640 * cover))

  return (
    <div className={`viewport app mode-${mode}`}>
      <div className="ambient" />

      {/* 教室场景：背景填充顶对齐 + Figma 规格玻璃切换按钮 */}
      <div className="scene-frame" style={{ transform: `translate(${cox}px, 0px) scale(${cover})` }}>
        <img className="scene-bg" src="/classroom-bg.png" alt="智慧教室场景" />
        {/* 风格指示：蓝色墙牌上的 序号/总数 + 风格名 */}
        <div className="scene-badge" style={{ left: BADGE.x, top: BADGE.y, width: BADGE.w, height: BADGE.h }}>
          <div className="row">
            <span className="idx">{index + 1}</span>
            <span className="total">/{N}</span>
          </div>
          <div className="name">{style.name}</div>
        </div>
      </div>

      {/* 场景控件（屏幕空间）：翻页按钮恒在画面内 */}
      <div className="scene-ui">
        <button
          className="glass-nav"
          style={{ left: navLeft, top: navTop, width: navSize, height: navSize }}
          onClick={() => go(-1)}
          aria-label="上一个风格"
          title="上一个风格（←）"
        >
          <Icon name="chevron-left" size={navSize * 0.42} strokeWidth={2.3} />
        </button>
        <button
          className="glass-nav"
          style={{ left: navRight, top: navTop, width: navSize, height: navSize }}
          onClick={() => go(1)}
          aria-label="下一个风格"
          title="下一个风格（→）"
        >
          <Icon name="chevron-right" size={navSize * 0.42} strokeWidth={2.3} />
        </button>
      </div>

      {/* 黑板舞台：场景内嵌于白板洞，点击后 zoom 全屏 */}
      <div
        className={`board-layer${zooming ? ' zoom' : ''}`}
        style={{ transform: `translate(${tx}px, ${ty}px) scale(${sx}, ${sy})` }}
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
      >
        <div className={`stage theme-${style.id}`}>
          <div key={style.id} className="screen-enter">
            <Screen onAction={onAction} />
          </div>

          {board && (
            <>
              <button className="nav-arrow left" onClick={() => go(-1)} aria-label="上一个风格" title="上一个风格（←）">
                <Icon name="chevron-left" size={30} strokeWidth={2} />
              </button>
              <button className="nav-arrow right" onClick={() => go(1)} aria-label="下一个风格" title="下一个风格（→）">
                <Icon name="chevron-right" size={30} strokeWidth={2} />
              </button>
              <div className="style-pill">
                <span className="num">{String(index + 1).padStart(2, '0')} / {String(N).padStart(2, '0')}</span>
                <span>{style.name}</span>
              </div>
              <button className="back-chip" onClick={() => toggleMode('scene')} title="返回教室场景（Esc）">
                <ShrinkIcon />
                返回场景
              </button>
            </>
          )}

          {toast && <div className="demo-toast">{toast}</div>}

          {!board && (
            <div className="board-click" onClick={() => toggleMode('board')} role="button" aria-label="进入黑板全屏" />
          )}
        </div>
      </div>

      {/* 悬停灰遮罩 + 进入全屏按钮（屏幕空间，文字恒为 14px） */}
      {!board && hover && (
        <div className="board-hover-screen" style={{ left: tx, top: ty, width: 1920 * sx, height: 1080 * sy }}>
          <div className="enter-btn">
            <span className="ring"><ExpandIcon size={26} /></span>
            <span className="txt">点击进入全屏</span>
          </div>
        </div>
      )}
    </div>
  )
}

export default App