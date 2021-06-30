<template>
  <component :is="layout">
    <router-view :key="$route.path" />
  </component>

  <Loader />
</template>

<script>
import Home from '@/layout/Home'
import Loader from '@/components/general/Loader'
import { mapMutations } from 'vuex'

const components = { Home, Loader }

export default {
  components,
  data() {
    return {
      time: false
    }
  },
  mounted() {
  },
  computed: {
    layout () {
      const key = this.$get(this.$route, 'meta.layout')
      return components[key] ? key : 'Default'
    }
  },
  methods: {
    ...mapMutations([])
  }
}
</script>

<style lang="scss">
  @import "./style/main"
</style>
