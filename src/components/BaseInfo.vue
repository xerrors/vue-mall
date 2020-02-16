<template>
  <div class="base-info">
    <el-form :model="form" ref="form" label-width="100px" label-position='right'>
      <el-form-item label="头像" prop="avatar" required>
      <!--
        <el-upload
          class="avatar-uploader"
          action="https://jsonplaceholder.typicode.com/posts/"
          :show-file-list="false"
          :on-success="handleAvatarSuccess"
          :before-upload="beforeAvatarUpload">
          <el-avatar v-if="form.avatar" :src="form.avatar"></el-avatar>
          <i v-else class="el-icon-plus avatar-uploader-icon"></i>
        </el-upload>
        -->
        <el-avatar v-if="form.avatar" :src="form.avatar"></el-avatar>
      </el-form-item>
      <el-form-item label="用户名" prop="account">
        <el-input v-model="form.account"></el-input>
      </el-form-item>
      <el-form-item label="支付方式" prop="pay_way" required>
        <el-input v-model="form.pay_way"></el-input>
      </el-form-item>
      <el-form-item label="手机号码" prop="phone" required>
        <el-input v-model="form.tel"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="submitForm">保存</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
export default {
  props: [ 'form' ],
  computed: {
    baseInfo () {
      // 向服务器获取信息，这里就是本地直接测试
      return this.form
    }
  },
  methods: {
    submitForm () {
      this.$message({ message: '修改成功！', type: 'success' })
      // todo 向服务器发送请求啊
    }
  }
}
</script>

<style lang="stylus">
.base-info .el-input
  &__inner
    border none
    border-bottom 2px solid white
    border-radius 0
    padding 0
    &:focus
      border-color mainColor
</style>
