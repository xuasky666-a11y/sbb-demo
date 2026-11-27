import { CoreIcon } from '@/components/CoreIcon'
import { QuickDock } from '@/components/QuickDock'
import brandLogoWhite from '@/assets/brand-logo-white.png'
import { useClock } from '@/lib/useClock'
import { CORE_APPS, type ScreenProps } from './types'
import './deepspace.css'

/** 深空蓝：干净深蓝渐变 + 左下青色光晕，细体白时钟与裸糖果图标 */
export function DeepSpace({ onAction }: ScreenProps) {
  const { hh, mm, date, week } = useClock()

  return (
    <div className="deep">
      <div className="deep-stars" />
      <div className="noise-layer" style={{ opacity: 0.035 }} />

      <header className="deep-header">
        <div className="deep-brand">
          <img className="deep-logo" src={brandLogoWhite} alt="超级黑板 V4.4.2.3" />
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
              <CoreIcon name={app.key} size={128} />
            </span>
            <span className="deep-app-label">{app.label}</span>
          </button>
        ))}
      </section>

      <footer className="deep-dock-wrap">
        <div className="deep-dock">
          <QuickDock onAction={onAction} />
        </div>
      </footer>
    </div>
  )
}