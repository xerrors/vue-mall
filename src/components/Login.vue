 <template>
  <div class="login">
    <!--外层的遮罩 点击事件用来关闭弹窗，isShow控制弹窗显示 隐藏的props-->
    <div class="login-cover back"  v-if="isShow"  @click="closeMyself"></div>
    <!-- transition 这里可以加一些简单的动画效果 -->
    <transition name="drop">
      <div class="card" v-if="isShow">
        <div class="card__head">
          <div class="select title">用户登录</div>
          <div class="title">商户登录</div>
        </div>
        <input class="reset card__input" placeholder="用户名">
        <input class="reset card__input" placeholder="密码">
        <button class="reset card__btn">登录</button>
        <div class="card__info">
          <router-link to="register">注册</router-link>
          <router-link to="fog-pwd">忘记密码</router-link>
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
export default {
  props: ['isShow'],
  methods: {
    closeMyself () {
      this.$emit('on-close')
    }
  }
}
</script>

<style lang="stylus" scoped>
 // 最外层 设置position定位
  .login {
    position: relative;
    color: #2e2c2d;
    font-size: 16px;

    display flex
    align-items center
    justify-content center

    overflow hidden
  }
  // 遮罩 设置背景层，z-index值要足够大确保能覆盖，高度 宽度设置满 做到全屏遮罩
  .login-cover
    position fixed
    left 0
    top 0
    z-index 200

    width 100%
    height 100%

    background rgba(0,0,0, 0.8)
    overflow hidden

  .card
    display flex
    flex-direction column
    z-index 300

    height 60vh
    min-height 400px
    max-height 800px
    min-width 250px
    max-width: 350px
    top 2.5vh
    padding 2rem 4rem
    border-radius 6px
    border-top 7px solid mainColor
    box-shadow rgba(0, 0, 0, 0.1) 0px 2px 12px 0px
    background white

    *
      margin 1rem 0

    &__head
      display flex
      justify-content space-around
      .title
        line-height 2rem
      .select
        border-bottom 4px solid mainColor

    .reset
      border none
      border-radius 2rem
      &:focus
        outline none
        box-shadow rgba(0, 0, 0, 0.1) 0px 2px 12px 0px

    &__input
      height 1rem
      padding 1rem 2rem
      background-color #d9e0e1
    &__btn
      height 3rem
      padding 0rem 2rem
      background-color mainColor
      font-size medium
      cursor pointer
      &:hover
        box-shadow rgba(0, 0, 0, 0.1) 0px 2px 12px 0px

    &__info
      font-size small
      display flex
      justify-content space-around
      *
        color mainColor
</style>
