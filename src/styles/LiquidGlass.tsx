import { Icon } from '@/components/Icon'
import { useClock } from '@/lib/useClock'
import { CORE_APPS, QUICK_TOOLS, type ScreenProps } from './types'
import './liquidglass.css'

/** 风格二 · 苹果流体玻璃：流动光斑背景 + 高光玻璃面板 */
export function LiquidGlass({ onAction }: ScreenProps) {
  const { hh, mm, date, week } = useClock()

  return (
    <div className="glass">
      <div className="glass-aurora">
        <i className="blob b1" /><i className="blob b2" /><i className="blob b3" /><i className="blob b4" />
      </div>
      <div className="noise-layer" style={{ opacity: 0.04 }} />

      <header className="glass-header">
        <button className="glass-pill glass-brand tap" onClick={() => onAction('超级黑板')}>
          <span className="glass-mark"><Icon name="feather" size={24} strokeWidth={2} /></span>
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
            <span className="glass-app-icon"><Icon name={app.key} size={58} strokeWidth={1.35} /></span>
            <span className="glass-app-label">{app.label}</span>
          </button>
        ))}
      </section>

      <footer className="glass-dock-wrap">
        <div className="glass-dock">
          {QUICK_TOOLS.map(tool => (
            <button key={tool.key} className="glass-dock-item tap" onClick={() => onAction(tool.label)}>
              <Icon name={tool.key} size={28} strokeWidth={1.6} />
              <span>{tool.label}</span>
            </button>
          ))}
          <span className="glass-dock-sep" />
          <button className="glass-dock-item exit tap" onClick={() => onAction('下课')}>
            <Icon name="exit" size={28} strokeWidth={1.6} />
            <span>下课</span>
          </button>
        </div>
      </footer>
    </div>
  )
}