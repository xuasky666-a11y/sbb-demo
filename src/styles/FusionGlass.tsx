import { useState } from 'react'
import { useClock } from '@/lib/useClock'
import type { ScreenProps } from './types'
import bg from '@/assets/fusion/fusion-bg.jpg'
import logo from '@/assets/fusion/fusion-logo.svg'
import pdfIcon from '@/assets/fusion/fusion-pdf-56586a.png'
import robot from '@/assets/fusion/fusion-robot.png'
import qr from '@/assets/fusion/fusion-qr.svg'
import statusIcon from '@/assets/fusion/fusion-status.svg'
import actDiscuss from '@/assets/fusion/fusion-act-discuss.svg'
import actQuiz from '@/assets/fusion/fusion-act-quiz.svg'
import icGrid from '@/assets/fusion/fusion-ic-grid.svg'
import icList from '@/assets/fusion/fusion-ic-list.svg'
import icClock from '@/assets/fusion/fusion-ic-clock.svg'
import icMonitor from '@/assets/fusion/fusion-ic-monitor.svg'
import icChevronSm from '@/assets/fusion/fusion-ic-chevron-sm.svg'
import icChevron from '@/assets/fusion/fusion-ic-chevron.svg'
import icClockSm from '@/assets/fusion/fusion-ic-clock-sm.svg'
import icFolder from '@/assets/fusion/fusion-ic-folder.svg'
import icCloud from '@/assets/fusion/fusion-ic-cloud.svg'
import icRefresh from '@/assets/fusion/fusion-ic-refresh.svg'
import icCast from '@/assets/fusion/fusion-ic-cast.svg'
import icShare from '@/assets/fusion/fusion-ic-share.svg'
import tileCourseware from '@/assets/fusion/fusion-tile-courseware.png'
import tilePen from '@/assets/fusion/fusion-tile-pen.png'
import tileBoard from '@/assets/fusion/fusion-tile-board.png'
import tileInteract from '@/assets/fusion/fusion-tile-interact.png'
import tileMore from '@/assets/fusion/fusion-tile-more.png'
import tilePlatform from '@/assets/fusion/fusion-tile-platform.png'
import tileSettings from '@/assets/fusion/fusion-tile-settings.png'
import tileExit from '@/assets/fusion/fusion-tile-exit.png'
import './fusion.css'

const FILES = [
  { title: '第1章 函数与极限', loc: 'local' },
  { title: '第2章 导数与微分', loc: 'local' },
  { title: '第3章 微分中值定理与导数的应用', loc: 'cloud' },
  { title: '第4章 不定积分', loc: 'cloud' },
]
const ACTS = [
  { text: '请回答数学将军饮马问题', icon: actDiscuss },
  { text: '光的反射知识点练习', icon: actQuiz },
  { text: '光的反射知识点练习', icon: actQuiz },
]
/* 底栏瓷贴：Figma 整块切图（渐变+图标+文字胶囊+描边焙入），禁止 CSS 拼凑 */
const TILES = [
  { label: '课件', img: tileCourseware },
  { label: '画笔', img: tilePen },
  { label: '白板', img: tileBoard },
  { label: '互动', img: tileInteract },
  { label: '更多', img: tileMore },
]

/** 风格一 · 融合玻璃：macOS 丝绸壁纸 + 深蓝毛玻璃面板 + 写实渐变瓷贴底栏（Figma 9:3664 1:1，切图优先） */
export function FusionGlass({ onAction }: ScreenProps) {
  const { hh, mm, date, week } = useClock()
  const [view, setView] = useState<'grid' | 'list'>('list')
  const [src, setSrc] = useState<'recent' | 'local'>('recent')
  const [castTab, setCastTab] = useState<'cast' | 'share'>('cast')
  const [live, setLive] = useState(false)
  const [code, setCode] = useState('HATN')
  const refresh = () => {
    const A = 'ABCDEFGHJKLMNPQRSTUVWXYZ'
    setCode(Array.from({ length: 4 }, () => A[Math.floor(Math.random() * A.length)]).join(''))
  }

  return (
    <div className="fusion" style={{ backgroundImage: `url(${bg})` }}>
      <header className="fg-header">
        <button className="fg-brand tap" onClick={() => onAction('超级黑板')}>
          <img className="fg-logo" src={logo} alt="超级黑板" />
          <span className="fg-brand-name">超级黑板</span>
        </button>
        <span className="fg-ver">V1.0.0</span>
        <button className="fg-cast tap" onClick={() => onAction('投屏邀请码')}>
          <span className="fg-cast-label">投屏邀请码</span>
          <span className="fg-cast-code">HYUI</span>
        </button>
      </header>

      <main className="fg-main">
        <section className="fg-panel fg-col-course">
          <div className="fg-head">
            <h2 className="fg-title">课件</h2>
            <div className="fg-tabs">
              <button className={view === 'grid' ? 'on' : ''} onClick={() => setView('grid')} aria-label="宫格视图"><img className="ic" src={icGrid} width={20} height={20} alt="" /></button>
              <button className={view === 'list' ? 'on' : ''} onClick={() => setView('list')} aria-label="列表视图"><img className="ic" src={icList} width={20} height={20} alt="" /></button>
            </div>
          </div>
          <div className="fg-body">
            <div className="fg-source">
              <button className={src === 'recent' ? 'on' : ''} onClick={() => setSrc('recent')}><img className="ic" src={icClock} width={18} height={18} alt="" />最近使用</button>
              <button className={src === 'local' ? 'on' : ''} onClick={() => setSrc('local')}><img className="ic" src={icMonitor} width={18} height={18} alt="" />本地文件<img className="ic" src={icChevronSm} width={18} height={18} alt="" /></button>
            </div>
            <div className="fg-files">
              {FILES.map(f => (
                <button key={f.title} className="fg-file tap" onClick={() => onAction(f.title)}>
                  <img className="fg-file-icon" src={pdfIcon} alt="PDF" />
                  <span className="fg-file-detail">
                    <span className="fg-file-title">{f.title}</span>
                    <span className="fg-file-meta">
                      <span className="m"><img className="ic" src={icClockSm} width={16} height={16} alt="" />2026-10-11 07:27</span>
                      <i className="div" />
                      <span className="m"><img className="ic" src={f.loc === 'local' ? icFolder : icCloud} width={16} height={16} alt="" />{f.loc === 'local' ? '本地' : '云盘'}</span>
                    </span>
                  </span>
                  <img className="ic" src={icChevron} width={20} height={20} alt="" />
                </button>
              ))}
            </div>
          </div>
        </section>

        <section className="fg-col-mid">
          <div className="fg-panel fg-board">
            <div className="fg-head">
              <h2 className="fg-title">白板</h2>
              <button className="fg-collapse tap" onClick={() => onAction('收起白板')} aria-label="收起白板"><img className="ic" src={icChevron} width={20} height={20} alt="" /></button>
            </div>
            <div className="fg-body fg-board-body">
              <div className="fg-clock">
                <div className="fg-time">{hh}:{mm}</div>
                <div className="fg-date">{date} {week}</div>
              </div>
            </div>
            {/* 黄色进度条：Figma 中为面板级绝对定位子元素，横向充满整个白板、贴底 */}
            <div className="fg-track" />
            <i className="fg-thumb" />
          </div>
          <div className="fg-panel fg-castpanel">
            <div className="fg-head between">
              <span className="fg-head-left">
                <h2 className="fg-title">投屏</h2>
                <img className="fg-status" src={statusIcon} alt="" />
              </span>
              <div className="fg-tabs text">
                <button className={castTab === 'cast' ? 'on' : ''} onClick={() => setCastTab('cast')}><img className="ic" src={icCast} width={18} height={18} alt="" />投屏</button>
                <button className={castTab === 'share' ? 'on' : ''} onClick={() => setCastTab('share')}><img className="ic" src={icShare} width={18} height={18} alt="" />共享本机屏幕</button>
              </div>
            </div>
            <div className="fg-cast-body">
              <span className="fg-qr"><img src={qr} alt="投屏二维码" /></span>
              <span className="fg-invite">
                <span className="fg-invite-tip">
                  <span>使用学习通/萤火虫APP扫码 或</span>
                  <span>PC端学习通输入邀请码：</span>
                </span>
                <span className="fg-invite-row">
                  <span className="fg-code">{code}</span>
                  <button className="fg-refresh tap" onClick={refresh}><img className="ic" src={icRefresh} width={16} height={16} alt="" />刷新</button>
                </span>
              </span>
            </div>
          </div>
        </section>

        <section className="fg-col-right">
          <div className="fg-panel fg-class">
            <div className="fg-head">
              <h2 className="fg-title">线上课堂</h2>
              <button className={`fg-switch${live ? ' on' : ''}`} onClick={() => setLive(v => !v)} role="switch" aria-checked={live} aria-label="线上课堂开关"><i /></button>
            </div>
            <div className="fg-body">
              <div className="fg-class-rows">
                <button className="fg-row tap" onClick={() => onAction('本教室课堂码')}><span>本教室课堂码</span><b className="fg-room">k004</b></button>
                <button className="fg-row tap" onClick={() => onAction('加入其他线上课堂')}><span>加入其他线上课堂</span><img className="ic" src={icChevron} width={20} height={20} alt="" /></button>
                <button className="fg-row tap" onClick={() => onAction('最近使用的课堂')}><span className="fill">最近使用的课堂</span><img className="ic" src={icChevron} width={20} height={20} alt="" /></button>
              </div>
            </div>
          </div>
          <div className="fg-panel fg-acts">
            <div className="fg-head"><h2 className="fg-title">活动列表</h2></div>
            <div className="fg-body">
              <div className="fg-act-list">
                {ACTS.map((a, i) => (
                  <div key={i} className="fg-act">
                    <span className="fg-act-main">
                      <img src={a.icon} alt="" />
                      <span className="fg-act-text">{a.text}</span>
                    </span>
                    <button className="fg-start tap" onClick={() => onAction(`开始 · ${a.text}`)}>开始</button>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="fg-dock">
        <button className="fg-assistant tap" onClick={() => onAction('AI 助手')} aria-label="AI 助手">
          <img className="robot" src={robot} alt="" />
        </button>
        <i className="fg-sep" />
        <div className="fg-tools">
          {TILES.map(t => (
            <button key={t.label} className="fg-tile tap" onClick={() => onAction(t.label)} aria-label={t.label}>
              <img src={t.img} alt="" />
            </button>
          ))}
        </div>
        <i className="fg-sep" />
        <div className="fg-tools">
          <button className="fg-tile tap" onClick={() => onAction('平台入口')} aria-label="平台入口">
            <img src={tilePlatform} alt="" />
          </button>
          <button className="fg-tile tap" onClick={() => onAction('设置')} aria-label="设置">
            <img src={tileSettings} alt="" />
          </button>
          <button className="fg-tile tap" onClick={() => onAction('下课')} aria-label="下课">
            <img src={tileExit} alt="" />
          </button>
        </div>
      </footer>
    </div>
  )
}