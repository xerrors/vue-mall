<template>
  <div class="merchant-infos">
    <el-form :model="form" ref="form" label-width="110px" label-position='right' :rules="rules">
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
import { getInfo } from '@/api/user'
export default {
  data () {
    return {
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
    getInfosFromServer () {
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
    submitForm () {

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
