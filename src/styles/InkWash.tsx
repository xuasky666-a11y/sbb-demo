import { CoreIcon } from '@/components/CoreIcon'
import { QuickDock } from '@/components/QuickDock'
import brandMark from '@/assets/brand-mark.png'
import { useClock } from '@/lib/useClock'
import { CORE_APPS, type ScreenProps } from './types'
import './inkwash.css'

/** 风格七 · 国风水墨：宣纸底 + 淡墨远山 + 朱红印章 + 团扇应用 */
export function InkWash({ onAction }: ScreenProps) {
  const { hh, mm, date, week } = useClock()

  return (
    <div className="ink">
      {/* 淡墨远山 */}
      <svg className="ink-mountains" viewBox="0 0 1920 420" preserveAspectRatio="xMidYMax slice" aria-hidden="true">
        <defs>
          <linearGradient id="ink-far" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0" stopColor="#8a8f8c" stopOpacity="0.34" />
            <stop offset="1" stopColor="#8a8f8c" stopOpacity="0" />
          </linearGradient>
          <linearGradient id="ink-mid" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0" stopColor="#5f6663" stopOpacity="0.4" />
            <stop offset="1" stopColor="#5f6663" stopOpacity="0" />
          </linearGradient>
          <linearGradient id="ink-near" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0" stopColor="#3d4441" stopOpacity="0.5" />
            <stop offset="1" stopColor="#3d4441" stopOpacity="0.04" />
          </linearGradient>
        </defs>
        <path fill="url(#ink-far)" d="M0 250 Q180 120 340 210 T680 170 Q840 90 1010 200 T1360 160 Q1560 80 1720 190 T1920 170 V420 H0 Z" />
        <path fill="url(#ink-mid)" d="M0 320 Q240 200 430 280 T860 250 Q1060 160 1260 270 T1660 240 Q1800 200 1920 260 V420 H0 Z" />
        <path fill="url(#ink-near)" d="M0 380 Q300 300 560 350 T1120 330 Q1360 280 1560 350 T1920 330 V420 H0 Z" />
      </svg>
      <div className="ink-sun" />
      <div className="noise-layer" style={{ opacity: 0.06 }} />
      <div className="ink-poem">书山有路勤为径</div>
      <div className="ink-poem right">学海无涯苦作舟</div>

      <header className="ink-header">
        <button className="ink-brand tap" onClick={() => onAction('超级黑板')}>
          <img className="ink-mark" src={brandMark} alt="" draggable={false} />
          <span className="ink-brand-text">
            <span className="ink-brand-name">超级黑板</span>
            <span className="ink-ver">V4.4.2.3</span>
          </span>
        </button>
        <button className="ink-cast tap" onClick={() => onAction('投屏码')}>
          <span className="ink-cast-label">投屏码</span>
          <span className="ink-seal">
            <span>H</span><span>Y</span><span>U</span><span>I</span>
          </span>
        </button>
      </header>

      <section className="ink-clock">
        <div className="ink-time">{hh}<span className="ink-colon">:</span>{mm}</div>
        <div className="ink-date">〔 {date} · {week} 〕</div>
      </section>

      <section className="ink-apps">
        {CORE_APPS.map(app => (
          <button key={app.key} className="ink-app tap" onClick={() => onAction(app.label)}>
            <span className="ink-fan">
              <CoreIcon name={app.key} size={104} />
            </span>
            <span className="ink-app-label">{app.label}</span>
          </button>
        ))}
      </section>

      <footer className="ink-scroll-wrap">
        <div className="ink-scroll">
          <span className="ink-rod" />
          <div className="ink-scroll-paper">
            <QuickDock onAction={onAction} />
          </div>
          <span className="ink-rod" />
        </div>
      </footer>
    </div>
  )
}