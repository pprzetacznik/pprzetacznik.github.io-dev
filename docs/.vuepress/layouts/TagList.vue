<script setup lang="ts">
import { useBlogCategory } from '@vuepress/plugin-blog/client'
import Layout from '@vuepress/theme-default/layouts/Layout.vue'
import { usePageFrontmatter } from 'vuepress/client';

const categoryMap = useBlogCategory('tag')
const frontmatter = usePageFrontmatter()
</script>

<template>
  <Layout>
    <template #page-content-top>
      <div>
        <h1>List of tags</h1>
        <div class="category-wrapper">
          <span
            class="asdf"
            v-for="({ items, path }, name) in categoryMap.map"
          >
            <RouteLink
              :key="name"
              :to="path"
              class="category"
            >
              {{ name }}
            </RouteLink>
            ({{ items.length }})
          </span>
        </div>

        <h2>Blog posts - {{ frontmatter.tag }}</h2>
        <div v-if="categoryMap.currentItems" class="article-wrapper">
          <div v-if="!categoryMap.currentItems.length">Nothing in here.</div>

          <ul>
            <li v-for="item in categoryMap.currentItems">
              <a :href="item.path">{{ item.info.title }}</a>
              {{ new Date(item.info.date).toLocaleDateString() }}
            </li>
          </ul>

        </div>
      </div>
    </template>
  </Layout>
</template>
