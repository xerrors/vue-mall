<template>
  <div id="app">
    <layout/>
  </div>
</template>

<script>
import Layout from '@/components/layout/Layout.vue'

export default {
  components: {
    Layout
  },
  created () {
    const html = document.documentElement // returns the html tag
    html.setAttribute('lang', 'cn')
  }
}
</script>
