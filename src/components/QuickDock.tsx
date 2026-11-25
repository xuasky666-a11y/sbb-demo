import type { CSSProperties } from 'react'
import { QUICK_TOOLS, type ScreenProps } from '@/styles/types'
import toolPen from '@/assets/tool-pen.png'
import toolBoard from '@/assets/tool-board.png'
import toolInteract from '@/assets/tool-interact.png'
import toolMore from '@/assets/tool-more.png'
import toolExit from '@/assets/tool-exit.png'

/** 底部快捷栏（减法版）：单色小图标 + 小字，固定高度保证文字底对齐；
 *  颜色走主题变量 --dock-fg / --dock-exit（深色底自动白色） */
const TOOL_ART: Record<string, string> = {
  pen: toolPen,
  board: toolBoard,
  interact: toolInteract,
  more: toolMore,
}

function maskStyle(url: string): CSSProperties {
  return {
    maskImage: `url(${url})`,
    WebkitMaskImage: `url(${url})`,
  }
}

export function QuickDock({ onAction }: ScreenProps) {
  return (
    <div className="quick-dock">
      {QUICK_TOOLS.map(tool => (
        <button key={tool.key} className="qd-item tap" onClick={() => onAction(tool.label)}>
          <span className="qd-icon" style={maskStyle(TOOL_ART[tool.key])} />
          <span className="qd-label">{tool.label}</span>
        </button>
      ))}
      <span className="qd-sep" />
      <button className="qd-item exit tap" onClick={() => onAction('下课')}>
        <span className="qd-icon" style={maskStyle(toolExit)} />
        <span className="qd-label">下课</span>
      </button>
    </div>
  )
}