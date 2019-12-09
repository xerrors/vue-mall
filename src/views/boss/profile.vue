<template>
  <div class="profile">
    <el-tabs  v-model="activeName" tab-position="left">

    <el-tab-pane label="账户信息" name="profile">
      <base-info :form='userForm'></base-info>
    </el-tab-pane>

    <el-tab-pane label="已估价商品" name="published">
      已估价商品
    </el-tab-pane>

    <el-tab-pane label="订单管理" name="orders">
      订单管理
    </el-tab-pane>

    <el-tab-pane label="地址管理" name="address">
      <addr-mng :serverEndAddrs="serverEndAddrs"></addr-mng>
    </el-tab-pane>
  </el-tabs>
  </div>
</template>

<script>
import BaseInfo from '@/components/BaseInfo.vue'
import AddrMng from '@/components/AddrMng.vue'
export default {
  components: { BaseInfo, AddrMng },
  data () {
    return {
      activeName: 'profile'
    }
  },
  computed: {
    userForm () {
      // 向服务器获取信息
      return {
        id: 12121,
        name: '蔡徐坤',
        avatar: 'http://src.xerrors.fun/blog/20191021/wFNCwcPTBkwa.jpg?imageslim',
        phone: '15251630520',
        sex: 'male'
      }
    },
    serverEndAddrs () {
      return [{
        receiver: '蔡徐坤',
        area: [
          { 320000: '江苏省' },
          { 320200: '无锡市' },
          { 320211: '滨湖区' }
        ],
        address: '蠡湖大道1800号江南大学',
        code: '214122',
        phone: '15251630520',
        default: true
      }, {
        receiver: '蔡徐坤',
        area: [
          { 340000: '安徽省' },
          { 341600: '亳州市' },
          { 341623: '利辛县' }
        ],
        address: '利辛县第一中学',
        code: '246700',
        phone: '15251630520',
        default: false
      }]
    }
  }
}
</script>

<style lang="stylus" scoped>
.profile
  padding-top 5rem
</style>
