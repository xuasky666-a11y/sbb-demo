import { useState } from 'react'
import { FIcon } from '@/components/fusion/FusionLineIcons'
import { useClock } from '@/lib/useClock'
import type { ScreenProps } from './types'
import bg from '@/assets/fusion/fusion-bg.jpg'
import logo from '@/assets/fusion/fusion-logo.svg'
import pdfIcon from '@/assets/fusion/fusion-pdf-56586a.png'
import robot from '@/assets/fusion/fusion-robot-67708c.png'
import tileBase from '@/assets/fusion/fusion-tile-base.svg'
import tileOutline from '@/assets/fusion/fusion-tile-outline.svg'
import qr from '@/assets/fusion/fusion-qr.svg'
import statusIcon from '@/assets/fusion/fusion-status.svg'
import actDiscuss from '@/assets/fusion/fusion-act-discuss.svg'
import actQuiz from '@/assets/fusion/fusion-act-quiz.svg'
import logoFirefly from '@/assets/fusion/fusion-logo-firefly.svg'
import logoXxt from '@/assets/fusion/fusion-logo-xxt.svg'
import logoFanya from '@/assets/fusion/fusion-logo-fanya.svg'
import platformImg from '@/assets/fusion/fusion-platform-147f2f.png'
import toolCourseware from '@/assets/fusion/fusion-tool-courseware.svg'
import toolPen from '@/assets/fusion/fusion-tool-pen.svg'
import toolBoard from '@/assets/fusion/fusion-tool-board.svg'
import toolInteract from '@/assets/fusion/fusion-tool-interact.svg'
import toolMore from '@/assets/fusion/fusion-tool-more.svg'
import settingsIcon from '@/assets/fusion/fusion-settings.svg'
import exitIcon from '@/assets/fusion/fusion-exit.svg'
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
const TILES = [
  { label: '课件', icon: toolCourseware, g: ['#FF7070', '#E52E2E'], x: 18, y: 15.39, w: 54, h: 57.68 },
  { label: '画笔', icon: toolPen, g: ['#BA94FF', '#815BFC'], x: 16.11, y: -2.37, w: 89, h: 71.05 },
  { label: '白板', icon: toolBoard, g: ['#FA8B4B', '#FA4E23'], x: 17, y: 9, w: 56, h: 55.17 },
  { label: '互动', icon: toolInteract, g: ['#FEC775', '#E57A00'], x: 17, y: 13.17, w: 56, h: 48.12 },
  { label: '更多', icon: toolMore, g: ['#93C5FE', '#226DF0'], x: 20.68, y: 15.93, w: 52.47, h: 52.47, ls: '-0.0588em' },
]

/** 风格一 · 融合玻璃：macOS 丝绸壁纸 + 深蓝毛玻璃面板 + 写实渐变瓷贴底栏（Figma 9:3664 1:1） */
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
              <button className={view === 'grid' ? 'on' : ''} onClick={() => setView('grid')} aria-label="宫格视图"><FIcon name="grid" size={20} /></button>
              <button className={view === 'list' ? 'on' : ''} onClick={() => setView('list')} aria-label="列表视图"><FIcon name="list" size={20} /></button>
            </div>
          </div>
          <div className="fg-body">
            <div className="fg-source">
              <button className={src === 'recent' ? 'on' : ''} onClick={() => setSrc('recent')}><FIcon name="clock" size={18} />最近使用</button>
              <button className={src === 'local' ? 'on' : ''} onClick={() => setSrc('local')}><FIcon name="monitor" size={18} />本地文件<FIcon name="chevron" size={18} /></button>
            </div>
            <div className="fg-files">
              {FILES.map(f => (
                <button key={f.title} className="fg-file tap" onClick={() => onAction(f.title)}>
                  <img className="fg-file-icon" src={pdfIcon} alt="PDF" />
                  <span className="fg-file-detail">
                    <span className="fg-file-title">{f.title}</span>
                    <span className="fg-file-meta">
                      <span className="m"><FIcon name="clock" size={16} />2026-10-11 07:27</span>
                      <i className="div" />
                      <span className="m"><FIcon name={f.loc === 'local' ? 'folder' : 'cloud'} size={16} />{f.loc === 'local' ? '本地' : '云盘'}</span>
                    </span>
                  </span>
                  <FIcon name="chevron" size={20} />
                </button>
              ))}
            </div>
          </div>
        </section>

        <section className="fg-col-mid">
          <div className="fg-panel fg-board">
            <div className="fg-head">
              <h2 className="fg-title">白板</h2>
              <button className="fg-collapse tap" onClick={() => onAction('收起白板')} aria-label="收起白板"><FIcon name="chevron" size={20} /></button>
            </div>
            <div className="fg-body fg-board-body">
              <div className="fg-clock">
                <div className="fg-time">{hh}:{mm}</div>
                <div className="fg-date">{date} {week}</div>
              </div>
              <div className="fg-track" />
            </div>
            <i className="fg-thumb" />
          </div>
          <div className="fg-panel fg-castpanel">
            <div className="fg-head between">
              <span className="fg-head-left">
                <h2 className="fg-title">投屏</h2>
                <img className="fg-status" src={statusIcon} alt="" />
              </span>
              <div className="fg-tabs text">
                <button className={castTab === 'cast' ? 'on' : ''} onClick={() => setCastTab('cast')}><FIcon name="screen" size={18} />投屏</button>
                <button className={castTab === 'share' ? 'on' : ''} onClick={() => setCastTab('share')}><FIcon name="copy" size={18} />共享本机屏幕</button>
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
                  <button className="fg-refresh tap" onClick={refresh}><FIcon name="refresh" size={16} />刷新</button>
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
                <button className="fg-row tap" onClick={() => onAction('加入其他线上课堂')}><span>加入其他线上课堂</span><FIcon name="chevron" size={20} /></button>
                <button className="fg-row tap" onClick={() => onAction('最近使用的课堂')}><span className="fill">最近使用的课堂</span><FIcon name="chevron" size={20} /></button>
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
            <button key={t.label} className="fg-tile tap" onClick={() => onAction(t.label)}>
              <img className="base" src={tileBase} alt="" />
              <i className="color" style={{ background: `linear-gradient(180deg, ${t.g[0]} 0%, ${t.g[1]} 80%)` }} />
              <img className="glyph" src={t.icon} alt="" style={{ left: t.x, top: t.y, width: t.w, height: t.h }} />
              <span className="label" style={t.ls ? { letterSpacing: t.ls } : undefined}>{t.label}</span>
              <img className="rim" src={tileOutline} alt="" />
            </button>
          ))}
        </div>
        <i className="fg-sep" />
        <div className="fg-tools">
          <button className="fg-tile tap" onClick={() => onAction('平台入口')}>
            <img className="base" src={tileBase} alt="" />
            <i className="color links" />
            <span className="logos">
              <img src={logoFirefly} alt="萤火虫" /><img src={logoXxt} alt="学习通" /><img src={logoFanya} alt="泛雅" /><img className="pf" src={platformImg} alt="" />
            </span>
            <img className="rim dim" src={tileOutline} alt="" />
          </button>
          <button className="fg-tile tap" onClick={() => onAction('设置')}>
            <img className="base" src={tileBase} alt="" />
            <i className="color" style={{ background: 'linear-gradient(180deg, #BCBCD1 0%, #A5A7C2 100%)' }} />
            <img className="glyph" src={settingsIcon} alt="" style={{ left: 16, top: 12, width: 58, height: 57.57 }} />
            <span className="label muted">设置</span>
            <img className="rim" src={tileOutline} alt="" />
          </button>
          <button className="fg-tile tap" onClick={() => onAction('下课')}>
            <img className="base" src={tileBase} alt="" />
            <i className="color" style={{ background: 'linear-gradient(180deg, #FFD570 0%, #FAA435 80%)' }} />
            <img className="glyph" src={exitIcon} alt="" style={{ left: 25.37, top: 18.8, width: 50.51, height: 56.7 }} />
            <span className="label exit">下课</span>
            <img className="rim" src={tileOutline} alt="" />
          </button>
        </div>
      </footer>
    </div>
  )
}