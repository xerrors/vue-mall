<template>
  <div class="home">
    <navbar :logined="logined" @on-login="isShow=true"></navbar>
    <img alt="Vue logo" src="../assets/logo.png">
    <login :is-show='isShow' @on-close="isShow=false"/>
  </div>
</template>

<script>
// @ is an alias to /src
import Navbar from '@/components/Navbar.vue'
import Login from '@/components/Login.vue'

export default {
  name: 'home',
  components: {
    Navbar,
    Login
  },
  data () {
    return {
      isShow: false,
      logined: false
    }
  }
}
</script>
