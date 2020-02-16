<template>
  <div class="base-info">
    <el-form :model="form" ref="form" label-width="100px" label-position='right'>
      <el-form-item label="头像：" prop="avatar" required>
        <el-avatar v-if="form.avatar" :src="form.avatar"></el-avatar>
      </el-form-item>
      <el-form-item label="用户名：" prop="account" required>
        <el-input v-model="form.account"></el-input>
      </el-form-item>
      <el-form-item label="支付方式：" prop="collection" required>
        <el-input placeholder="请输入收款账户" v-model="form.collection.account" class="input-with-select">
          <el-select style="width: 80px;" v-model="form.collection.way" slot="append" placeholder="请选择">
            <el-option label="支付宝" value="支付宝"></el-option>
            <el-option label="微信" value="微信"></el-option>
          </el-select>
        </el-input>
      </el-form-item>
      <el-form-item label="手机号码：" prop="phone" required>
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
  // props: [ 'form' ],
  data () {
    return {
      form: {
        avatar: 'http://src.xerrors.fun/blog/20191021/CcFV3DJYgi0B.jpg',
        account: '黄玉川',
        collection: {
          way: '支付宝',
          account: '17681352667'
        },
        tel: '17291889086'
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
    submitForm () {
      this.$message({ message: '修改成功！', type: 'success' })
      // todo 向服务器发送请求啊
    }
  }
}
</script>

<style lang="stylus">
.el-input-group__append, .el-input-group__prepend
  width 80px
  background white
  border none
.base-info .el-input
  &__inner
    border none
    border-bottom 2px solid white
    border-radius 0
    padding 0
    &:focus
      border-color mainColor
</style>
