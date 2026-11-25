import { Icon } from '@/components/Icon'
import { useClock } from '@/lib/useClock'
import { CORE_APPS, QUICK_TOOLS, type ScreenProps } from './types'
import './chalkboard.css'

/** 风格四 · 超写实黑板：木框、粉笔字、粉笔槽与板擦 */
export function Chalkboard({ onAction }: ScreenProps) {
  const { hh, mm, date, week } = useClock()

  return (
    <div className="chalk">
      {/* 粉笔抖动滤镜 */}
      <svg width="0" height="0" style={{ position: 'absolute' }}>
        <defs>
          <filter id="chalk-rough" x="-8%" y="-8%" width="116%" height="116%">
            <feTurbulence type="fractalNoise" baseFrequency="0.06" numOctaves="3" seed="7" result="n" />
            <feDisplacementMap in="SourceGraphic" in2="n" scale="2.6" />
          </filter>
        </defs>
      </svg>

      <div className="chalk-board">
        <div className="noise-layer" style={{ opacity: 0.13 }} />
        <div className="chalk-smudge s1" /><div className="chalk-smudge s2" /><div className="chalk-smudge s3" />

        <header className="chalk-header">
          <div className="chalk-brand">
            <Icon name="feather" size={38} strokeWidth={1.8} className="chalk-rough" />
            <span className="chalk-brand-text">
              <strong>超级黑板</strong>
              <em>V4.4.2.3</em>
            </span>
          </div>
          <button className="chalk-cast tap chalk-rough" onClick={() => onAction('投屏码')}>
            <span>投屏码</span>
            <strong>HYUI</strong>
          </button>
        </header>

        <section className="chalk-clock">
          <div className="chalk-time">{hh}<span>:</span>{mm}</div>
          <svg className="chalk-underline chalk-rough" viewBox="0 0 420 14" width="420" height="14">
            <path d="M6 8c70-5 140 4 208-1s130-3 200 2" fill="none" stroke="currentColor" strokeWidth="3.4" strokeLinecap="round" />
          </svg>
          <div className="chalk-date">{date}&ensp;{week}</div>
        </section>

        <section className="chalk-apps">
          {CORE_APPS.map((app, i) => (
            <button key={app.key} className={`chalk-app tap r${i}`} onClick={() => onAction(app.label)}>
              <span className="chalk-app-box chalk-rough">
                <Icon name={app.key} size={58} strokeWidth={1.5} />
              </span>
              <span className="chalk-app-label">{app.label}</span>
            </button>
          ))}
        </section>

        {/* 角落粉笔涂鸦 */}
        <svg className="chalk-doodle plane chalk-rough" viewBox="0 0 64 64" width="72" height="72">
          <path d="M6 34L58 10 40 54l-9-16zM31 38l27-28M31 38l-2 12 7-8" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
        <svg className="chalk-doodle star chalk-rough" viewBox="0 0 48 48" width="52" height="52">
          <path d="M24 5l5.4 12.6L43 19l-10 9.4L35.8 42 24 34.8 12.2 42 15 28.4 5 19l13.6-1.4z" fill="none" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" />
        </svg>
        <span className="chalk-doodle formula">E = mc²</span>

        <footer className="chalk-dock-wrap">
          <div className="chalk-dock chalk-rough">
            {QUICK_TOOLS.map(tool => (
              <button key={tool.key} className="chalk-tool tap" onClick={() => onAction(tool.label)}>
                <Icon name={tool.key} size={26} strokeWidth={1.7} />
                <span>{tool.label}</span>
              </button>
            ))}
            <span className="chalk-sep" />
            <button className="chalk-tool exit tap" onClick={() => onAction('下课')}>
              <Icon name="exit" size={26} strokeWidth={1.7} />
              <span>下课</span>
            </button>
          </div>
        </footer>
      </div>

      {/* 粉笔槽 */}
      <div className="chalk-tray">
        <i className="chalk-stick white" /><i className="chalk-stick pink" /><i className="chalk-stick yellow" />
        <i className="chalk-eraser" />
      </div>
    </div>
  )
}