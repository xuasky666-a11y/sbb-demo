import { PixelIcon, PixelDigit } from '@/components/PixelIcon'
import { useClock } from '@/lib/useClock'
import { CORE_APPS, QUICK_TOOLS, type ScreenProps } from './types'
import './pixel.css'

/** 风格八 · 像素世界：蓝天草地游戏场景 + 点阵时钟 + 道具栏 */
export function Pixel({ onAction }: ScreenProps) {
  const { hh, mm, date, week } = useClock()

  return (
    <div className="px">
      {/* 像素太阳与云 */}
      <svg className="px-sun" viewBox="0 0 14 14" shapeRendering="crispEdges" aria-hidden="true">
        <rect x="4" y="1" width="6" height="1" fill="#f5a623" />
        <rect x="2" y="2" width="10" height="1" fill="#f5a623" />
        <rect x="1" y="3" width="12" height="8" fill="#f5a623" />
        <rect x="2" y="3" width="10" height="8" fill="#ffd94a" />
        <rect x="3" y="2" width="8" height="1" fill="#ffd94a" />
        <rect x="2" y="11" width="10" height="1" fill="#f5a623" />
        <rect x="4" y="12" width="6" height="1" fill="#f5a623" />
        <rect x="4" y="4" width="2" height="2" fill="#fff3b0" />
      </svg>
      <svg className="px-cloud c1" viewBox="0 0 24 10" shapeRendering="crispEdges" aria-hidden="true">
        <rect x="6" y="1" width="8" height="2" fill="#ffffff" />
        <rect x="3" y="3" width="17" height="3" fill="#ffffff" />
        <rect x="1" y="6" width="22" height="2" fill="#ffffff" />
        <rect x="1" y="8" width="22" height="1" fill="#d8ecf7" />
      </svg>
      <svg className="px-cloud c2" viewBox="0 0 24 10" shapeRendering="crispEdges" aria-hidden="true">
        <rect x="8" y="1" width="7" height="2" fill="#ffffff" />
        <rect x="4" y="3" width="15" height="3" fill="#ffffff" />
        <rect x="1" y="6" width="21" height="2" fill="#ffffff" />
        <rect x="1" y="8" width="21" height="1" fill="#d8ecf7" />
      </svg>
      <div className="px-grass" />
      <div className="px-scanlines" />

      <header className="px-header">
        <button className="px-panel px-brand tap" onClick={() => onAction('超级黑板')}>
          <span className="px-mark">
            <svg viewBox="0 0 8 8" width={30} height={30} shapeRendering="crispEdges" aria-hidden="true">
              <rect x="5" y="1" width="2" height="1" fill="#ffd94a" />
              <rect x="4" y="2" width="3" height="1" fill="#ffd94a" />
              <rect x="3" y="3" width="3" height="1" fill="#ffd94a" />
              <rect x="2" y="4" width="3" height="1" fill="#ffd94a" />
              <rect x="1" y="5" width="3" height="1" fill="#ffd94a" />
              <rect x="1" y="6" width="1" height="1" fill="#ffd94a" />
            </svg>
          </span>
          <span className="px-brand-name">超级黑板</span>
          <span className="px-ver">V4.4.2.3</span>
        </button>
        <button className="px-panel px-cast tap" onClick={() => onAction('投屏码')}>
          <span className="px-cast-label">投屏码</span>
          <span className="px-cast-code">HYUI<span className="px-cursor" /></span>
        </button>
      </header>

      <section className="px-clock">
        <div className="px-time">
          {hh.split('').map((d, i) => <PixelDigit key={`h${i}`} ch={d} unit={27} color="#2b2b40" shadow="#ffffff" />)}
          <PixelDigit ch=":" unit={27} color="#2b2b40" shadow="#ffffff" />
          {mm.split('').map((d, i) => <PixelDigit key={`m${i}`} ch={d} unit={27} color="#2b2b40" shadow="#ffffff" />)}
        </div>
        <div className="px-panel px-date">{date} · {week}</div>
      </section>

      <section className="px-apps">
        {CORE_APPS.map(app => (
          <button key={app.key} className="px-app tap" onClick={() => onAction(app.label)}>
            <PixelIcon name={app.key} size={82} />
            <span className="px-app-label">{app.label}</span>
          </button>
        ))}
      </section>

      <footer className="px-hotbar-wrap">
        <div className="px-hotbar">
          {QUICK_TOOLS.map(tool => (
            <button key={tool.key} className="px-slot tap" onClick={() => onAction(tool.label)}>
              <PixelIcon name={tool.key} size={44} />
              <span>{tool.label}</span>
            </button>
          ))}
          <span className="px-hotbar-gap" />
          <button className="px-slot exit tap" onClick={() => onAction('下课')}>
            <PixelIcon name="exit" size={44} />
            <span>下课</span>
          </button>
        </div>
      </footer>
    </div>
  )
}