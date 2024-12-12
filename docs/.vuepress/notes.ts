import { defineNoteConfig, defineNotesConfig } from 'vuepress-theme-plume'

const typescript  = defineNoteConfig({
  dir: 'typescript',
  link: '/typescript',
  sidebar: 'auto',
})
const Vue = defineNoteConfig({
  dir: 'Vue',
  link: '/Vue',
  sidebar: 'auto',
})

export const notes = defineNotesConfig({
  dir: 'notes',
  link: '/',
  notes: [typescript,Vue],
})
