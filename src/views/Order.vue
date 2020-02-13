<template>
  <div class='main'>
    <h4>状态信息</h4>
    <div class="head card">
      <img :src="order.merchant.logo" alt="头像"/>
      <div>
        <el-link style="font-size: 16px; font-weight: bold;" @click='lookup'>
          {{ order.merchant.name }}
        </el-link>
      </div>
      <span style="margin-left: auto;">{{ order.status }}</span>
    </div>
    <h4>交易信息</h4>
    <div class="info card">
      <span><strong>下单时间：</strong>{{ order.date }}</span>
      <span><strong>订单编号：</strong>{{ order.id }}</span>
      <span><strong>交易时间：</strong>{{ order.pay_date }}</span>
      <span><strong>交易方式：</strong>{{ order.method }}</span>
      <span><strong>收款方式：</strong>{{ order.pay_way }}</span>
      <span><strong>收款账户：</strong>{{ order.pay_account }}</span>
    </div>
    <h4>商品信息</h4>
    <div class="details card">
      <div class="pic">
        <img :src='order.item.main_pic' alt='商品主图'/>
      </div>
      <div class="right">
        <h3>{{ order.item.model }}</h3>
        <span v-for="(tag, ind) in order.item.tag" :key='ind'>{{ tag }}</span>
      </div>
    </div>
    <div class="bot">
      <el-button plain type="primary" @click="contact">联系商家</el-button>
      <el-button plain type="danger" @click="delete_order">删除订单</el-button>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      loading: true
    }
  },
  computed: {
    order () {
      return this.getOrderInfo(this.$route.params.id)
    }
  },
  methods: {
    getOrderInfo (id) {
      // cosole.log(id)
      this.loading = false
      // 这里其实应该是使用id向服务器去获取订单信息
      return {
        id: '201912191212138',
        status: '等待商家接单',
        merchant: {
          id: '10001',
          name: '爱回收',
          tel: '17687876756',
          logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSXn7pjhFRXpjBp55BxxRTnNPrtvTF_y3PbLCHGWsCVb6LRiMHH'
        },
        date: '2019-12-19 08:16:45',
        pay_date: '交易中',
        method: '上门取货',
        pay_way: '支付宝',
        pay_account: '17681352667',
        price: '2800',
        item: {
          main_pic: 'https://o.aolcdn.com/images/dims?resize=2000%2C2000%2Cshrink&image_uri=https%3A%2F%2Fs.yimg.com%2Fos%2Fcreatr-uploaded-images%2F2019-09%2Fa06641f0-e037-11e9-bdcd-a1f9f86313bf&client=a1acac3e1b3290917d92&signature=84837be6dc3b91d0a748fc8808f86dd8c667841a',
          model: '华为 Mate30 Pro 5G',
          tag: [
            '全新未开封',
            '256G',
            '完美使用无刮痕',
            '账户可正常退出'
          ]
        }
      }
    },
    lookup () {
      this.$router.push('/merchant/' + this.order.merchant.id)
    },
    contact () {
      // cosole.log(this.order.merchant.tel)
    },
    delete_order () {
      this.$confirm('此操作将永久删除该订单, 是否继续?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {
        this.$message({
          type: 'success',
          message: '删除成功!'
        })
      }).catch(() => {
        this.$message({
          type: 'info',
          message: '已取消删除'
        })
      })
    }
  }
}
</script>

<style lang="stylus" scoped>
.main
  max-width 900px
  margin 0 auto
  background white
  padding 1rem 1rem
  >div
    margin .7rem 0
  .head
    align-items center
    img
      height 40px
      border-radius 50%
      margin-right 15px
  .card
    padding 1rem 2rem
    border-radius 6px
    box-shadow rgba(0, 0, 0, 0.05) 0px 1px 10px 1px
    display flex
  .info
    flex-flow row wrap
    >span
      width 48%
      margin .5rem 0
  .details
    .pic
      margin-right 1rem
      img
        width 200px
        border-radius 3px
    .right
      align-self flex-start
      h3
        margin-top 0
      >span
        display inline-block
        padding .3rem .5rem
        border-radius 3px
        background #f1f1f1
        font-size small
        margin-right 1rem
</style>
