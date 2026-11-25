import { ClayIcon } from '@/components/ClayIcon'
import { QuickDock } from '@/components/QuickDock'
import brandMark from '@/assets/brand-mark.png'
import { useClock } from '@/lib/useClock'
import { CORE_APPS, type ScreenProps } from './types'
import './clay.css'

/** 风格九 · 黏土质感：奶油底色 + 软糖立体卡片 + 圆润厚描边 */
export function Clay({ onAction }: ScreenProps) {
  const { hh, mm, date, week } = useClock()

  return (
    <div className="clay">
      <div className="clay-blob b1" />
      <div className="clay-blob b2" />
      <div className="clay-blob b3" />

      <header className="clay-header">
        <button className="clay-pill clay-brand tap" onClick={() => onAction('超级黑板')}>
          <img className="clay-mark" src={brandMark} alt="" draggable={false} />
          <span className="clay-brand-name">超级黑板</span>
          <span className="clay-ver">V4.4.2.3</span>
        </button>
        <button className="clay-pill clay-cast tap" onClick={() => onAction('投屏码')}>
          <span className="clay-cast-label">投屏码</span>
          <span className="clay-cast-code">HYUI</span>
        </button>
      </header>

      <section className="clay-clock">
        <div className="clay-time">
          <span className="clay-tile">{hh}</span>
          <span className="clay-colon"><i /><i /></span>
          <span className="clay-tile">{mm}</span>
        </div>
        <div className="clay-pill clay-date">{date} · {week}</div>
      </section>

      <section className="clay-apps">
        {CORE_APPS.map(app => (
          <button key={app.key} className={`clay-app ${app.key} tap`} onClick={() => onAction(app.label)}>
            <span className="clay-app-icon"><ClayIcon name={app.key} size={96} /></span>
            <span className="clay-app-label">{app.label}</span>
          </button>
        ))}
      </section>

      <footer className="clay-dock-wrap">
        <div className="clay-dock">
          <QuickDock onAction={onAction} />
        </div>
      </footer>
    </div>
  )
}