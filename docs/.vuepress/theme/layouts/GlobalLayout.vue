<template>
  <div id="global-layout">
    <!-- <header style="background&#45;color: #DDD"> -->
    <!--   <router&#45;link to="/">{{ $site.title }}</router&#45;link> -->
    <!--   <router&#45;link to="/post/">Blog</router&#45;link> -->
    <!--   <router&#45;link to="/tag/">Tag</router&#45;link> -->
    <!-- </header><br> -->
    <DefaultGlobalLayout/>
    <!-- <br> -->
    <!-- <footer style="background&#45;color: #DDD"> -->
    <!--   <a href="https://github.com/pprzetacznik">Github</a> -->
    <!-- </footer> -->
  </div>
</template>

<script>
import GlobalLayout from '@app/components/GlobalLayout.vue'

export default {
  components: { DefaultGlobalLayout: GlobalLayout },
}
</script>
