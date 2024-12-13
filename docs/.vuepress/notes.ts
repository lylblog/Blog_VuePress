import { defineNoteConfig, defineNotesConfig } from 'vuepress-theme-plume'

const Go_ashore  = defineNoteConfig({
  dir: 'Go_ashore',
  link: '/Go_ashore',
  sidebar: 'auto',
})

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
  notes: [typescript,Vue,Go_ashore],
})
