<template>
  <div class="base-info">
    <el-form :model="newForm" :rules="rules" ref="newForm" label-width="100px" class="demo-ruleForm">
      <el-form-item label="头像" prop="avatar" required>
      <!--
        <el-upload
          class="avatar-uploader"
          action="https://jsonplaceholder.typicode.com/posts/"
          :show-file-list="false"
          :on-success="handleAvatarSuccess"
          :before-upload="beforeAvatarUpload">
          <el-avatar v-if="newForm.avatar" :src="form.avatar"></el-avatar>
          <i v-else class="el-icon-plus avatar-uploader-icon"></i>
        </el-upload>
        -->
        <el-avatar v-if="newForm.avatar" :src="form.avatar"></el-avatar>
      </el-form-item>
      <el-form-item label="用户名" prop="account">
        <el-input v-model="newForm.account" disabled></el-input>
      </el-form-item>
      <!--
      <el-form-item label="性别" prop="sex" required>
        <el-select v-model="newForm.sex" placeholder="性别">
          <el-option label="男" value="male"></el-option>
          <el-option label="女" value="female"></el-option>
          <el-option label="保密" value="secret"></el-option>
        </el-select>
      </el-form-item>
      -->
      <el-form-item label="支付方式" prop="pay_way" required>
        <el-input v-model="newForm.pay_way"></el-input>
      </el-form-item>
      <el-form-item label="手机号码" prop="phone" required>
        <el-input v-model="newForm.tel"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="submitForm(newForm)">保存</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
export default {
  props: [ 'form' ],
  data () {
    return {
      newForm: {
        // id: this.form.id,
        avatar: this.form.avatar,
        account: this.form.account,
        // sex: this.form.sex,
        tel: this.form.tel
      }
    }
  },
  computed: {
    baseInfo () {
      // 向服务器获取信息，这里就是本地直接测试
      return this.newForm
    }
  },
  methods: {
    submitForm (form) {
      this.$message({ message: '修改成功！', type: 'success' })
      // 向服务器发送请求啊
      this.form = form
    }
  }
}
</script>
