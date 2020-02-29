<template>
  <div class="security">
    <div class="reset-password">
      <h4>修改密码</h4>
      <el-form :model="passwordForm" :rules="rules" ref="passwordForm">
        <el-form-item prop="oldPassword">
          <el-input type="password" v-model="passwordForm.oldPassword" placeholder="旧密码" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item prop="newPassword">
          <el-input type="password" v-model="passwordForm.newPassword" placeholder="新密码" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item prop="newPasswordConfirm">
          <el-input type="password" v-model="passwordForm.newPasswordConfirm" placeholder="确认密码" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button @click="changePassword">确认更改</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script>
import { changePasswd } from '@/api/user'
export default {
  data () {
    var validatePass0 = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('请输入密码'))
      } else {
        callback()
      }
    }
    var validatePass1 = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('请输入密码'))
      } else {
        if (this.passwordForm.newPassword !== '') {
          this.$refs.passwordForm.validateField('newPasswordConfirm')
        }
        callback()
      }
    }
    var validatePass2 = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('请再次输入密码'))
      } else if (value !== this.passwordForm.newPassword) {
        callback(new Error('两次输入密码不一致!'))
      } else {
        callback()
      }
    }
    return {
      // * 密码部分的数据
      loading: false,
      passwordForm: {
        oldPassword: '',
        newPassword: '',
        newPasswordConfirm: ''
      },
      rules: {
        oldPassword: [
          { validator: validatePass0, trigger: 'blur' }
        ],
        newPassword: [
          { validator: validatePass1, trigger: 'blur' }
        ],
        newPasswordConfirm: [
          { validator: validatePass2, trigger: 'blur' }
        ]
      }

    }
  },
  methods: {
    changePassword () {
      this.loading = true
      this.$refs.passwordForm.validate((valid) => {
        if (valid) {
          return new Promise((resolve, reject) => {
            changePasswd(this.passwordForm).then(() => {
              this.passwordForm = {
                oldPassword: '',
                newPassword: '',
                newPasswordConfirm: ''
              }
              this.loading = false
              resolve()
            }).catch(err => {
              reject(err)
            })
          })
        } else {
          this.$message({
            type: 'error',
            message: '填写错误'
          })
          this.loading = false
          return false
        }
      })
    }
  }
}
</script>

<style lang="stylus" scoped>
.reset-password
  width 400px;
  >*
    margin 10px 0
</style>
