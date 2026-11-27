import { useState } from 'react'
import brandMark from '@/assets/brand-mark.png'
import bgArt from '@/assets/aiglass-bg.png'
import coreBg from '@/assets/aiglass-core.png'
import appCourseware from '@/assets/aiglass-courseware.png'
import appBoard from '@/assets/aiglass-board.png'
import appCast from '@/assets/aiglass-cast.png'
import appLive from '@/assets/aiglass-live.png'
import iconCollapse from '@/assets/aiglass-collapse.svg'
import iconPen from '@/assets/aiglass-pen.svg'
import iconActivity from '@/assets/aiglass-activity.svg'
import iconBoard from '@/assets/aiglass-board.svg'
import iconMore from '@/assets/aiglass-more.svg'
import iconExit from '@/assets/aiglass-exit.svg'
import { useClock } from '@/lib/useClock'
import { CORE_APPS, type ScreenProps } from './types'
import './aiglass.css'

/** 核心功能图标：设计师切图 PNG（@2x 240，屏上 120） */
const APP_ART = { courseware: appCourseware, board: appBoard, cast: appCast, live: appLive } as const

/** 工具栏：Figma 面性图标 SVG（画笔/活动/白板/更多 + 下课） */
const TOOLS = [
  { key: 'pen', label: '画笔', icon: iconPen },
  { key: 'activity', label: '活动', icon: iconActivity },
  { key: 'board', label: '白板', icon: iconBoard },
  { key: 'more', label: '更多', icon: iconMore },
] as const

/** 风格 · AI毛玻璃（用户自出设计）：径向光幕 + 弧形玻璃展台 + 幽灵时钟水印 */
export function AiGlass({ onAction }: ScreenProps) {
  const { hh, mm } = useClock()
  const [collapsed, setCollapsed] = useState(false)

  return (
    <div className="ag">
      <img className="ag-bg" src={bgArt} alt="" draggable={false} />
      <div className="ag-ghost">{hh}:{mm}</div>
      <img className="ag-core" src={coreBg} alt="" draggable={false} />

      <header className="ag-header">
        <div className="ag-brand">
          <img className="ag-logo" src={brandMark} alt="超级黑板" />
          <span className="ag-brand-text">
            <strong>超级黑板</strong>
            <em>V5.0.0</em>
          </span>
        </div>
        <button className="ag-cast tap" onClick={() => onAction('投屏邀请码')}>
          <span className="ag-cast-label">投屏邀请码</span>
          <span className="ag-cast-code">HYUI</span>
        </button>
      </header>

      <section className="ag-apps">
        {CORE_APPS.map((app, i) => (
          <button
            key={app.key}
            className="ag-app tap"
            style={{ left: 340 + i * 320 }}
            onClick={() => onAction(app.label)}
          >
            <img className="ag-app-icon" src={APP_ART[app.key]} alt="" draggable={false} />
            <span className="ag-app-label">{app.label}</span>
          </button>
        ))}
      </section>

      <footer className={`ag-toolbar${collapsed ? ' collapsed' : ''}`}>
        <button
          className="ag-collapse tap"
          onClick={() => setCollapsed(c => !c)}
          aria-label={collapsed ? '展开工具栏' : '收起工具栏'}
          title={collapsed ? '展开工具栏' : '收起工具栏'}
        >
          <img src={iconCollapse} alt="" draggable={false} />
        </button>
        {!collapsed && (
          <>
            {TOOLS.map(tool => (
              <button key={tool.key} className="ag-tool tap" onClick={() => onAction(tool.label)}>
                <img src={tool.icon} alt="" draggable={false} />
                <span>{tool.label}</span>
              </button>
            ))}
            <span className="ag-sep" />
            <button className="ag-tool exit tap" onClick={() => onAction('下课')}>
              <img src={iconExit} alt="" draggable={false} />
              <span>下课</span>
            </button>
          </>
        )}
      </footer>
    </div>
  )
}