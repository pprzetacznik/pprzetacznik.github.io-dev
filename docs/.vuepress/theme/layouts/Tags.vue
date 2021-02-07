<template>
  <dev>
    <Layout>
      <template #sidebar-top>
      </template>
      <template #sidebar-bottom>
      </template>
      <template #page-top>
        <div class="theme-default-content">
          <ul>
            <li v-for="tag in $tag.list">
              <router-link class="page-link" :to="tag.path">{{ tag.name }}</router-link>
            </li>
          </ul>
        </div>
      </template>
      <template #page-bottom>
      </template>
    </Layout>
  </dev>
</template>

<script>
import Layout from "@vuepress/theme-default/layouts/Layout.vue";
// import FrontmatterKey from "@vuepress/theme-blog/layouts/FrontmatterKey.vue";

export default {
  components: {
    Layout
    // Layout,
    // FrontmatterKey
  }
};
</script>
