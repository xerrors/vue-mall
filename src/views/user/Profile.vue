<template>
  <div class="profile">
    <el-tabs v-model="activeName" tab-position="left">
      <el-tab-pane label="个人信息" name="profile">
        <base-info :form="userInfo.baseForm"></base-info>
      </el-tab-pane>

      <el-tab-pane label="订单管理" name="orders">
        <order></order>
      </el-tab-pane>

      <el-tab-pane label="安全中心" name="security">
        <security></security>
      </el-tab-pane>

      <el-tab-pane label="地址管理" name="address">
        <addr-mng></addr-mng>
      </el-tab-pane>
    </el-tabs>
  </div>
</template>

<script>
import BaseInfo from '@/components/BaseInfo.vue'
import Order from '@/components/Order.vue'
import AddrMng from '@/components/AddrMng.vue'
import Security from '@/components/Security.vue'
import { getUserInfo } from '@/utils/fakedata.js'
export default {
  components: { BaseInfo, AddrMng, Order, Security },
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
  padding-top 3rem
  max-width 900px
  margin 0 auto
</style>

<style lang="stylus">
.el-tabs
  &__header.is-left
    margin-right 40px !important
  &__item
    font-weight bold
</style>
