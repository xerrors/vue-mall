<template>
  <div class="main-comp">
    <el-tabs v-model="activeName" type="card" @tab-click="handleClick">
      <!--未完成订单-->
      <el-tab-pane label="未完成订单" name="unfinished">
        <div class="order-card">
          <div class="order-card__title">
            <span>创建日期：2019-08-09</span>
            <span style="margin-left: 2rem">订单号：20190809897875</span>
          </div>

          <div class="order-card__body">
            <!-- 商品照片 -->
            <div class="item1">a</div>
            <div class="item2">a</div>
            <div class="item1">a</div>
            <div class="item1">a</div>
            <div class="item1">a</div>
            <div class="item1">a</div>
          </div>
        </div>
      </el-tab-pane>

      <!--已完成订单-->
      <el-tab-pane label="已完成订单" name="finished">已完成订单</el-tab-pane>
    </el-tabs>
  </div>
</template>

<script>
export default {
  data () {
    return {
      activeName: 'unfinished'
    }
  }
}
</script>

<style lang="stylus" scoped>
.main-comp
  margin-left 10px
  .order-card
    height 9rem
    border-radius 3px
    border 1px solid rgba(34,36,38,0.15)
    margin .5rem 0
    &__title
      padding 0 1rem
      height 2rem
      line-height 2rem
      border-radius 3px 3px 0 0
      background #f5f7fa
      font-size small
    &__body
      padding 0 1rem
      height 7rem
      display flex
      align-items space-between
      *
        height 100%
</style>
