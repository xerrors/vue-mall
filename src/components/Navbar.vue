<template>
  <header class="navbar">
    <img class="logo" src="favicon.ico">
    <nav-links/>
  </header>
</template>

<script>
import NavLinks from '@/components/NavLinks.vue'

export default {
  nmae: 'nav-bar',
  components: {
    NavLinks
  }
}
</script>

<style lang="stylus">
  .navbar
    display flex
    align-items center
    justify-content space-between

    width 100%
    height 50px

    background-color navBgColor

    .logo
      width 40px
      height 40px
</style>
