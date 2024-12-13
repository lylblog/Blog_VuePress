import { defineNavbarConfig } from 'vuepress-theme-plume'

export const navbar = defineNavbarConfig([
  { text: '首页', link: '/' },
  { text: '博客', link: '/blog/' },
  { text: '分类', link: '/blog/categories/' },
  // { text: '标签', link: '/blog/tags/' },
  { text: '归档', link: '/blog/archives/' },
  {
    text: '笔记',
    items: [
      { text: 'typescript', link: '/typescript/' },
      { text: 'Vue', link: '/Vue/' },
      { text: '关于笔记', link: '/notes/' },
    ]
  },
  { text: '友情链接', link: '/friends/' },
  { text: '主题模板-plume', link: 'https://theme-plume.vuejs.press/guide/intro/' },
])
