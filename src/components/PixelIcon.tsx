import type { ReactNode } from 'react'

/** 像素风专用图标：12×12 点阵，逐格渲染 rect，crispEdges 保证硬边 */
export type PixelName =
  | 'courseware' | 'board' | 'cast' | 'live'
  | 'pen' | 'interact' | 'more' | 'exit'

interface PixelDef {
  rows: string[]
  colors: Record<string, string>
}

const K = '#2b2b40' // 通用深色描边

const PIXELS: Record<PixelName, PixelDef> = {
  courseware: {
    rows: [
      '............',
      '.##########.',
      '.#........#.',
      '.#..b.....#.',
      '.#..b..g..#.',
      '.#.ob..g..#.',
      '.#.ob..g..#.',
      '.##########.',
      '.....##.....',
      '....####....',
      '...##..##...',
      '............',
    ],
    colors: { '#': K, b: '#4a90d9', o: '#f5a623', g: '#5cb85c' },
  },
  board: {
    rows: [
      '............',
      '.##########.',
      '.#........#.',
      '.#.......y#.',
      '.#......y.#.',
      '.#.....y..#.',
      '.#....y...#.',
      '.##########.',
      '....#..#....',
      '...#....#...',
      '............',
      '............',
    ],
    colors: { '#': K, y: '#f5a623' },
  },
  cast: {
    rows: [
      '............',
      '.##########.',
      '.#........#.',
      '.#...g....#.',
      '.#..ggg...#.',
      '.#.ggggg..#.',
      '.#...g....#.',
      '.#...g....#.',
      '.##########.',
      '....####....',
      '............',
      '............',
    ],
    colors: { '#': K, g: '#5cb85c' },
  },
  live: {
    rows: [
      '............',
      '.##########.',
      '.#........#.',
      '.#..r.....#.',
      '.#..rr....#.',
      '.#..rrr...#.',
      '.#..rr....#.',
      '.#..r.....#.',
      '.##########.',
      '....####....',
      '............',
      '............',
    ],
    colors: { '#': K, r: '#e05656' },
  },
  pen: {
    rows: [
      '.....pp.....',
      '.....pp.....',
      '....yyyy....',
      '....yyyy....',
      '....yyyy....',
      '....yyyy....',
      '....yyyy....',
      '....yyyy....',
      '....wwww....',
      '.....ww.....',
      '.....kk.....',
      '............',
    ],
    colors: { p: '#f08fb0', y: '#f5c542', w: '#e8c39e', k: K },
  },
  interact: {
    rows: [
      '............',
      '..bb....gg..',
      '..bb....gg..',
      '............',
      '.bbbb..gggg.',
      '.bbbb..gggg.',
      '.bbbb..gggg.',
      '.bbbb..gggg.',
      '............',
      '............',
      '............',
      '............',
    ],
    colors: { b: '#4a90d9', g: '#5cb85c' },
  },
  more: {
    rows: [
      '............',
      '..bbb..ooo..',
      '..bbb..ooo..',
      '..bbb..ooo..',
      '............',
      '..ggg..ppp..',
      '..ggg..ppp..',
      '..ggg..ppp..',
      '............',
      '............',
      '............',
      '............',
    ],
    colors: { b: '#4a90d9', o: '#f5a623', g: '#5cb85c', p: '#b07fd9' },
  },
  exit: {
    rows: [
      '............',
      '..#####.....',
      '..#...#.....',
      '..#...#..r..',
      '..#...#.rr..',
      '..#...#rrrr.',
      '..#...#.rr..',
      '..#...#..r..',
      '..#...#.....',
      '..#####.....',
      '............',
      '............',
    ],
    colors: { '#': K, r: '#e05656' },
  },
}

export function PixelIcon({ name, size = 48 }: { name: PixelName; size?: number }) {
  const def = PIXELS[name]
  const cells: ReactNode[] = []
  def.rows.forEach((row, y) => {
    row.split('').forEach((ch, x) => {
      if (ch !== '.') cells.push(<rect key={`${x}-${y}`} x={x} y={y} width={1} height={1} fill={def.colors[ch]} />)
    })
  })
  return (
    <svg viewBox="0 0 12 12" width={size} height={size} shapeRendering="crispEdges" aria-hidden="true">
      {cells}
    </svg>
  )
}

/** 3×5 点阵数字（0-9 与冒号），像素时钟用 */
const DIGITS: Record<string, string[]> = {
  '0': ['111', '101', '101', '101', '111'],
  '1': ['010', '110', '010', '010', '111'],
  '2': ['111', '001', '111', '100', '111'],
  '3': ['111', '001', '011', '001', '111'],
  '4': ['101', '101', '111', '001', '001'],
  '5': ['111', '100', '111', '001', '111'],
  '6': ['111', '100', '111', '101', '111'],
  '7': ['111', '001', '010', '010', '010'],
  '8': ['111', '101', '111', '101', '111'],
  '9': ['111', '101', '111', '001', '111'],
  ':': ['0', '1', '0', '1', '0'],
}

export function PixelDigit({ ch, unit = 26, color = '#2b2b40', shadow = '#ffffff' }: {
  ch: string
  unit?: number
  color?: string
  shadow?: string
}) {
  const rows = DIGITS[ch] ?? DIGITS['0']
  const cols = rows[0].length
  const render = (fill: string, dx: number, dy: number) =>
    rows.flatMap((row, y) =>
      row.split('').map((bit, x) =>
        bit === '1'
          ? <rect key={`${fill}-${x}-${y}`} x={x * unit + dx} y={y * unit + dy} width={unit} height={unit} fill={fill} />
          : null,
      ),
    )
  return (
    <svg
      viewBox={`0 0 ${cols * unit + 6} ${5 * unit + 6}`}
      width={cols * unit + 6}
      height={5 * unit + 6}
      shapeRendering="crispEdges"
      aria-hidden="true"
    >
      {render(shadow, 6, 6)}
      {render(color, 0, 0)}
    </svg>
  )
}