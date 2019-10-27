<template>
  <div class="home">
    <div class="box1" :style="{ backgroundImage: 'url(' +bg + ')'}">
      <div class="pic-1-left"></div>
      <div class="text-box">
        <h1>易传 eTran</h1>
        <p>用科技让每个电子产品都死得其所！</p>
        <button @click="goCenter" v-if="token">进入主页</button>
        <button @click="goLogin" v-else>去登录</button>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import { mapGetters } from 'vuex'
export default {
  name: 'home',
  data () {
    return {
      bg: 'home/bg-2.jpg'
    }
  },
  computed: {
    ...mapGetters(['token', 'roles', 'showLogin'])
  },
  methods: {
    goCenter () {
      this.$router.push('/' + this.roles + '/main')
    },
    goLogin () {
      this.$store.state.showLogin = true
    }
  }
}
</script>

<style lang="stylus" scoped>
*
  user-select none
.box1
  position: relative
  display flex
  align-items center
  justify-content center
  flex-wrap wrap
  width 100%
  height 100vh

  background-size 100% 100%
  background-repeat no-repeat

  &:after
    position: absolute;
    top: 0;
    left: 0;
    content: "";
    background-color: black;
    opacity: 0.5;
    z-index: 1;
    width: 100%;
    height: 100%;

  .pic-1-left
    // background red
    width 40vw
    min-width 20rem
    max-width 30rem
    height 20vw

  .text-box
    z-index 100
    color white
    margin-left 3rem
    width 20vw
    min-width 15rem
    max-width 25rem

    button
      z-index 1
      position relative
      font-size inherit
      font-family inherit
      color white
      padding 0.5em 1em
      outline none
      border-radius 2rem
      border none
      background-color hsl(236, 32%, 26%)
      overflow hidden
      transition color 0.4s ease-in-out
      &::before
        content ''
        z-index -1
        position absolute
        top 50%
        left 50%
        width 1em
        height 1em
        border-radius 50%
        background-color mainColor
        transform-origin center
        transform translate3d(-50%, -50%, 0) scale3d(0, 0, 0)
        transition transform 0.45s ease-in-out
      &:hover
        cursor pointer
        color #161616
        &::before
          transform translate3d(-50%, -50%, 0) scale3d(15, 15, 15)
</style>
