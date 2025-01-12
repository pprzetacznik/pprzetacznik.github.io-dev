import { viteBundler } from '@vuepress/bundler-vite'
import { defaultTheme } from '@vuepress/theme-default'
import { defineUserConfig } from 'vuepress'
import { registerComponentsPlugin } from '@vuepress/plugin-register-components'
import { getDirname, path } from 'vuepress/utils'
import { blogPlugin } from '@vuepress/plugin-blog'
import { searchPlugin } from '@vuepress/plugin-search'
import { prismjsPlugin } from '@vuepress/plugin-prismjs'

const __dirname = getDirname(import.meta.url)

export default defineUserConfig({
  title: 'Piotr Przetacznik blog',
  bundler: viteBundler(),
  theme: defaultTheme({
    repo: '',
    editLinks: false,
    docsDir: '',
    editLinkText: '',
    lastUpdated: true,
    contributors: false,
    navbar: [
      {
        text: 'Posts',
        link: '/post/'
      },
      {
        text: 'Tags',
        link: '/tag/'
      },
      {
        text: 'About',
        link: '/'
      },
      {
        text: 'Github',
        link: 'https://github.com/pprzetacznik'
      },
      {
        text: 'X',
        link: 'https://x.com/pprzetacznik'
      }
    ],
    sidebar: {
    }
  }),
  extendsPageOptions: (pageOptions, app) => {
    if (pageOptions.filePath?.startsWith(app.dir.source('_posts/'))) {
      pageOptions.frontmatter = pageOptions.frontmatter ?? {}
      pageOptions.frontmatter.permalinkPattern = '/post/:year/:month/:day/:slug/'
    }
  },
  plugins: [
    registerComponentsPlugin({
      componentsDir: path.resolve(__dirname, './components'),
    }),
    blogPlugin({
      filter: ({ filePathRelative, frontmatter }) => {
        // drop those pages which is NOT generated from file
        if (!filePathRelative) return false

        // drop those pages in `archives` directory
        if (filePathRelative.startsWith('archives/')) return false

        // drop those pages which do not use default layout
        if (frontmatter.home || frontmatter.layout) return false

        return true
      },

      getInfo: ({ frontmatter, title, git = {}, data = {} }) => {
        // getting page info
        const info = {
          title,
          author: frontmatter.author || '',
          categories: frontmatter.categories || [],
          date: frontmatter.date || git.createdTime || null,
          tags: frontmatter.tags || [],
          excerpt: data.excerpt || '',
        }
        return info
      },
      type: [
        {
          key: 'post',
          filter: ({ frontmatter }) => frontmatter.author,
          path: '',
          frontmatter: () => ({ title: 'List of all posts' }),
        },
      ],
      category: [
        {
          key: 'tag',
          getter: ({ frontmatter }) => frontmatter.tag || [],
          path: '/tag/',
          layout: 'TagMap',
          frontmatter: () => ({ title: 'Tag page' }),
          itemPath: '/tag/:name/',
          itemLayout: 'TagList',
          itemFrontmatter: (name) => ({ title: `Tag ${name}`, tag: name }),
        },
      ],
    }),
    searchPlugin({
    }),
    prismjsPlugin({
      // theme: 'cb',
      // theme: 'coldark-dark',
      // theme: 'dracula',
      // theme: 'gruvbox-dark',
      // theme: 'holi',
      // theme: 'hopscotch',
      // theme: 'lucario',
      // theme: 'material-dark',
      // theme: 'material-oceanic',
      // theme: 'night-owl',
      // theme: 'nord',
      // theme: 'one-dark',
      // theme: 'pojoaque',
      // theme: 'shades-of-purple',
      theme: 'tomorrow',
      // theme: 'vsc-dark-plus',
      // theme: 'xonokai',
      // theme: 'z-touch',
      lineNumbers: false
    })
  ]
})
