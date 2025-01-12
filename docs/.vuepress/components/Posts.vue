<script setup lang="ts">
import { useBlogType } from '@vuepress/plugin-blog/client'
const categoryMap = useBlogType('post')
</script>

<template>
  <ul>
    <li v-for="item in categoryMap.items">
      <a :href="item.path">{{ item.info.title }}</a>
      {{ new Date(item.info.date).toLocaleDateString() }}
    </li>
  </ul>
</template>
