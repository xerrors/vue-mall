 <template>
  <div class="login">
    <!--外层的遮罩 点击事件用来关闭弹窗，isShow控制弹窗显示 隐藏的props-->
    <div class="login-cover"  v-if="isShow"  @click="closeMyself"></div>
    <!--这里可以加一些简单的动画效果 -->
    <div class="card" v-if="isShow">
      <div class="card__head">
        <div
          :class="[{'select': userForm.role == 'user'}, 'title']"
          @click="userForm.role = 'user'"
          >用户登录</div>
        <div
          :class="[{'select': userForm.role == 'merchant'}, 'title']"
          @click="userForm.role = 'merchant'"
          >商户登录</div>
      </div>
      <input
        v-model.trim="userForm.account"
        class="reset card__input"
        placeholder="手机号"
        required>
      <input
        type="password"
        v-model.trim="userForm.passwd"
        class="reset card__input"
        placeholder="密码"
        @keyup.enter.native="submit"
        required>
      <button class="reset card__btn" :loading="loading" @click="submit">登录</button>
      <div class="card__info">
        <el-link @click="register">注册</el-link>
        <el-link @click="forgotPWD">忘记密码</el-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      isUser: true,
      loading: false,
      userForm: {
        account: '',
        passwd: '',
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
    },
    role () {
      return this.$store.state.role
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
        .catch(() => {
          this.loading = false
        })
      if (this.role === 'merchant') {
        this.$router.push('/merchant/main')
      } else if (this.$route.path === '/') {
        this.$router.push('/main')
      }
    },
    register () {
      if (this.userForm.role === 'user') {
        this.$router.push('register')
      } else {
        this.$router.push('settlein')
      }
    },
    forgotPWD () {
      this.$router.push('forgotpwd')
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
    animation: fade-in 0.4s cubic-bezier(0.390, 0.575, 0.565, 1.000) both;

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

    animation: flip-in-hor-bottom 0.5s cubic-bezier(0.250, 0.460, 0.450, 0.940) both;

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
      transition all .5s ease
      &:hover
        box-shadow rgb(71, 207, 115) 0px 2px 12px 0px

    &__info
      font-size small
      display flex
      justify-content space-around
      *
        color mainColor

@keyframes fade-in {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}

@keyframes flip-in-hor-bottom {
  0% {
    transform: rotateX(80deg);
    opacity: 0;
  }
  100% {
    transform: rotateX(0);
    opacity: 1;
  }
}
</style>
