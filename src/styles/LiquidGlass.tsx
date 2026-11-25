import { GlassIcon } from '@/components/GlassIcon'
import { QuickDock } from '@/components/QuickDock'
import brandMark from '@/assets/brand-mark.png'
import { useClock } from '@/lib/useClock'
import { CORE_APPS, type ScreenProps } from './types'
import './liquidglass.css'

/** 风格二 · 苹果流体玻璃：亮色丝绸光斑 + 高透白玻璃面板 */
export function LiquidGlass({ onAction }: ScreenProps) {
  const { hh, mm, date, week } = useClock()

  return (
    <div className="glass">
      <div className="glass-aurora">
        <i className="blob b1" /><i className="blob b2" /><i className="blob b3" /><i className="blob b4" /><i className="blob b5" />
      </div>
      <div className="noise-layer" style={{ opacity: 0.04 }} />

      <header className="glass-header">
        <button className="glass-pill glass-brand tap" onClick={() => onAction('超级黑板')}>
          <img className="glass-mark" src={brandMark} alt="超级黑板" />
          <span className="glass-brand-name">超级黑板</span>
          <span className="glass-ver">V4.4.2.3</span>
        </button>
        <button className="glass-pill glass-cast tap" onClick={() => onAction('投屏码')}>
          <span className="glass-cast-label">投屏码</span>
          <span className="glass-cast-code">HYUI</span>
        </button>
      </header>

      <section className="glass-clock">
        <div className="glass-time">{hh}<span className="glass-colon">:</span>{mm}</div>
        <div className="glass-pill glass-date">{date} · {week}</div>
      </section>

      <section className="glass-apps">
        {CORE_APPS.map(app => (
          <button key={app.key} className="glass-app tap" onClick={() => onAction(app.label)}>
            <span className="glass-app-icon"><GlassIcon name={app.key} size={100} /></span>
            <span className="glass-app-label">{app.label}</span>
          </button>
        ))}
      </section>

      <footer className="glass-dock-wrap">
        <div className="glass-dock">
          <QuickDock onAction={onAction} />
        </div>
      </footer>
    </div>
  )
}