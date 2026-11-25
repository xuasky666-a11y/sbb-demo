import { useEffect, useState } from 'react'

const WEEK = ['周日', '周一', '周二', '周三', '周四', '周五', '周六']

/** 实时时钟：返回时/分/秒与日期文案 */
export function useClock() {
  const [now, setNow] = useState(() => new Date())

  useEffect(() => {
    const t = setInterval(() => setNow(new Date()), 1000)
    return () => clearInterval(t)
  }, [])

  const pad = (n: number) => String(n).padStart(2, '0')

  return {
    hh: pad(now.getHours()),
    mm: pad(now.getMinutes()),
    ss: pad(now.getSeconds()),
    date: `${pad(now.getMonth() + 1)}月${pad(now.getDate())}日`,
    week: WEEK[now.getDay()],
  }
}