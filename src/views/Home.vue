<template>
  <div class="home">
    <header>
      <navbar :logined="logined" @on-login="isShow=true"></navbar>
    </header>

    <main>
      <p>主页内容测试</p>
      <login :is-show='isShow' @on-close="isShow=false"/>
    </main>

    <footer>
      <foot/>
    </footer>
  </div>
</template>

<script>
// @ is an alias to /src
import Navbar from '@/components/Navbar.vue'
import Foot from '@/components/Foot.vue'
import Login from '@/components/Login.vue'

export default {
  name: 'home',
  components: {
    Navbar,
    Login,
    Foot
  },
  data () {
    return {
      isShow: false,
      logined: false
    }
  }
}
</script>

<style lang="stylus">
  fheight = 3rem
  .home
    min-height 100vh
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
