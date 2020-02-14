<template>
  <div class="layout">
    <login :is-show='showLogin'/>
    <header v-if="!hiddenNavbar">
      <navbar></navbar>
    </header>

    <main v-if="!isSpecialPage">
      <!-- <debug class="debug"/> -->
      <router-view/>
    </main>

    <router-view v-if="isSpecialPage"/>

    <footer v-if="!hiddenFooter">
      <foot/>
    </footer>
  </div>
</template>

<script>
import Navbar from '@/components/Navbar.vue'
import Foot from '@/components/Foot.vue'
// import Debug from '@/components/Debug.vue'
import Login from '@/components/Login.vue'

import { mapGetters } from 'vuex'

export default {
  name: 'layout',
  components: {
    // Debug,
    Navbar,
    Foot,
    Login
  },
  computed: {
    ...mapGetters(['token', 'showLogin']),
    hiddenNavbar () {
      return this.$route.meta.hiddenNavbar ||
              this.$route.meta.isSpecialPage ||
              false
    },
    hiddenFooter () {
      return this.$route.meta.hiddenFooter ||
      this.$route.meta.isSpecialPage ||
      false
    },
    isSpecialPage () {
      return this.$route.meta.isSpecialPage || false
    }
  }
}
</script>

<style lang="stylus">
// 为了美观就关掉了
::-webkit-scrollbar {
  // width: 0.3rem !important;
  width: 0 !important;
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
  min-width 700px
  display flex
  flex-direction column
  align-items center
  color text-color-regular
  header
    width 100%
    background-color navBgColor
    box-shadow rgba(0,0,0,0.1) 0px 1px 6px 0px;
    .navbar
      margin 0 auto
      width 80%
      max-width 1600px
      min-width 800px
  main
    flex 1
    width 80%
    max-width 1600px
    min-width 800px
    margin-top 1rem
  footer
    display flex
    justify-content center
    align-items center
    margin-top 10rem
    width 100%
    height fheight
    background-color footerBg

  .home
    width 100%
</style>

<style scoped>
.debug {
  position: absolute;
  right: 100px;
  top: 300px;
  width: 200px;
  overflow: hidden;
  background: rgba(0,0,0,.5);
  color: white;
}
</style>
