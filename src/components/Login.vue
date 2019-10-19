 <template>
  <div class="login">
    <!--外层的遮罩 点击事件用来关闭弹窗，isShow控制弹窗显示 隐藏的props-->
    <div class="login-cover back"  v-if="isShow"  @click="closeMyself"></div>
    <!-- transition 这里可以加一些简单的动画效果 -->
    <transition name="drop">
      <div class="login-card" v-if="isShow">
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

  .login-card{
    position fixed
    top: 25%;
    // 移动端使用felx布局
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    z-index: 300;

    width 200px
    height 400px

    background-color #fff
 }
</style>
