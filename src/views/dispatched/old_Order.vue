<template>
  <div class="order-container">
    <div class="error" v-if="!order"
      style="margin-top: 100px; text-align: center; font-weight: 700;"
      >
      当前不存在创建中的订单，将在 {{ timer }} 秒钟后返回上一页
    </div>
    <div class="main" v-else>
      <div class="card">
        <div class="card__line" style="display: flex;">
          <p class="item" style="flex-grow: 1;">商品名称:</p>
          <p class="detail" style="flex-grow: 1; text-align: right;">{{ order.product.model.label }}</p>
        </div>
        <div class="card__line" style="display: flex;">
          <p class="item" style="flex-grow: 1;">发起方:</p>
          <p class="detail" style="flex-grow: 1; text-align: right;">{{ order.seller.name }}</p>
        </div>
        <div class="card__line" style="display: flex;">
          <p class="item" style="flex-grow: 1;">购买方:</p>
          <p class="detail" style="flex-grow: 1; text-align: right;">{{ order.buyer.name }}</p>
        </div>
        <div class="card__line" style="display: flex;">
          <p class="item" style="flex-grow: 1;">交易金额:</p>
          <p class="detail" style="flex-grow: 1; text-align: right;">￥{{ order.buyer.value }}.00</p>
        </div>
      </div>
      <div class="btn-group" style="text-align: center">
        <el-button class="confirm-btn" type="primary" @click="order_deal">钱多成交</el-button>
        <el-button class="return-btn" type="plain" @click="cancel">钱少不干</el-button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      timer: 5,
      order: this.$store.state.currentOrder
    }
  },
  mounted () {
    if (!this.$store.state.currentOrder) {
      this.rtn_home()
    }
    // console.log(this.$store.state.currentOrder)
  },
  methods: {
    order_deal () {
      this.$alert('交易成功', {
        confirmButtonText: '确定',
        callback: action => {
          this.$router.push('/' + this.$store.state.role + '/main')
        }
      })
    },
    cancel () {
      // cosole.log(this.$router)
      this.$router.go(-1)
    },
    rtn_home () {
      var intervalid = setInterval(() => {
        this.timer--
        if (this.timer === 0) {
          clearInterval(intervalid)
          this.$router.go(-1)
        }
      }, 1000)
    }
  }
}
</script>

<style lang="stylus" scoped>
.card
  width 35rem
  margin 50px auto
  padding 2rem 2rem
  border .8em solid transparent

  background:
    linear-gradient(white,white),
    repeating-linear-gradient(-45deg, #ff6936 0, #ff6936 12.5%, transparent 0, transparent 25%,#58a 0,#58a 37.5%,transparent 0,transparent 50%);
  background-clip: padding-box,border-box;
  background-size: 8em 8em;

.confirm-btn
  margin 2rem
</style>
