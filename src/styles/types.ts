export interface ScreenProps {
  onAction: (label: string) => void
}

export const CORE_APPS = [
  { key: 'courseware', label: '课件' },
  { key: 'board', label: '白板' },
  { key: 'cast', label: '投屏' },
  { key: 'live', label: '线上课堂' },
] as const

export const QUICK_TOOLS = [
  { key: 'pen', label: '画笔' },
  { key: 'board', label: '白板' },
  { key: 'interact', label: '互动' },
  { key: 'more', label: '更多' },
] as const