<template>
  <div class="profile">
    <el-tabs  v-model="activeName" tab-position="left">

    <el-tab-pane label="个人信息" name="profile">
      个人信息
    </el-tab-pane>

    <el-tab-pane label="已发布产品" name="published">
      已发布产品
    </el-tab-pane>

    <el-tab-pane label="订单管理" name="orders">
      订单管理
    </el-tab-pane>

    <el-tab-pane label="地址管理" name="address">
      地址管理
    </el-tab-pane>
  </el-tabs>
  </div>
</template>

<script>
export default {
  data () {
    return {
      activeName: 'profile'
    }
  }
}
</script>

<style lang="stylus" scoped>
.profile
  padding-top 5rem
</style>
