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
      <addr-mng></addr-mng>
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
    }
  }
}
</script>

<style lang="stylus" scoped>
.profile
  padding-top 5rem
</style>
