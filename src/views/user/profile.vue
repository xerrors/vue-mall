<template>
  <div class="profile">
    <el-tabs  v-model="activeName" tab-position="left">
      <el-tab-pane label="个人信息" name="profile">
        <base-info :form="userForm"></base-info>
      </el-tab-pane>

      <el-tab-pane label="已发布产品" name="published">
        已发布产品
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
      return {
        id: 122121,
        name: '黄玉川',
        avatar: 'http://src.xerrors.fun/blog/20191021/CcFV3DJYgi0B.jpg?imageslim',
        phone: '17681352667',
        sex: 'male'
      }
    },
    serverEndAddrs () {
      return [{
        receiver: '黄玉川',
        area: [
          { 320000: '江苏省' },
          { 320200: '无锡市' },
          { 320211: '滨湖区' }
        ],
        address: '蠡湖大道1800号江南大学',
        code: '214122',
        phone: '17681352667',
        default: true
      }, {
        receiver: '黄玉川',
        area: [
          { 340000: '安徽省' },
          { 341600: '亳州市' },
          { 341623: '利辛县' }
        ],
        address: '利辛县第一中学',
        code: '246700',
        phone: '17681352667',
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
