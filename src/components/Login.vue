 <template>
  <div class="login">
    <!--外层的遮罩 点击事件用来关闭弹窗，isShow控制弹窗显示 隐藏的props-->
    <div class="login-cover"  v-if="isShow"  @click="closeMyself"></div>
    <!-- transition 这里可以加一些简单的动画效果 -->
    <transition name="drop">
      <div class="card" v-if="isShow">
        <div class="card__head">
          <div
            :class="[{'select': userForm.role == 'user'}, 'title']"
            @click="userForm.role = 'user'"
            >用户登录</div>
          <div
            :class="[{'select': userForm.role == 'boss'}, 'title']"
            @click="userForm.role = 'boss'"
            >商户登录</div>
        </div>
        <input
          v-model.trim="userForm.username"
          class="reset card__input"
          placeholder="用户名"
          required>
        <input
          type="password"
          v-model.trim="userForm.password"
          class="reset card__input"
          placeholder="密码"
          @keyup.enter.native="submit"
          required>
        <button class="reset card__btn" @click="submit" v-loading="loading">登录</button>
        <div class="card__info">
          <el-link @click="register">注册</el-link>
          <el-link @click="forgotPWD">忘记密码</el-link>
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
export default {
  data () {
    return {
      isUser: true,
      loading: false,
      userForm: {
        username: '',
        password: '',
        role: 'user'
      }
    }
  },
  watch: {
    $route (to, from) {
      // 当路由切换的时候关闭登录窗口
      this.closeMyself()
    }
  },
  computed: {
    isShow () {
      return this.$store.state.showLogin
    }
  },
  methods: {
    closeMyself () {
      this.$store.state.showLogin = false
    },
    submit () {
      this.loading = true
      this.$store
        .dispatch('Login', this.userForm)
        .then(() => {
          this.loading = false
          this.closeMyself()
        })
        .catch(err => {
          console.log(err)
          this.loading = false
        })
      this.$store.dispatch('GetInfo')
      if (this.$route.path === '/') {
        this.$router.push('/' + this.$store.state.roles + '/main')
      }
      this.$message({
        message: '登录成功',
        type: 'success'
      })
    },
    register () {
      this.$router.push('register')
    },
    forgotPWD () {
      this.$router.push('fog-pwd')
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

    width 100vw
    height 100vh

    background rgba(0,0,0, 0.2)
    overflow hidden

  .card
    position fixed
    display flex
    flex-direction column
    z-index 300

    height 60vh
    min-height 25rem
    max-height 28rem
    min-width 14rem
    max-width: 22rem
    top 10vh
    padding 2rem 4rem
    border-radius 0.4rem
    border-top 0.5rem solid mainColor
    box-shadow cardShadow
    background white

    *
      margin 1rem 0

    &__head
      display flex
      justify-content space-around
      .title
        line-height 2rem
        cursor pointer
      .select
        border-bottom 4px solid mainColor

    .reset
      border none
      border-radius 2rem
      &:focus
        outline none
        box-shadow cardShadow

    &__input
      height 1rem
      padding 1rem 2rem
      background-color #d9e0e1
    &__btn
      height 3rem
      padding 0.8rem 2rem
      background-color mainColor
      font-size medium
      cursor pointer
      &:hover
        box-shadow cardShadow

    &__info
      font-size small
      display flex
      justify-content space-around
      *
        color mainColor
</style>
