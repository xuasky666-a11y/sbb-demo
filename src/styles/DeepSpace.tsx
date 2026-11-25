import { Icon } from '@/components/Icon'
import { GlossyIcon } from '@/components/GlossyIcon'
import { useClock } from '@/lib/useClock'
import { CORE_APPS, QUICK_TOOLS, type ScreenProps } from './types'
import './deepspace.css'

/** 风格五 · 深空蓝：参考原型的现代深色方向，星空 + 暗玻璃 */
export function DeepSpace({ onAction }: ScreenProps) {
  const { hh, mm, date, week } = useClock()

  return (
    <div className="deep">
      <div className="deep-stars" />
      <div className="deep-glow" />
      <div className="noise-layer" style={{ opacity: 0.035 }} />

      <header className="deep-header">
        <div className="deep-brand">
          <span className="deep-badge"><Icon name="feather" size={26} strokeWidth={2} /></span>
          <span className="deep-brand-text">
            <strong>超级黑板</strong>
            <em>V4.4.2.3</em>
          </span>
        </div>
        <button className="deep-cast tap" onClick={() => onAction('投屏码')}>
          <span>投屏码</span>
          <strong>HYUI</strong>
        </button>
      </header>

      <section className="deep-clock">
        <div className="deep-time">{hh}<span>:</span>{mm}</div>
        <div className="deep-date">{date}&ensp;{week}</div>
      </section>

      <section className="deep-apps">
        {CORE_APPS.map(app => (
          <button key={app.key} className="deep-app tap" onClick={() => onAction(app.label)}>
            <span className="deep-tile">
              <GlossyIcon name={app.key} size={92} />
            </span>
            <span className="deep-app-label">{app.label}</span>
          </button>
        ))}
      </section>

      <footer className="deep-dock-wrap">
        <div className="deep-dock">
          {QUICK_TOOLS.map(tool => (
            <button key={tool.key} className={`deep-tool tap t-${tool.key}`} onClick={() => onAction(tool.label)}>
              <Icon name={tool.key} size={25} strokeWidth={1.8} />
              <span>{tool.label}</span>
            </button>
          ))}
          <span className="deep-sep" />
          <button className="deep-tool exit tap" onClick={() => onAction('下课')}>
            <Icon name="exit" size={25} strokeWidth={1.8} />
            <span>下课</span>
          </button>
        </div>
      </footer>
    </div>
  )
}