<template>
  <div class="base-info">
    <el-form :model="form" :rules="rules" ref="form" label-width="100px" class="demo-ruleForm">
      <el-form-item label="头像" prop="avatar" required>
        <el-upload
          class="avatar-uploader"
          action="https://jsonplaceholder.typicode.com/posts/"
          :show-file-list="false"
          :on-success="handleAvatarSuccess"
          :before-upload="beforeAvatarUpload">
          <el-avatar v-if="form.avatar" :src="form.avatar"></el-avatar>
          <i v-else class="el-icon-plus avatar-uploader-icon"></i>
        </el-upload>
      </el-form-item>
      <el-form-item label="真实姓名" prop="name" required>
        <el-input v-model="form.name"></el-input>
      </el-form-item>
      <el-form-item label="性别" prop="sex" required>
        <el-select v-model="form.sex" placeholder="性别">
          <el-option label="男" value="male"></el-option>
          <el-option label="女" value="female"></el-option>
          <el-option label="保密" value="secret"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="手机号码" prop="phone" required="">
        <el-input v-model="form.phone"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="submitForm(form)">保存</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
export default {
  data () {
    return {
      form: {
        id: 12121,
        name: '黄玉川',
        avatar: 'http://src.xerrors.fun/blog/20191021/CcFV3DJYgi0B.jpg?imageslim',
        phone: '17681352667',
        sex: 'male'
      }
    }
  },
  computed: {
    baseInfo () {
      // 向服务器获取信息，这里就是本地直接测试
      return this.form
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
