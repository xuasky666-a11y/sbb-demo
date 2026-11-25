import type { ComponentType } from 'react'
import type { ScreenProps } from './types'
import { Skeuomorphic } from './Skeuomorphic'
import { LiquidGlass } from './LiquidGlass'
import { Minimal } from './Minimal'
import { Chalkboard } from './Chalkboard'
import { DeepSpace } from './DeepSpace'
import { WarmPaper } from './WarmPaper'

export interface StyleDef {
  id: string
  name: string
  en: string
  component: ComponentType<ScreenProps>
}

/** 六种视觉风格，左右翻页依次切换 */
export const STYLES: StyleDef[] = [
  { id: 'skeu', name: '拟物质感', en: 'Skeuomorphic', component: Skeuomorphic },
  { id: 'glass', name: '苹果流体玻璃', en: 'Liquid Glass', component: LiquidGlass },
  { id: 'mini', name: '极简', en: 'Minimal', component: Minimal },
  { id: 'chalk', name: '超写实黑板', en: 'Chalkboard', component: Chalkboard },
  { id: 'deep', name: '深空蓝', en: 'Deep Space', component: DeepSpace },
  { id: 'warm', name: '暖木纸感', en: 'Warm Paper', component: WarmPaper },
]