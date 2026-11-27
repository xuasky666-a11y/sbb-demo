import { CoreIcon } from '@/components/CoreIcon'
import { QuickDock } from '@/components/QuickDock'
import brandLogoWhite from '@/assets/brand-logo-white.png'
import { useClock } from '@/lib/useClock'
import { CORE_APPS, type ScreenProps } from './types'
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
            <img className="chalk-logo" src={brandLogoWhite} alt="超级黑板 V4.4.2.3" />
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
                <CoreIcon name={app.key} size={92} className="chalk-core" />
              </span>
              <span className="chalk-app-label">{app.label}</span>
            </button>
          ))}
        </section>

        {/* 边缘淡粉笔数学公式与几何图（写实黑板签名，环绕四周不抢中心） */}
        <span className="chalk-math m-integral">∫ f(x) dx = F(x) + C</span>
        <svg className="chalk-math m-curve chalk-rough" viewBox="0 0 150 90" width="150" height="90">
          <path d="M14 10v70h128" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
          <path d="M14 45c20-30 34-30 52 0s32 30 52 0" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
        </svg>
        <span className="chalk-math m-pythag">a² + b² = c²</span>
        <span className="chalk-math m-trig">sin²θ + cos²θ = 1</span>
        <svg className="chalk-math m-geo chalk-rough" viewBox="0 0 120 120" width="118" height="118">
          <circle cx="60" cy="60" r="46" fill="none" stroke="currentColor" strokeWidth="1.6" />
          <path d="M60 14L98 84H22zM60 60L60 14M60 60L98 84M60 60L22 84" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinejoin="round" />
        </svg>
        <span className="chalk-math m-limit">lim&#8202;(x→0)&#8202;sin&#8202;x / x = 1</span>

        <footer className="chalk-dock-wrap">
          <div className="chalk-dock chalk-rough">
            <QuickDock onAction={onAction} />
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