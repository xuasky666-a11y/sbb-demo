import type { ComponentType } from 'react'
import type { ScreenProps } from './types'
import { FusionGlass } from './FusionGlass'
import { AiGlass } from './AiGlass'
import { Skeuomorphic } from './Skeuomorphic'
import { Minimal } from './Minimal'
import { Chalkboard } from './Chalkboard'
import { DeepSpace } from './DeepSpace'
import { WarmPaper } from './WarmPaper'
import { InkWash } from './InkWash'
import { Pixel } from './Pixel'
import { Clay } from './Clay'

export interface StyleDef {
  id: string
  name: string
  en: string
  component: ComponentType<ScreenProps>
}

/** 十种视觉风格，左右翻页依次切换（融合玻璃 / AI毛玻璃为用户自出设计，居前两位） */
export const STYLES: StyleDef[] = [
  { id: 'fusion', name: '融合玻璃', en: 'Fusion Glass', component: FusionGlass },
  { id: 'aiglass', name: 'AI毛玻璃', en: 'AI Frosted Glass', component: AiGlass },
  { id: 'skeu', name: '拟物质感', en: 'Skeuomorphic', component: Skeuomorphic },
  { id: 'mini', name: '极简', en: 'Minimal', component: Minimal },
  { id: 'chalk', name: '超写实黑板', en: 'Chalkboard', component: Chalkboard },
  { id: 'deep', name: '深空蓝', en: 'Deep Space', component: DeepSpace },
  { id: 'warm', name: '暖木纸感', en: 'Warm Paper', component: WarmPaper },
  { id: 'ink', name: '国风水墨', en: 'Ink Wash', component: InkWash },
  { id: 'pixel', name: '像素世界', en: 'Pixel World', component: Pixel },
  { id: 'clay', name: '黏土质感', en: 'Claymorphism', component: Clay },
]