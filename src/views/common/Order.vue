<template>
  <div class='main'>
    <h4>状态信息</h4>
    <div class="head card">
      <img v-if="isUser" :src="order.merchant.logo" alt="头像"/>
      <img v-else :src="order.seller.avatar" alt="头像"/>
      <div>
        <el-link style="font-size: 16px; font-weight: bold;" @click='lookup'>
          <span v-if="isUser">{{ order.merchant.name }}</span>
          <span v-else>{{ order.seller.name }}</span>
        </el-link>
      </div>
      <span style="margin-left: auto;">{{ status[order.status] }}</span>
    </div>
    <h4>交易信息</h4>
    <div class="info card">
      <span><strong>下单时间：</strong>{{ order.date }}</span>
      <span><strong>订单编号：</strong>{{ order.id }}</span>
      <span v-if="order.status >= 7"><strong>交易时间：</strong>{{ order.pay_date }}</span>
      <span><strong>交易方式：</strong>{{ order.way }}</span>
      <span><strong>收款方式：</strong>{{ order.collection.way }}</span>
      <span><strong>收款账户：</strong>{{ order.collection.account }}</span>
      <span v-if="order.way === '自行邮寄' && order.status >= 3"><strong>快递单号：</strong>{{ order.expressID }}</span>
      <span><strong>预估价格：</strong>{{ order.price }}</span>
      <span v-if="order.status >= 6"><strong>交易价格：</strong>{{ order.deal_price }}</span>
      <span><strong>地址信息：</strong>{{ order.addr }}</span>
    </div>
    <h4>商品信息</h4>
    <div class="details card">
      <div class="pic">
        <img :src='order.item.main_pic' alt='商品主图'/>
      </div>
      <div class="right">
        <h3 @click="toProduct(order.item.id)">{{ order.item.model }}</h3>
        <span v-for="(tag, ind) in order.item.tag" :key='ind'>{{ tag }}</span>
      </div>
    </div>
    <div class="action" v-if="isUser">
      <el-button @click="cancelOreder" v-if="order.status !== 0 && order.status !== 8">取消订单</el-button>
      <el-button @click="deleteOrder" v-if="order.status === 0 || order.status === 8">删除订单</el-button>
      <el-button @click="haveSentted" v-else-if="order.status === 2 && order.way === '自行邮寄'">我已发货</el-button>
      <el-button @click="acceptPrice" v-else-if="order.status === 5">接受此价格</el-button>
      <el-button @click="confirmCloseDeal" v-else-if="order.status === 7">确认完成交易</el-button>
    </div>
    <div class="action" v-else>
      <el-button @click="cancelOreder" v-if="order.status !== 0 && order.status !== 8">取消订单</el-button>
      <el-button @click="deleteOrder" v-if="order.status === 0 || order.status === 8">删除订单</el-button>
      <!-- 第一步确认是否接单 -->
      <el-button @click="confirmAcceptOrder" v-else-if="order.status === 1">确认接单</el-button>
      <!-- 第二步确认是否是线下交易 -->
      <div v-else-if="order.way !== '自行邮寄'" style="display: inline-block">
        <el-button @click="havePaidOffline" v-if="order.status < 7">已线下支付</el-button>
      </div>
      <div v-else style="display: inline-block">
        <el-button @click="giveFinalPrice" v-if="order.status < 5 && order.status >= 3">给出最终价格</el-button>
        <el-button @click="havePaidOnline" v-else-if="order.status === 6">已经支付完成</el-button>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  data () {
    return {
      loading: true,
      status: [
        '已取消',
        '等待接单', // （商家接单进入下一状态）
        '等待发货', // （用户发货进入下一状态）
        '运输中', // （用户发货进入下一状态）
        '检验中', // （商家给出最终价格进入下一状态）
        '核价中', // （用户接受此价格）
        '等待支付', // （商户支付钱款）
        '等待用户确认',
        '交易完成'
      ]
    }
  },
  computed: {
    ...mapGetters(['role']),
    isUser () {
      return this.role === 'user'
    },
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
        status: '1',
        seller: {
          id: 12138,
          name: '黄玉川',
          avatar: 'http://src.xerrors.fun/blog/20191021/CcFV3DJYgi0B.jpg?imageslim'
        },
        collection: {
          way: '微信',
          account: '17685673489'
        },
        addr: '江苏省无锡市滨湖区江南大学', // 表示用户选择的地址
        merchant: {
          id: 10001,
          name: '爱回收',
          count: 1234,
          tel: '17687876756',
          address: '江苏省无锡市滨湖区星光广场13号',
          cycle_ways: ['上门取货', '线下门店'],
          expAddr: '江苏省无锡市滨湖区星光广场13号',
          logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSXn7pjhFRXpjBp55BxxRTnNPrtvTF_y3PbLCHGWsCVb6LRiMHH'
        },
        date: '2019-12-19 08:16:45',
        pay_date: '2020-01-02 09:29:29  ',
        way: '上门取货',
        price: '2800',
        deal_price: '2780',
        expressID: '',
        item: {
          id: '1231312',
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
      if (this.role === 'user') {
        this.$router.push('/merchants/' + this.order.merchant.id)
      } else {
        this.$router.push('/user/' + this.order.seller.id)
      }
    },
    toProduct (id) {
      this.$router.push('/product/' + id)
    },
    contact () {
      // cosole.log(this.order.merchant.tel)
    },
    deleteOrder () {
      // * 删除订单，但是需要向服务器传送身份
      this.$confirm('此操作将永久删除该订单, 是否继续?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {
        this.$message('删除订单，开发中，敬请期待！')
      }).catch(() => {
        this.$message({
          type: 'info',
          message: '已取消删除'
        })
      })
    },
    haveSentted () {
      this.$prompt('请输入订单单号', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消'
      }).then(({ value }) => {
        this.order.status = 3 // *状态变更为运输中
        // TODO：服务器部分
        this.$message('提交成功' + value)
        this.order.expressID = value
      }).catch(() => {
        this.$message({
          type: 'info',
          message: '取消输入'
        })
      })
    },
    acceptPrice () {
      this.order.status = 6 // *状态变更为等待商户完成支付
      this.$message('等待商户完成支付')
    },
    confirmCloseDeal () {
      this.order.status = 8 // *状态变更为交易完成
      this.$message('交易完成')
    },
    confirmAcceptOrder () {
      this.order.status = 2 // *状态变更为等待发货
      this.$message('等待发货')
    },
    havePaidOffline () {
      this.order.status = 7 // *状态变更为等待用户确认
      this.$message('等待用户确认')
    },
    giveFinalPrice () {
      this.order.status = 5 // *状态变更为等待用户确认价格
      this.$message('等待用户确认价格')
    },
    havePaidOnline () {
      this.order.status = 7 // *状态变更为等待用户确认交易
      this.$message('等待用户确认价格')
    },
    cancelOreder  () {
      this.order.status = 0 // *状态变更为等待商户完成支付
      this.$message('本次交易已经关闭')
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
        cursor pointer
        &:hover
          color black
        &:active
          opacity 0.7
      >span
        display inline-block
        padding .3rem .5rem
        border-radius 3px
        background #f1f1f1
        font-size small
        margin-right 1rem
  .action
    .el-button
      margin: 1rem
      &:first-child
        margin-left: 0
</style>
