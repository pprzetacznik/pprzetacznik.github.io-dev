module.exports = {
  title: 'Piotr Przetacznik blog',
  extend: '@vuepress/theme-default',
  themeConfig: {
    repo: '',
    editLinks: false,
    docsDir: '',
    editLinkText: '',
    lastUpdated: false,
    nav: [
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
      '/guide/': [
        {
          title: 'Guide',
          collapsable: false,
          children: [
            '',
            'using-vue',
          ]
        }
      ],
    }
  },
  plugins: [
    ['@vuepress/blog', {
      directories: [
        {
          id: 'post',
          dirname: '_posts',
          path: '/post/',
          itemPermalink: '/post/:year/:month/:day/:slug',
          pagination: {
            perPagePosts: 10,
          },
        },
      ],
      frontmatters: [
        {
          id: "tag",
          keys: ['tag', 'tags'],
          path: '/tag/',
          frontmatter: { title: 'Tag' },
          layout: 'Tags',
          scopeLayout: 'Tag',
          pagination: {
            perPagePosts: 10
          }
        },
      ],
      sitemap: {
        hostname: 'https://pprzetacznik.github.io'
      },
    }],
  ],
}
