<template>
  <div class="register-container">
    <div class="register-form">
      <!-- 标题 -->
      <h2>注册</h2>
      <el-form
        ref="userForm"
        :model="userForm"
        :rules="userRules"
        class="register-form"
        auto-complete="on"
        status-icon
      >
        <!-- 用户名 -->
        <el-form-item prop="account" label="用户名">
          <el-input
            v-model.trim="userForm.account"
            name="account"
            type="text"
            placeholder="用户名"
          />
        </el-form-item>
        <!-- 密码 -->
        <el-form-item prop="passwd" label="密码">
          <el-input
            type="password"
            v-model="userForm.passwd"
            placeholder="密码"
            name="passwd"
          />
        </el-form-item>
        <el-form-item prop="tel" label="手机号码">
          <el-input v-model.trim="userForm.tel" placeholder="E.g.1374567XXXX"/>
        </el-form-item>
        <el-form-item prop="pay_way" label="支付方式">
          <el-input v-model.trim="userForm.pay_way" placeholder="E.g.1374567XXXX"/>
        </el-form-item>
      </el-form>
      <div class="official-servise">
        <el-checkbox v-model="hasReaded" style="display: inline">我已阅读并接受</el-checkbox>
        <el-button style="display: inline" type="text" @click="viewServise">服务条款</el-button>
      </div>
      <el-button class="register-btn" type="primary" @click="handleRegister" :disabled="disabled">注册</el-button>
    </div>
  </div>
</template>

<script>
/* eslint-disable */
import {
  validUsername,
  validPassword,
  validTelephone
} from "@/utils/validate";
import { register } from '@/api/user'
export default {
  name: "Register",
  data() {
    const validatePassword = (rule, value, callback) => {
      if (!validPassword(value)) {
        callback(new Error("密码应为6-21字母和数字组成"));
      } else {
        callback();
      }
    };
    const validateTelephone = (rule, value, callback) => {
      if (!validTelephone(value)) {
        callback(new Error("号码不合法"));
      } else {
        callback();
      }
    };
    return {
      hasReaded: false,
      userForm: {
        account: null,
        passwd: null,
        tel: null,
        pay_way: null
      },
      userRules: {
        account: [
          { required: true, message: "请输入用户名", trigger: "change" },
          { min: 2, max: 10, message: "长度在 2 到 10 个字符", trigger: "change" }
        ],
        passwd: [
          { required: true, trigger: "change", validator: validatePassword }
        ],
        tel: [
          { required: true, trigger: "change", validator: validateTelephone }
        ]
      },
      disabled: false,
      redirect: undefined
    };
  },
  watch: {
    $route: {
      handler: function(route) {
        this.redirect = route.query && route.query.redirect;
      },
      immediate: true
    }
  },
  methods: {
    viewServise() {
      // 获取服务条款
      var item = "这是服务条款，这是服务条款，这是服务条款，这是服务条款，这是服务条款，这是服务条款，这是服务条款，这是服务条款，这是服务条款，这是服务条款，这是服务条款，这是服务条款。"
      this.$alert(
        "<p style='font-size: 15px; color: black;'>" + item + "</p>",
        "服务条款",
        {
          dangerouslyUseHTMLString: true
        }
      );
    },
    // 执行用户注册操作
    handleRegister() {
      this.$refs.userForm.validate(valid => {
        if (valid) {
          if (!this.hasReaded) {
            this.$message.error("您需阅读服务条款并接受方可完成注册。");
            return;
          }
          this.disabled = true;
          register(this.userForm)
            .then(() => {
              this.disabled = false;
              this.$router.push({ path: this.redirect || "/" });
            })
            .catch(() => {
              this.disabled = false;
            });
        } else {
          this.$message.error("用户信息格式错误！");
          return false;
        }
      });
    }
  }
};
</script>

<style lang="stylus">
.register-container
  max-width 700px
  margin 0 auto
  .register-btn
    margin-top 1rem

.el-input__inner
  border none
  border-radius 0
  border-bottom 2px solid #DCDFE6
</style>
