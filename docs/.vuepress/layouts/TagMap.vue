<script setup lang="ts">
import { useBlogCategory } from '@vuepress/plugin-blog/client'
import { RouteLink } from 'vuepress/client'
import Layout from '@vuepress/theme-default/layouts/Layout.vue'

const categoryMap = useBlogCategory('tag')
</script>

<template>
  <Layout>
    <template #page-content-top>
      <div>
        <h1>List of tags</h1>
        <ul>
          <li v-for="({ items, path }, name) in categoryMap.map" :key="path">
            <RouteLink
              :key="name"
              :to="path"
              class="category"
            >
              {{ name }}
            </RouteLink>
            ({{ items.length }})
          </li>
        </ul>
      </div>
    </template>
  </Layout>
</template>
