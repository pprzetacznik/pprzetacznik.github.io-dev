<template>
  <div>
    <Layout>
      <template #sidebar-top>
      </template>
      <template #sidebar-bottom>
      </template>
      <template #page-top>
      </template>
      <template #page-bottom>
        <!-- <Content/> -->
      </template>
    </Layout>
  </div>
</template>

<script>
import Layout from "@vuepress/theme-default/layouts/Layout.vue";

export default {
  components: {
    Layout
  }
};
</script>
