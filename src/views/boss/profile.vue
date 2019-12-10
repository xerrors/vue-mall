<template>
  <div class="profile">
    <el-tabs  v-model="activeName" tab-position="left">

    <el-tab-pane label="账户信息" name="profile">
      <base-info :form='userInfo.userForm'></base-info>
    </el-tab-pane>

    <el-tab-pane label="已估价商品" name="published">
      已估价商品
    </el-tab-pane>

    <el-tab-pane label="订单管理" name="orders">
      订单管理
    </el-tab-pane>

    <el-tab-pane label="地址管理" name="address">
      <addr-mng :serverEndAddrs="userInfo.addresses"></addr-mng>
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
      activeName: 'profile',
      userInfo: getUserInfo(this.$store.state.token)
    }
  }
}
</script>

<style lang="stylus" scoped>
.profile
  padding-top 5rem
</style>
