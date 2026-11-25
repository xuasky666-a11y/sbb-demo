import type { Config } from "tailwindcss"

const config: Config = {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        stage: "hsl(var(--stage-bg))",
        ink: "hsl(var(--ink))",
        "ink-soft": "hsl(var(--ink-soft))",
        "ink-faint": "hsl(var(--ink-faint))",
        brand: "hsl(var(--brand))",
        danger: "hsl(var(--danger))",
      },
      fontFamily: {
        sans: ['"PingFang SC"', '"HarmonyOS Sans SC"', '"Microsoft YaHei"', 'system-ui', 'sans-serif'],
        clock: ['"SF Pro Display"', '"Helvetica Neue"', '"PingFang SC"', 'system-ui', 'sans-serif'],
        chalk: ['"Chalkboard SE"', '"Kaiti SC"', '"STKaiti"', 'cursive'],
        kai: ['"Kaiti SC"', '"STKaiti"', '"KaiTi"', 'serif'],
      },
    },
  },
  plugins: [],
}

export default config