<template>
  <div class="main-comp">
    <el-tabs v-model="activeName" type="card">
      <!--未完成订单-->
      <el-tab-pane label="未完成订单" name="unfinished">
        <div class="order-card" v-for="order in unfinished_orders" :key="order.id">
          <div class="order-card__title">
            <span>创建日期：{{ order.date }}</span>
            <span style="margin-left: 2rem">订单号：{{ order.id }}</span>
          </div>

          <div class="order-card__body">
            <!-- 商品照片 -->
            没想好最终设计，暂时空着
          </div>
          <div class="order-card__foot">
            <span @click="lookup(order.id)">查看订单</span>
          </div>
        </div>
      </el-tab-pane>
      <!--已完成订单-->
      <el-tab-pane label="已完成订单" name="finished">
        <div class="order-card" v-for="order in finished_orders" :key="order.id">
          <div class="order-card__title">
            <span>创建日期：{{ order.date }}</span>
            <span style="margin-left: 2rem">订单号：{{ order.id }}</span>
          </div>

          <div class="order-card__body">
            没想好最终设计，暂时空着
          </div>
          <div class="order-card__foot">
            <span @click="lookup(order.id)">查看订单</span>
          </div>
        </div>
      </el-tab-pane>
    </el-tabs>
  </div>
</template>

<script>
export default {
  data () {
    return {
      activeName: 'unfinished',
      orders: []
    }
  },
  computed: {
    unfinished_orders () {
      return this.orders.filter(order => order.status !== '已完成')
    },
    finished_orders () {
      return this.orders.filter(order => order.status === '已完成')
    }
  },
  methods: {
    getOrders () {
      // 这里先写一下大致的思路，首先是根据session向服务器去获取订单信息
      this.orders = [
        {
          id: '201912191212138',
          status: '已完成',
          merchant: {
            id: '10001',
            name: '爱回收'
          },
          date: '2019-12-19 08:16:45',
          method: '上门取货',
          pay_way: '支付宝',
          model: '华为 Mate30 Pro 5G',
          price: 2800
        }, {
          id: '201912191212108',
          status: '检验中',
          merchant: {
            id: '10001',
            name: '爱回收'
          },
          date: '2020-2-19 08:26:45',
          method: '上门取货',
          pay_way: '微信',
          model: '华为 Mate20 X 5G',
          price: 1800
        }
      ]
    },
    lookup (id) {
      // cosole.log(id)
      this.$router.push('/order/' + id)
    }
  },
  mounted () {
    this.getOrders()
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
    >div
      padding 0 1rem
    &__title
      height 2.5rem
      line-height 2.5rem
      color text-color-primary
      border-radius 3px 3px 0 0
      background #f5f7fa
    &__body
      height 4rem
      display flex
      align-items space-between
      *
        height 100%
    &__foot
      height 2rem
      >span
        cursor pointer
        float right
        font-size 14px
        color text-color-primary
        &:hover
          color color-primary

</style>
