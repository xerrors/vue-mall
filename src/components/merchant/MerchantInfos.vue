<template>
  <div class="merchant-infos">
    <el-form :model="form" ref="form" label-width="110px" label-position='right' :rules="rules">
      <el-form-item label="头像：">
        <el-upload
          class="avatar-uploader"
          action=""
          :http-request="upLoad"
          :show-file-list="false"
          :on-success="handleAvatarSuccess"
          :before-upload="beforeAvatarUpload">
          <img v-if="imageUrl" :src="imageUrl" class="avatar">
          <i v-else class="el-icon-plus avatar-uploader-icon"></i>
        </el-upload>
      </el-form-item>
      <el-form-item label="商户负责人：" prop='contact_person'>
        <el-input v-model="form.contact_person"></el-input>
      </el-form-item>
      <el-form-item label="联系电话：" prop='tel'>
        <el-input v-model="form.tel" required></el-input>
      </el-form-item>
      <el-form-item label="支付方式：" prop='pay_way'>
        <el-input v-model="form.pay_way" required></el-input>
      </el-form-item>
      <el-form-item>
        <el-button @click="submitForm">提交审核</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
import { changeMerchantInfo } from '@/api/merchant'
import { getInfo } from '@/api/user'
import { uploadPics, getPics, delPics } from '@/api/common'
export default {
  data () {
    return {
      imageUrl: '',
      avatar: {
        pid: '',
        url: ''
      },
      form: {
        contact_person: '',
        tel: '',
        pay_way: ''
      },
      rules: {
        contact_person: [{ required: true, message: '请输入负责人姓名' }],
        tel: [{ required: true, message: '请输入联系方式' }],
        pay_way: [{ required: true, message: '请输入支付方式' }]
      }
    }
  },
  methods: {
    upLoad (file) {
      if (this.avatar) {
        this.deleteAvatar()
      }
      const formData = new FormData()
      formData.append('imgs[]', file.file)
      formData.append('imgs[]', file.file)
      formData.append('serviceId', '200006')
      formData.append('type', '2')
      return new Promise((resolve, reject) => {
        uploadPics(formData).then(() => {
          this.getInfosFromServer()
          resolve()
        }).catch(err => {
          reject(err)
        })
      })
    },
    handleAvatarSuccess (res, file) {
      this.imageUrl = this.avatar.url
    },
    beforeAvatarUpload (file) {
      const isJPG = file.type === 'image/jpeg'
      const isLt2M = file.size / 1024 / 1024 < 2

      if (!isJPG) {
        this.$message.error('上传头像图片只能是 JPG 格式!')
      }
      if (!isLt2M) {
        this.$message.error('上传头像图片大小不能超过 2MB!')
      }
      return isJPG && isLt2M
    },
    getAvatarFromServer () {
      return new Promise((resolve, reject) => {
        getPics('3').then(res => {
          this.avatar = res.info[0]
          this.imageUrl = this.avatar.url
          resolve()
        }).catch(err => {
          reject(err)
        })
      })
    },
    getInfosFromServer () {
      this.getAvatarFromServer()
      return new Promise((resolve, reject) => {
        getInfo().then(res => {
          this.form.contact_person = res.info.contact_person
          this.form.tel = res.info.tel
          this.form.pay_way = res.info.pay_way
          resolve()
        }).catch(err => {
          reject(err)
        })
      })
    },
    deleteAvatar () {
      return new Promise((resolve, reject) => {
        delPics(this.avatar.pid).then(() => {
          resolve()
        }).catch(err => {
          reject(err)
        })
      })
    },
    submitForm () {
      return new Promise((resolve, reject) => {
        changeMerchantInfo(this.form).then(() => {
          this.getInfosFromServer()
          resolve()
        }).catch(err => {
          reject(err)
        })
      })
    }
  },
  mounted () {
    this.getInfosFromServer()
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
