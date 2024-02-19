import type { Config } from 'tailwindcss'
import typography from '@tailwindcss/typography'

export default {
  content: ['./hugo_stats.json'],
  plugins: [typography()]
} satisfies Config
