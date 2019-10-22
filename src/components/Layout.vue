<template>
  <div class="layout">
    <header>
      <navbar/>
    </header>
    <main>
      <router-view/>
    </main>
    <footer>
      <foot/>
    </footer>
  </div>
</template>

<script>
import Navbar from '@/components/Navbar.vue'
import Foot from '@/components/Foot.vue'

export default {
  name: 'layout',
  components: {
    Navbar,
    Foot
  }
}
</script>

<style lang="stylus">
::-webkit-scrollbar {
  width: 0.3rem !important;
}
::-webkit-scrollbar-thumb {
  background-color: #f2f2f2;
  border-radius: 0.25rem;
  transition: .3s ease;
}
::-webkit-scrollbar-thumb:hover {
  background-color: #c2c2c2;
  cursor: pointer;
}

::selection {
  color: #fff;
  background: #282c34;
}

.layout
  min-height 100vh
  min-width 400px
  display flex
  flex-direction column
  main
    flex 1
  footer
    display flex
    justify-content center
    align-items center

    height fheight
    background-color footerBg
</style>
