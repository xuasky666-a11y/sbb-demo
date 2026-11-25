import coreCourseware from '@/assets/core-courseware.png'
import coreBoard from '@/assets/core-board.png'
import coreCast from '@/assets/core-cast.png'
import coreLive from '@/assets/core-live.png'

/** 核心四功能图标：统一使用设计切图（糖果 3D），各风格靠外框与滤镜区分气质 */
const CORE_ART = {
  courseware: coreCourseware,
  board: coreBoard,
  cast: coreCast,
  live: coreLive,
} as const

export type CoreName = keyof typeof CORE_ART

export function CoreIcon({ name, size = 100, className }: { name: CoreName; size?: number; className?: string }) {
  return (
    <img
      src={CORE_ART[name]}
      width={size}
      height={size}
      className={className}
      alt=""
      draggable={false}
      style={{ display: 'block' }}
    />
  )
}