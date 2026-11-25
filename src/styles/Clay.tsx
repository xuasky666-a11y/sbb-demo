import { Icon } from '@/components/Icon'
import { useClock } from '@/lib/useClock'
import { CORE_APPS, QUICK_TOOLS, type ScreenProps } from './types'
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
          <span className="clay-mark"><Icon name="feather" size={24} strokeWidth={2.4} /></span>
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
            <span className="clay-app-icon"><Icon name={app.key} size={58} strokeWidth={2.3} /></span>
            <span className="clay-app-label">{app.label}</span>
          </button>
        ))}
      </section>

      <footer className="clay-dock-wrap">
        <div className="clay-dock">
          {QUICK_TOOLS.map(tool => (
            <button key={tool.key} className="clay-dock-item tap" onClick={() => onAction(tool.label)}>
              <span className="clay-dock-icon"><Icon name={tool.key} size={26} strokeWidth={2.2} /></span>
              <span>{tool.label}</span>
            </button>
          ))}
          <span className="clay-dock-sep" />
          <button className="clay-dock-item exit tap" onClick={() => onAction('下课')}>
            <span className="clay-dock-icon"><Icon name="exit" size={26} strokeWidth={2.2} /></span>
            <span>下课</span>
          </button>
        </div>
      </footer>
    </div>
  )
}