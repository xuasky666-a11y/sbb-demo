import { useCallback, useEffect, useRef, useState } from 'react'
import { Icon } from '@/components/Icon'
import { STYLES } from '@/styles/registry'
import './scene.css'

const N = STYLES.length

/* 场景背景透明"白板洞"实测边界（1920×1080 设计坐标） */
const HOLE = { x: 621.3, y: 167.5, w: 691.3, h: 382.5 }

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
  const [dir, setDir] = useState<1 | -1>(1)
  const [vp, setVp] = useState({ w: window.innerWidth, h: window.innerHeight })
  const [toast, setToast] = useState<string | null>(null)
  const toastTimer = useRef<number>()

  /* 舞台等比缩放适配窗口 */
  useEffect(() => {
    const onResize = () => setVp({ w: window.innerWidth, h: window.innerHeight })
    window.addEventListener('resize', onResize)
    return () => window.removeEventListener('resize', onResize)
  }, [])

  const go = useCallback((d: 1 | -1) => {
    setDir(d)
    setIndex(i => (i + d + N) % N)
  }, [])

  /* 键盘 ← → 翻页（两种模式通用），Esc 返回场景 */
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight') go(1)
      if (e.key === 'ArrowLeft') go(-1)
      if (e.key === 'Escape') setMode('scene')
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [go])

  const onAction = useCallback((label: string) => {
    setToast(`演示模式 · 已点击「${label}」`)
    window.clearTimeout(toastTimer.current)
    toastTimer.current = window.setTimeout(() => setToast(null), 1600)
  }, [])

  const style = STYLES[index]
  const Screen = style.component
  const board = mode === 'board'

  /* 全屏缩放与场景缩放共用同一 fit；黑板层在"白板洞 ↔ 全屏"间 zoom */
  const fit = Math.min(vp.w / 1920, vp.h / 1080)
  const ox = (vp.w - 1920 * fit) / 2
  const oy = (vp.h - 1080 * fit) / 2
  const tx = board ? ox : ox + HOLE.x * fit
  const ty = board ? oy : oy + HOLE.y * fit
  const sx = board ? fit : (fit * HOLE.w) / 1920
  const sy = board ? fit : (fit * HOLE.h) / 1080

  return (
    <div className={`viewport app mode-${mode}`}>
      <div className="ambient" />

      {/* 教室场景：背景 + Figma 规格玻璃切换按钮 */}
      <div className="scene-frame" style={{ transform: `translate(${ox}px, ${oy}px) scale(${fit})` }}>
        <img className="scene-bg" src="/classroom-bg.png" alt="智慧教室场景" />
        <div className="scene-ui">
          <button className="glass-nav left" onClick={() => go(-1)} aria-label="上一个风格" title="上一个风格（←）">
            <Icon name="chevron-left" size={42} strokeWidth={2.3} />
          </button>
          <button className="glass-nav right" onClick={() => go(1)} aria-label="下一个风格" title="下一个风格（→）">
            <Icon name="chevron-right" size={42} strokeWidth={2.3} />
          </button>
          <div className="scene-pill">
            <span className="num">{String(index + 1).padStart(2, '0')} / {String(N).padStart(2, '0')}</span>
            <span>{style.name}</span>
          </div>
          <div className="scene-hint" style={{ left: HOLE.x + HOLE.w / 2, top: HOLE.y + HOLE.h + 16 }}>
            <ExpandIcon size={16} />
            点击黑板 · 进入全屏演示
          </div>
        </div>
      </div>

      {/* 黑板舞台：场景内嵌于白板洞，点击后 zoom 全屏 */}
      <div className="board-layer" style={{ transform: `translate(${tx}px, ${ty}px) scale(${sx}, ${sy})` }}>
        <div className={`stage theme-${style.id}`}>
          <div key={style.id} className={`screen-enter ${dir === 1 ? 'from-right' : 'from-left'}`}>
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
              <button className="back-chip" onClick={() => setMode('scene')} title="返回教室场景（Esc）">
                <ShrinkIcon />
                返回场景
              </button>
            </>
          )}

          {toast && <div className="demo-toast">{toast}</div>}

          {!board && (
            <>
              <div className="board-click" onClick={() => setMode('board')} role="button" aria-label="进入黑板全屏" />
              <div className="board-hover">
                <span className="ring"><ExpandIcon size={30} /></span>
                点击进入全屏
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  )
}

export default App