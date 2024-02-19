let tailwindConfig = process.env.HUGO_FILE_TAILWIND_CONFIG_TS || './tailwind.config.ts'
import type { ConfigFn } from 'postcss-load-config'
import tailwindcss from 'tailwindcss'
import nesting from 'tailwindcss'
import autoprefixer from 'autoprefixer'
import cssnano from 'cssnano'
const tailwind = tailwindcss(tailwindConfig)

const config: ConfigFn = (ctx) => ({
  plugins: [
    nesting(),
    tailwind,
    process.env.HUGO_ENVIRONMENT === 'production' ? (autoprefixer(), cssnano()) : false
  ]
})

export default config
