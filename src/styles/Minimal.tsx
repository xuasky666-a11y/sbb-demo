import { Icon } from '@/components/Icon'
import { useClock } from '@/lib/useClock'
import { CORE_APPS, QUICK_TOOLS, type ScreenProps } from './types'
import './minimal.css'

/** 风格三 · 极简：纸白底、发丝线、超细字重大时钟 */
export function Minimal({ onAction }: ScreenProps) {
  const { hh, mm, date, week } = useClock()

  return (
    <div className="mini">
      <i className="mini-crop tl" /><i className="mini-crop tr" />
      <i className="mini-crop bl" /><i className="mini-crop br" />

      <header className="mini-header">
        <div className="mini-brand">
          <span className="mini-mark"><Icon name="feather" size={20} strokeWidth={2} /></span>
          <span className="mini-brand-name">超级黑板</span>
          <span className="mini-ver">V4.4.2.3</span>
        </div>
        <button className="mini-cast tap" onClick={() => onAction('投屏码')}>
          <span>投屏码</span>
          <strong>HYUI</strong>
        </button>
      </header>

      <section className="mini-clock">
        <div className="mini-time">{hh}<span>:</span>{mm}</div>
        <div className="mini-date">{date}&ensp;·&ensp;{week}</div>
      </section>

      <section className="mini-apps">
        {CORE_APPS.map((app, i) => (
          <button key={app.key} className="mini-app tap" onClick={() => onAction(app.label)}>
            <span className="mini-index">0{i + 1}</span>
            <Icon name={app.key} size={44} strokeWidth={1.1} />
            <span className="mini-app-label">{app.label}</span>
            <i className="mini-underline" />
          </button>
        ))}
      </section>

      <footer className="mini-dock">
        {QUICK_TOOLS.map(tool => (
          <button key={tool.key} className="mini-tool tap" onClick={() => onAction(tool.label)}>
            <Icon name={tool.key} size={17} strokeWidth={1.6} />
            <span>{tool.label}</span>
          </button>
        ))}
        <span className="mini-dot-sep" />
        <button className="mini-tool exit tap" onClick={() => onAction('下课')}>
          <Icon name="exit" size={17} strokeWidth={1.6} />
          <span>下课</span>
        </button>
      </footer>
    </div>
  )
}