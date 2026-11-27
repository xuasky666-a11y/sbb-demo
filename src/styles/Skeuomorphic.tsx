import { QuickDock } from '@/components/QuickDock'
import { CoreIcon } from '@/components/CoreIcon'
import brandMark from '@/assets/brand-mark.png'
import { useClock } from '@/lib/useClock'
import { CORE_APPS, type ScreenProps } from './types'
import './skeuomorphic.css'

/** 风格·拟物质感：方形翻页钟、实体键帽底座 + 3D 物件图标 */
export function Skeuomorphic({ onAction }: ScreenProps) {
  const { hh, mm, date, week } = useClock()

  return (
    <div className="skeu">
      <div className="noise-layer" style={{ opacity: 0.05 }} />

      <header className="skeu-header">
        <div className="skeu-brand">
          <img className="skeu-badge" src={brandMark} alt="超级黑板" />
          <span className="skeu-brand-text">
            <strong>超级黑板</strong>
            <em>V4.4.2.3</em>
          </span>
        </div>
        <button className="skeu-cast tap" onClick={() => onAction('投屏码')}>
          <span className="skeu-cast-label">投屏码</span>
          <span className="skeu-lcd">HYUI</span>
        </button>
      </header>

      <section className="skeu-clock">
        <div className="skeu-flips">
          <FlipCard value={hh} />
          <span className="skeu-colon"><i /><i /></span>
          <FlipCard value={mm} />
        </div>
        <div className="skeu-date">{date}&ensp;{week}</div>
      </section>

      <section className="skeu-apps">
        {CORE_APPS.map(app => (
          <button key={app.key} className="skeu-app tap" onClick={() => onAction(app.label)}>
            <span className="skeu-tile">
              <CoreIcon name={app.key} size={128} />
            </span>
            <span className="skeu-app-label">{app.label}</span>
          </button>
        ))}
      </section>

      <footer className="skeu-dock-wrap">
        <div className="skeu-dock">
          <QuickDock onAction={onAction} />
        </div>
      </footer>
    </div>
  )
}

function FlipCard({ value }: { value: string }) {
  return (
    <span className="skeu-flip">
      <span className="skeu-flip-num">{value}</span>
      <span className="skeu-flip-line" />
      <span className="skeu-pin pin-l" />
      <span className="skeu-pin pin-r" />
    </span>
  )
}