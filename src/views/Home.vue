<template>
  <div class="home">
    <div :class="{showMsg: isShowMsg}" class="box1" :style="{ backgroundImage: 'url(' +bg + ')'}">
      <div class="pic-1-left"></div>
      <div class="text-box">
        <h1>易传 eTran</h1>
        <p>易传二手交易平台</p>
        <p>用科技让每个电子产品都死得其所！</p>
        <!-- <button @click="goCenter" v-if="token">进入主页</button> -->
        <button @click="goCenter" >立即体验</button>
        <button @click="goLogin" v-if="!token">去登录</button>
        <button @click="showMsg" class="more">了解更多</button>
      </div>
    </div>
    <div class="home_msg" v-if="isShowMsg">
      <div class="item item1" style="background: #effffb;">
        <div class="content">
          <img src="http://src.xerrors.fun/blog/20200127/EvFWm9QQhbHn.png"/>
          <div class="info">
            <h3>这是标题 1</h3>
            <div>科技的发展让我们有更多的机会去支持我们的环保活动，从你我开始保护我们的环境吧！</div>
          </div>
        </div>
      </div>
      <div class="item item2" style="background: #deddfa;">
        <div class="content">
          <div class="info">
            <h3>这是标题 2</h3>
            <div>科技的发展让我们有更多的机会去支持我们的环保活动，从你我开始保护我们的环境吧！</div>
          </div>
          <img src="http://src.xerrors.fun/blog/20200127/fTJmiXqDeHis.png"/>
        </div>
      </div>
      <div class="item item3" style="background: #effcef;">
        <div class="content">
          <img src="http://src.xerrors.fun/blog/20200127/SS4C7nOxldb9.png"/>
          <div class="info">
            <h3>这是标题 3</h3>
            <div>科技的发展让我们有更多的机会去支持我们的环保活动，从你我开始保护我们的环境吧！</div>
          </div>
        </div>
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
      bg: 'home/bg-2.jpg',
      isShowMsg: false
    }
  },
  computed: {
    ...mapGetters(['token', 'role', 'showLogin'])
  },
  methods: {
    goCenter () {
      this.$router.push((this.role === 'merchant' ? '/merchant' : '') + '/main')
    },
    goLogin () {
      this.$store.state.showLogin = true
    },
    showMsg () {
      this.isShowMsg = true
    }
  }
}
</script>

<style lang="stylus" scoped>
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
  user-select none

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
      padding 0.5em 1.5em
      margin 0 1rem 0.5rem 0
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

<style lang="stylus" scoped>
.showMsg
  height 95vh
  transition height 0.5s ease

.home_msg
  height 2100px
  width 100%
  .item
    width 100%
    &>div
      width 80%
      min-width 1000px
      max-width 1250px
      margin 0 auto
      height 40rem
      display flex
      justify-content center
      align-items center
      img
        width 45rem
        box-shadow cardShadow
      .info
        margin 0 70px
        h3
          color text-color-title
        div
          color text-color-regular
</style>
