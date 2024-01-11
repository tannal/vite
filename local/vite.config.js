import { defineConfig } from 'vite'
import { plugin as markdown, Mode } from 'vite-plugin-markdown'
import MarkdownIt from 'markdown-it'

/**
 * @type {MarkdownIt.Options}
 */
const markdownIt = new MarkdownIt({
  html: true,
})

export default defineConfig({
  plugins: [markdown({ mode: [Mode.HTML], markdownIt })],
})
