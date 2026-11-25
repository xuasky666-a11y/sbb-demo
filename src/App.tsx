import { useCallback, useEffect, useRef, useState } from 'react'
import { Icon } from '@/components/Icon'
import { STYLES } from '@/styles/registry'

const N = STYLES.length

function App() {
  const [index, setIndex] = useState(0)
  const [dir, setDir] = useState<1 | -1>(1)
  const [scale, setScale] = useState(1)
  const [toast, setToast] = useState<string | null>(null)
  const toastTimer = useRef<number>()

  /* 舞台等比缩放适配窗口 */
  useEffect(() => {
    const onResize = () =>
      setScale(Math.min(window.innerWidth / 1920, window.innerHeight / 1080))
    onResize()
    window.addEventListener('resize', onResize)
    return () => window.removeEventListener('resize', onResize)
  }, [])

  const go = useCallback((d: 1 | -1) => {
    setDir(d)
    setIndex(i => (i + d + N) % N)
  }, [])

  /* 键盘 ← → 翻页 */
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight') go(1)
      if (e.key === 'ArrowLeft') go(-1)
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

  return (
    <div className="viewport">
      <div className={`stage theme-${style.id}`} style={{ transform: `scale(${scale})` }}>
        <div key={style.id} className={`screen-enter ${dir === 1 ? 'from-right' : 'from-left'}`}>
          <Screen onAction={onAction} />
        </div>

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

        {toast && <div className="demo-toast">{toast}</div>}
      </div>
    </div>
  )
}

export default App