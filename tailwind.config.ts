import type { Config } from 'tailwindcss'

export default <Partial<Config>>{
  content: [],
  theme: {
    extend: {
      colors: {
        ink: '#070e17',
        panel: '#091522',
        line: '#162c45',
        go: { DEFAULT: '#00ADD8', soft: '#29BDDF', deep: '#007D9C' },
        mint: '#5CDB95'
      },
      fontFamily: {
        display: ['"Bricolage Grotesque"', 'system-ui', 'sans-serif'],
        sans: ['"IBM Plex Sans"', 'system-ui', 'sans-serif'],
        mono: ['"IBM Plex Mono"', 'ui-monospace', 'monospace']
      }
    }
  }
}
