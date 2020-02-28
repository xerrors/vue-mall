<template>
  <div class="main">
    <h3 class="title">商户入驻</h3>
    <el-form
      ref="form"
      :model="form"
      :rules="rules"
      class="my_form">
      <el-form-item label="商户名称" prop='shop_name'>
        <el-input v-model="form.shop_name"></el-input>
      </el-form-item>
      <el-form-item label="商户负责人" prop='contact_person'>
        <el-input v-model="form.contact_person"></el-input>
      </el-form-item>
      <el-form-item label="联系电话" prop='tel'>
        <el-input v-model="form.tel" required></el-input>
      </el-form-item>
      <el-form-item label="密码" prop='passwd'>
        <el-input v-model="form.passwd" type="password" required></el-input>
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
      <el-form-item label="法人姓名" prop='juri_person'>
        <el-input v-model="form.juri_person"></el-input>
      </el-form-item>
      <el-form-item label="身份证号码" prop='juri_person_id'>
        <el-input v-model="form.juri_person_id"></el-input>
      </el-form-item>
      <el-form-item label="身份证照片" prop='ID_pics'>
        <el-upload
          action="http://122.51.229.4/CollegeInnovation/invokeAPI/index.php"
          :on-remove="handleRemove"
          :data='data'
          :headers="headers"
          :auto-upload="false"
          multiple
          :limit="3"
          :on-change="imgBroadcastChange"
          :on-success="imgSuccess"
          :on-exceed="handleExceed"
          :file-list="form.ID_pics">
          <el-button size="small" type="primary">选择文件</el-button>
          <div slot="tip" class="el-upload__tip">身份证正面以及背面，只能上传jpg/png文件，且不超过5m</div>
        </el-upload>
        <el-button size="small" type="primary" @click="startUpload">点击上传</el-button>
        <!-- <form enctype="multipart/form-data" action="http://122.51.229.4/CollegeInnovation/invokeAPI/index.php" method="get">
          <input type="hidden" name="serviceId" value="200006" />
          File<input name="imgs[]" type="file" multiple /><br>
          <input type="submit" value="Send File"/>
        </form> -->
      </el-form-item>
      <el-form-item>
        <el-button @click="onSubmit">提交审核</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
import { uploadPics } from '@/api/common'

export default {
  data () {
    return {
      data: {
        serviceId: '200006'
      },
      rules: {
        shop_name: [{ required: true, message: '请输入商户名称' }],
        contact_person: [{ required: true, message: '请输入负责人姓名' }],
        license: [{ type: 'array', required: true, message: '务必添加营业执照', trigger: 'change' }],
        tel: [{ required: true, message: '请输入联系方式' }],
        passwd: [
          { required: true, message: '请输入密码' },
          { min: 6, max: 16, message: '长度在 2 到 10 个字符', trigger: 'blur' }
        ],
        address: [{ required: true, message: '请输入商铺地址' }],
        juri_person: [{ required: true, message: '请输入法人姓名' }],
        juri_person_id: [{ required: true, message: '请输入身份证号码' }]
        // ID_pics: [{ type: 'array', required: true, message: '务必添加身份证正反照片', trigger: 'change' }]
      },
      form: {
        shop_name: '', // 店铺名称
        contact_person: '', // 负责人
        tel: '', // 联系电话
        passwd: '', // 密码
        address: '', // 店铺地址
        license: [], // 营业执照
        juri_person: '', // 法人姓名
        juri_person_id: '', // 身份证号码
        ID_pics: [] // 身份证照片
      }
    }
  },
  methods: {
    imgSuccess (res, file, fileList) {
      console.log(res)
      console.log(file)
      console.log(fileList) // 这里可以获得上传成功的相关信息
    },
    handleRemove (file, fileList) {
      // cosole.log(file, fileList)
    },
    handleExceed (files, fileList) {
      this.$message.warning(`当前限制选择 3 个文件，本次选择了 ${files.length} 个文件，共选择了 ${files.length + fileList.length} 个文件`)
    },
    imgBroadcastChange (file, fileList) {
      // debugger
      this.file = file.raw
      this.fileName = file.name
    },
    startUpload () {
      const formData = new FormData()
      formData.append('file', this.file)
      formData.append('serviceId', '200006')
      uploadPics(formData).then(res => {
        console.log(res)
      }).catch(err => {
        console.log(err)
      })
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
