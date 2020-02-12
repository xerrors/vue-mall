<template>
  <div class="main">
    <h3 class="title">商户入驻</h3>
    <el-form
      ref="form"
      :model="form"
      :rules="rules"
      class="my_form">
      <el-form-item label="商户名称" prop='name'>
        <el-input v-model="form.name"></el-input>
      </el-form-item>
      <el-form-item label="商户负责人" prop='principal'>
        <el-input v-model="form.principal"></el-input>
      </el-form-item>
      <el-form-item label="联系电话" prop='tel'>
        <el-input v-model="form.tel" required></el-input>
      </el-form-item>
      <el-form-item label="商户地址" prop='address'>
        <el-input v-model="form.address"></el-input>
      </el-form-item>
      <el-form-item label="营业执照" prop="license">
        <el-upload
          action="https://jsonplaceholder.typicode.com/posts/"
          :on-remove="handleRemove"
          multiple
          v-model="form.license"
          :limit="3"
          :on-exceed="handleExceed"
          :file-list="form.license">
          <el-button size="small" type="primary">点击上传</el-button>
          <div slot="tip" class="el-upload__tip">只能上传jpg/png文件，且不超过5m</div>
        </el-upload>
      </el-form-item>
      <el-form-item label="法人姓名" prop='legal_name'>
        <el-input v-model="form.legal_name"></el-input>
      </el-form-item>
      <el-form-item label="身份证号码" prop='ID'>
        <el-input v-model="form.ID"></el-input>
      </el-form-item>
      <el-form-item label="身份证照片" prop='ID_pics'>
        <el-upload
          action="https://jsonplaceholder.typicode.com/posts/"
          :on-remove="handleRemove"
          multiple
          :limit="3"
          :on-exceed="handleExceed"
          :file-list="form.ID_pics"
          v-model="form.ID_pics">
          <el-button size="small" type="primary">点击上传</el-button>
          <div slot="tip" class="el-upload__tip">身份证正面以及背面，只能上传jpg/png文件，且不超过5m</div>
        </el-upload>
      </el-form-item>
      <el-form-item>
        <el-button @click="onSubmit">提交审核</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
export default {
  data () {
    return {
      rules: {
        name: [{ required: true, message: '请输入商户名称' }],
        principal: [{ required: true, message: '请输入负责人姓名' }],
        license: [{ type: 'array', required: true, message: '务必添加营业执照', trigger: 'change' }],
        tel: [{ required: true, message: '请输入联系方式' }],
        address: [{ required: true, message: '请输入商铺地址' }],
        legal_name: [{ required: true, message: '请输入法人姓名' }],
        ID: [{ required: true, message: '请输入身份证号码' }],
        ID_pics: [{ type: 'array', required: true, message: '务必添加身份证正反照片', trigger: 'change' }]
      },
      form: {
        name: '', // 店铺名称
        principal: '', // 负责人
        tel: '', // 联系电话
        address: '', // 店铺地址
        license: [], // 营业执照
        legal_name: '', // 法人姓名
        ID: '', // 身份证号码
        ID_pics: [] // 身份证照片
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
    onSubmit () {
      this.$refs.form.validate((valid) => {
        if (valid) {
          alert('submit!')
        } else {
          // cosole.log('error submit!!')
          // cosole.log(this.form.ID_pics.length)
          return false
        }
      })
    }
  }
}
</script>

<style lang="stylus">
.main
  width 700px
  margin 0 auto
.el-input__inner
  border none
  border-radius 0
  border-bottom 2px solid #DCDFE6
</style>
