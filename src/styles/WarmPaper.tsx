import { WarmIcon } from '@/components/WarmIcon'
import { QuickDock } from '@/components/QuickDock'
import brandMark from '@/assets/brand-mark.png'
import { useClock } from '@/lib/useClock'
import { CORE_APPS, type ScreenProps } from './types'
import './warmpaper.css'

/** 风格六 · 暖木纸感：米纸底、贴纸卡片、票据投屏码 */
export function WarmPaper({ onAction }: ScreenProps) {
  const { hh, mm, date, week } = useClock()

  return (
    <div className="warm">
      <div className="warm-dots" />
      <div className="noise-layer" style={{ opacity: 0.05 }} />

      <header className="warm-header">
        <div className="warm-brand">
          <img className="warm-badge" src={brandMark} alt="超级黑板" />
          <span className="warm-brand-text">
            <strong>超级黑板</strong>
            <em>V4.4.2.3</em>
          </span>
        </div>
        <button className="warm-ticket tap" onClick={() => onAction('投屏码')}>
          <i className="hole left" /><i className="hole right" />
          <span>投屏码</span>
          <strong>HYUI</strong>
        </button>
      </header>

      <section className="warm-clock">
        <div className="warm-time">{hh}<span>:</span>{mm}</div>
        <div className="warm-date">
          <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round">
            <circle cx="12" cy="12" r="4.4" />
            <path d="M12 2.5v2.4M12 19.1v2.4M2.5 12h2.4M19.1 12h2.4M5 5l1.7 1.7M17.3 17.3L19 19M19 5l-1.7 1.7M6.7 17.3L5 19" />
          </svg>
          {date}&ensp;{week}
        </div>
      </section>

      <section className="warm-apps">
        {CORE_APPS.map((app, i) => (
          <button key={app.key} className={`warm-app tap w${i}`} onClick={() => onAction(app.label)}>
            <span className={`warm-app-icon c-${app.key}`}>
              <WarmIcon name={app.key} size={84} />
            </span>
            <span className="warm-app-label">{app.label}</span>
          </button>
        ))}
      </section>

      <footer className="warm-dock-wrap">
        <div className="warm-dock">
          <QuickDock onAction={onAction} />
        </div>
      </footer>
    </div>
  )
}