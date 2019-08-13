<template>
  <div id="app" class="fs20">
    <router-view :key="$route.fullPath" />
  </div>
</template>
<script>
export default {
  created() {}
};
</script>

<style lang="stylus"></style>
