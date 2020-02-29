<template>
  <div class="merchant-profile">
    <el-tabs v-model="activeName" tab-position="left">
      <el-tab-pane label="个人信息" name="profile">
        <merchant-infos></merchant-infos>
      </el-tab-pane>

      <el-tab-pane label="安全中心" name="security">
        <security></security>
      </el-tab-pane>

      <el-tab-pane label="收货地址" name="address">
        <addr-mng></addr-mng>
      </el-tab-pane>
    </el-tabs>
  </div>
</template>

<script>
import MerchantInfos from '@/components/merchant/MerchantInfos.vue'
import AddrMng from '@/components/AddrMng.vue'
import Security from '@/components/Security.vue'
export default {
  components: { MerchantInfos, AddrMng, Security },
  data () {
    return {
      activeName: 'profile'
    }
  }
}
</script>

<style lang="stylus" scoped>
.merchant-profile
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
