<template>
  <div 
    v-if="vis"
    class="spinner"
    v-loading="vis"
  />
</template>

<script>
export default {
  computed: {
    vis () {
      return this.$store.getters.loader
    }
  }
}
</script>

<style scoped>
  .spinner{
    position: fixed;
    width: 100vw;
    height: 100vh;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    z-index: 9999999999999999999;
  }
</style>