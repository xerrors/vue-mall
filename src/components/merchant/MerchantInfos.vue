<template>
  <div class="merchant-infos">
    <el-form :model="form" ref="form" label-width="110px" label-position='right' :rules="rules">
      <el-form-item label="头像：" prop="avatar">
        <el-avatar v-if="form.avatar" :src="form.avatar"></el-avatar>
      </el-form-item>
      <el-form-item label="商户名称：" prop='name'>
        <el-input v-model="form.name"></el-input>
        <div class="input-tips">注：商户名称必须与营业执照上面的一致，提交后平台会进行审核</div>
      </el-form-item>
      <el-form-item label="商户负责人：" prop='principal'>
        <el-input v-model="form.principal"></el-input>
      </el-form-item>
      <el-form-item label="联系电话：" prop='tel'>
        <el-input v-model="form.tel" required></el-input>
      </el-form-item>
      <el-form-item label="商户地址：" prop='address'>
        <el-input v-model="form.address"></el-input>
        <div class="input-tips">注：商户地址必须与营业执照上面的一致，提交后平台会进行审核</div>
      </el-form-item>
      <el-form-item label="营业执照：" prop="license">
        <el-upload
          action="https://jsonplaceholder.typicode.com/posts/"
          :on-remove="handleRemove"
          multiple
          v-model="form.license"
          :limit="3"
          :on-exceed="handleExceed"
          :file-list="form.license">
          <el-button size="small">点击上传</el-button>
          <div slot="tip" class="el-upload__tip">只能上传jpg/png文件，且不超过5m</div>
        </el-upload>
      </el-form-item>
      <el-form-item label="法人姓名：" prop='legal_name'>
        <el-input v-model="form.legal_name"></el-input>
      </el-form-item>
      <el-form-item label="身份证号码：" prop='ID'>
        <el-input v-model="form.ID"></el-input>
      </el-form-item>
      <el-form-item label="身份证照片：" prop='ID_pics'>
        <el-upload
          action="https://jsonplaceholder.typicode.com/posts/"
          :on-remove="handleRemove"
          multiple
          :limit="3"
          :on-exceed="handleExceed"
          :file-list="form.ID_pics"
          v-model="form.ID_pics">
          <el-button size="small">点击上传</el-button>
          <div slot="tip" class="el-upload__tip">身份证正面以及背面，只能上传jpg/png文件，且不超过5m</div>
        </el-upload>
      </el-form-item>
      <el-form-item>
        <el-button @click="submitForm">提交审核</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
export default {
  props: ['form'],
  data () {
    return {
      rules: {
        name: [{ required: true, message: '请输入商户名称' }],
        principal: [{ required: true, message: '请输入负责人姓名' }],
        license: [{ type: 'array', required: true, message: '务必添加营业执照', trigger: 'change' }],
        tel: [{ required: true, message: '请输入联系方式' }],
        passwd: [
          { required: true, message: '请输入密码' },
          { min: 6, max: 16, message: '长度在 2 到 10 个字符', trigger: 'blur' }
        ],
        address: [{ required: true, message: '请输入商铺地址' }],
        legal_name: [{ required: true, message: '请输入法人姓名' }],
        ID: [{ required: true, message: '请输入身份证号码' }],
        ID_pics: [{ type: 'array', required: true, message: '务必添加身份证正反照片', trigger: 'change' }]
      }
    }
  },
  methods: {
    handleRemove (file, fileList) {
      // cosole.log(file, fileList)
    },
    handleExceed (files, fileList) {
      this.$message.warning(`当前限制选择 3 个文件，本次选择了 ${files.length} 个文件，共选择了 ${files.length + fileList.length} 个文件`)
    },
    submitForm () {
      this.$message({ message: '已经提交审核！', type: 'success' })
    }
  }
}
</script>

<style lang="stylus" scoped>
.merchant-infos
  .input-tips
    color color-info
    font-size small
</style>

<style lang="stylus">
.merchant-infos .el-input
  &__inner
    border none
    border-bottom 2px solid border-color-base
    border-radius 0
    padding 0
    &:focus
      border-color mainColor
</style>
