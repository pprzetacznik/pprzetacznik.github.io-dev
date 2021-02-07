<template>
  <dev>
    <Layout>
      <template #sidebar-top>
      </template>
      <template #sidebar-bottom>
      </template>
      <template #page-top>
      </template>
      <template #page-bottom>
        <div class="theme-default-content">
          <ul>
            <li v-for="page in $currentTag.pages">
              <router-link class="page-link" :to="page.path">{{ page.title }}</router-link>
            </li>
          </ul>
        </div>
      </template>
      <template #top>
      </template>
    </Layout>
  </dev>
</template>

<script>
import Layout from "@vuepress/theme-default/layouts/Layout.vue";

export default {
  components: {
    Layout
  }
};
</script>
