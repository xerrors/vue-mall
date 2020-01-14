<template>
  <div class="profile">
    <el-tabs  v-model="activeName" tab-position="left">
      <el-tab-pane label="个人信息" name="profile">
        <base-info :form="userInfo.baseForm"></base-info>
      </el-tab-pane>

      <el-tab-pane label="已发布产品" name="published">
        已发布产品
      </el-tab-pane>

      <el-tab-pane label="订单管理" name="orders">
        订单管理
      </el-tab-pane>

      <el-tab-pane label="地址管理" name="address">
        <addr-mng></addr-mng>
      </el-tab-pane>
    </el-tabs>
  </div>
</template>

<script>
import BaseInfo from '@/components/BaseInfo.vue'
import AddrMng from '@/components/AddrMng.vue'
import { getUserInfo } from '@/utils/fakedata.js'
export default {
  components: { BaseInfo, AddrMng },
  data () {
    return {
      localAddr: JSON.parse(localStorage.addresses),
      activeName: 'profile',
      userInfo: getUserInfo(this.$store.state.token)
    }
  },
  mounted () {
    if (localStorage.addresses) {
      this.localAddr = JSON.parse(localStorage.addresses)
    }
  }
}
</script>

<style lang="stylus" scoped>
.profile
  padding-top 5rem
  max-width 900px
  margin 0 auto
</style>
