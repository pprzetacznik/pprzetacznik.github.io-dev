import { defineClientConfig } from 'vuepress/client'
import TagMap from './layouts/TagMap.vue'
import TagList from './layouts/TagList.vue'

export default defineClientConfig({
  layouts: {
    TagMap,
    TagList,
  },
})
