import { viteBundler } from '@vuepress/bundler-vite'
import { defineUserConfig } from 'vuepress'
import { plumeTheme } from 'vuepress-theme-plume'
import {BlogPostCoverLayout, NotesOptions} from "vuepress-theme-plume/lib/shared";
import {notes} from "./notes";

export default defineUserConfig({
  base: '/',
  lang: 'zh-CN',
  title: 'My Blog',
  description: 'aaaaa',

  bundler: viteBundler(),

  theme: plumeTheme({
    // 添加您的部署域名
    // hostname: 'https://your_site_url',
    // your git repo url
    notes,
    docsRepo: '',
    docsDir: 'docs',


    // 文章页脚贡献者
    contributors: {
      mode: 'block',
      info: [
        {
          username: 'lylblog', // github username
          alias: ['lylblog'], // 别名，本地 git 配置中的用户名
        }
      ]
    },
    blog:{
      postCover: {
        layout: 'odd-left', //'left' | 'right' | 'odd-left' | 'odd-right' | 'top'
        ratio: '16:9',
        width: 300,
        compact: true,
      },

      // 每页显示的文章数量
      pagination: 15,
    },

    plugins: {

      git: true, // process.env.NODE_ENV === 'production',
      /**
       * Shiki 代码高亮
       * @see https://theme-plume.vuejs.press/config/plugins/code-highlight/
       */
      shiki: {
        // 强烈建议预设代码块高亮语言，插件默认加载所有语言会产生不必要的时间开销
        languages: ['shell', 'bash', 'typescript', 'javascript'],
      },

      /**
       * markdown enhance
       * @see https://theme-plume.vuejs.press/config/plugins/markdown-enhance/
       */
      markdownEnhance: {
        demo: true,
      //   include: true,
      //   chart: true,
      //   echarts: true,
      //   mermaid: true,
      //   flowchart: true,
      },

      /**
       *  markdown power
       * @see https://theme-plume.vuejs.press/config/plugin/markdown-power/
       */
      markdownPower: {
        imageSize: 'local',
      //   pdf: true,
      //   caniuse: true,
      //   plot: true,
      //   bilibili: true,
      //   youtube: true,
        icons: true,
      //   codepen: true,
      //   replit: true,
      //   codeSandbox: true,
      //   jsfiddle: true,
      //   repl: {
      //     go: true,
      //     rust: true,
      //     kotlin: true,
      //   },
      },

      /**
       * 评论 comments
       * @see https://theme-plume.vuejs.press/guide/features/comments/
       */
      // comment: {
      //   provider: '', // "Artalk" | "Giscus" | "Twikoo" | "Waline"
      //   comment: true,
      //   repo: '',
      //   repoId: '',
      //   categoryId: '',
      //   mapping: 'pathname',
      //   reactionsEnabled: true,
      //   inputPosition: 'top',
      // },
    },
  }),
})
