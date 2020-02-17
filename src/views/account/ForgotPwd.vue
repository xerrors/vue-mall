<template>
  <div class="forgotpwd">
    <div class="verify" v-if="!verificationPassed">
      <el-input placeholder="手机号" v-model="tel"></el-input>
    <el-input placeholder="验证码" v-model="authcode">
      <el-button slot="append" icon="el-icon-chat-line-square" :disabled="disable" @click="waitToResend">{{ description }}</el-button>
      </el-input>
      <el-button style="width: 100%;" :disabled="disableInButton" :loading="loading" @click="confirm">确定</el-button>
    </div>
    <div class="set-password" v-else>
      <el-input placeholder="新的密码" v-model="newPassword" type="password"></el-input>
      <el-button style="width: 100%;" :loading="loading2" @click="setNewPassword">提交新密码</el-button>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      tel: '',
      seconds: 60,
      disable: false,
      authcode: '',
      loading: false,
      loading2: false,
      newPassword: '',
      verificationPassed: false
    }
  },
  computed: {
    disableInButton () {
      return !this.authcode || !this.tel
    },
    description () {
      if (this.seconds !== 60) {
        return this.seconds + 's后重发'
      } else {
        return '获取验证码'
      }
    }
  },
  methods: {
    waitToResend () {
      if (!this.tel) {
        this.$message({ type: 'error', message: '请输入手机号' })
        return
      }
      if (this.seconds === 60) {
        this.disable = true
        // TODO 此处向服务器发送请求，确认之后执行下面的
        this.$message({ type: 'success', message: '验证码已发送到你的手机上，请注意查收' })
        this.timer = setInterval(() => {
          this.seconds--
          if (this.seconds === 0) {
            clearInterval(this.timer)
            this.seconds = 60
          }
        }, 1000)
      } else {
        this.$message({ type: 'error', message: '请稍后再试' })
      }
    },
    confirm () {
      // TODO 向服务器发送信息
      this.loading = true
      setTimeout(() => {
        this.loading = false
        this.verificationPassed = true
      }, 2000)
    },
    setNewPassword () {
      // TODO 向服务器发送信息
      this.loading2 = true
      setTimeout(() => {
        this.loading2 = false
        this.$router.push('/')
      }, 2000)
      // ! console.log(this.newPassword)
    }
  }
}
</script>

<style lang="stylus" scoped>
.forgotpwd
  padding-top 6rem
  .verify, .set-password
    width 300px
    margin 0 auto
    >*
      margin 10px 0
</style>
