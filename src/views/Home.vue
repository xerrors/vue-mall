<template>
  <div class="home">
    <header>
      <navbar></navbar>
    </header>

    <main>
      <div class="test-ctn">
        <div class="test"></div>
        <div class="test"></div>
        <div class="test"></div>
      </div>
      <login :is-show='showLogin'/>
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

import { mapGetters } from 'vuex'

export default {
  name: 'home',
  components: {
    Navbar,
    Login,
    Foot
  },
  data () {
    return {
    }
  },
  computed: {
    ...mapGetters(['name', 'roles', 'token', 'showLogin'])
  },
  methods: {
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

<style scoped>
.test {
  height: 100vh;
  border: 1px solid #ccc
}

.test-ctn:nth-child(even) {
  background-color: #fff;
}
</style>
