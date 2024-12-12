import { defineThemeConfig } from 'vuepress-theme-plume'
import { navbar } from './navbar'
import { notes } from './notes'

/**
 * @see https://theme-plume.vuejs.press/config/basic/
 */
export default defineThemeConfig({
  logo: 'https://theme-plume.vuejs.press/plume.png',

  appearance: true,

  profile: {
    avatar: 'https://theme-plume.vuejs.press/plume.png',
    name: 'My Blog',
    description: 'aaaaa',
    location: '您的位置',
    organization: '您的组织',
    circle: true, // 是否为圆形头像
    layout: 'left', // 个人信息在左侧还是右侧，'left' | 'right'
  },

  navbar,
  notes,

  social: [
    { icon: 'github', link: '/' },
  ],

})
