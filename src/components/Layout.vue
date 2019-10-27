<template>
  <div class="layout">
    <login :is-show='!token'/>
    <header v-if="!hiddenNavbar">
      <navbar></navbar>
    </header>
    <main>
      <debug class="debug"/>
      <router-view/>
    </main>
    <footer  v-if="!hiddenFooter">
      <foot/>
    </footer>
  </div>
</template>

<script>
import Navbar from '@/components/Navbar.vue'
import Foot from '@/components/Foot.vue'
import Debug from '@/components/Debug.vue'
import Login from '@/components/Login.vue'

import { mapGetters } from 'vuex'

export default {
  name: 'layout',
  components: {
    Navbar,
    Foot,
    Debug,
    Login
  },
  computed: {
    ...mapGetters(['token']),
    hiddenNavbar () {
      return this.$route.meta.hiddenNavbar || false
    },
    hiddenFooter () {
      return this.$route.meta.hiddenFooter || false
    }
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
  min-width 600px
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

<style scoped>
.debug {
  position: absolute;
  right: 100px;
  top: 300px;
  width: 200px;
  overflow: hidden;
}
</style>
