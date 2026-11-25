import { Icon } from '@/components/Icon'
import { GlossyIcon } from '@/components/GlossyIcon'
import { useClock } from '@/lib/useClock'
import { CORE_APPS, QUICK_TOOLS, type ScreenProps } from './types'
import './skeuomorphic.css'

/** 风格一 · 拟物质感：翻页钟、压印金属、糖果高光图标 */
export function Skeuomorphic({ onAction }: ScreenProps) {
  const { hh, mm, date, week } = useClock()

  return (
    <div className="skeu">
      <div className="noise-layer" style={{ opacity: 0.05 }} />

      <header className="skeu-header">
        <div className="skeu-brand">
          <span className="skeu-badge"><Icon name="feather" size={30} strokeWidth={2} /></span>
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
              <GlossyIcon name={app.key} size={108} />
            </span>
            <span className="skeu-app-label">{app.label}</span>
          </button>
        ))}
      </section>

      <footer className="skeu-dock-wrap">
        <div className="skeu-dock">
          {QUICK_TOOLS.map(tool => (
            <button key={tool.key} className={`skeu-key tap key-${tool.key}`} onClick={() => onAction(tool.label)}>
              <Icon name={tool.key} size={27} strokeWidth={1.9} />
              <span>{tool.label}</span>
            </button>
          ))}
          <span className="skeu-divider" />
          <button className="skeu-key key-exit tap" onClick={() => onAction('下课')}>
            <span className="skeu-exit-cap"><Icon name="exit" size={24} strokeWidth={2} /></span>
            <span>下课</span>
          </button>
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