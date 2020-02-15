<template>
  <div class="pre-order">
    <h4>商户信息</h4>
    <div class="top card">
      <div class="price">回收价格：{{ price }}&nbsp;¥</div>
      <div class="name">回收机构：{{ merchant.name }}</div>
    </div>
    <div class="tips">
      注意：当前显示价格为估计价格，具体价格以商家审核之后为准。
    </div>
    <h4>选择一种回收方式</h4>
    <div class="ways">
      <div
          @click="way = 0"
          v-if="merchant.cycle_ways.indexOf('上门取件') >= 0"
          :class="[{'selected': way === 0}, 'card']">
        <div class="title">
          上门取件
        </div>
        <div class="details">
          <div>地址：</div>
          <div class="user-addr">{{ addrs[addr] }}</div>
          <el-button type="text" @click="changeAddr">更改</el-button>
        </div>
      </div>
      <div
          @click="way = 1"
          v-if="merchant.cycle_ways.indexOf('自行邮寄') >= 0"
          :class="[{'selected': way === 1}, 'card']">
        <div class="title">
          自行邮寄
        </div>
        <div class="details">
          <div>邮寄地址：</div>
          <div class="exp-addr">
            {{ merchant.expAddr }}
          </div>
          <el-button type="text" @click="copyAddr">复制</el-button>
        </div>
      </div>
      <div
          @click="way = 2"
          v-if="merchant.cycle_ways.indexOf('线下门店') >= 0"
          :class="[{'selected': way === 2}, 'card']">
        <div class="title">
          线下门店
        </div>
        <div class="details">
          <div>门店地址：</div>
          <div class="store-addr">
            {{ merchant.address }}
          </div>
          <el-button type="text" @click="guide">导航</el-button>
        </div>
      </div>
    </div>
    <h4>收款方式</h4>
    <el-input placeholder="请输入收款账户" v-model="collection.account" class="input-with-select">
      <el-select v-model="collection.way" slot="prepend" placeholder="请选择">
        <el-option label="支付宝" value="1"></el-option>
        <el-option label="微信" value="2"></el-option>
      </el-select>
    </el-input>
    <el-button type="primary" class="confirm" :loading="loading" @click="confirm">确认订单</el-button>
    <div class="info">
      <strong>上门取件：</strong>由商户派人到你家里或者约定的地方取件，当场对手机进行检测并交易；<br>
      <strong>自行邮寄：</strong>如果商户距离较远，可以选择将物品邮寄给商家，待商家审核后给出最终价格，你若接受则完成交易，若不接受，机器原路返回，邮费双方自理。<br>
      <strong>线下门店：</strong>即到商户的线下地址当场进行交易。
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      loading: false,
      collection: {
        way: '1',
        account: '17681352667'
      },
      way: 0,
      ways: ['上门取件', '自行邮寄', '线下门店'],
      addr: 0,
      addrs: ['地址1', '地址2', '地址3'],
      price: '1987',
      merchant: {
        id: 10001,
        name: '爱回收',
        count: 1234,
        address: '门店地址',
        cycle_ways: ['上门取件', '线下门店'],
        expAddr: '收货地址'
      }
    }
  },
  methods: {
    changeAddr () {
      this.$message('更改地址，待开发')
    },
    copyAddr () {
      this.$message('复制地址，待开发')
    },
    guide () {
      this.$message('导航API，待开发')
    },
    confirm () {
      this.loading = true
      this.$message('确认订单')
      // 发送到服务器返回一个订单的id，然后进入下一个页面，此时应该有 loading
      const id = '20210231238102981'
      setTimeout(() => {
        this.loading = false
        this.$router.push('/order/' + id)
      }, 1000)
    }
  }
}
</script>

<style lang="stylus" scoped>
.pre-order
  width 80%
  min-width 700px
  max-width 900px
  margin 0 auto
.top
  display grid
  grid-template-columns 50% 50%
.tips
  font-size small
  color #999
.card
  box-shadow 0 1px 12px 1px rgba(0,0,0,.05)
  border-radius 4px
  margin 1rem 0
  padding 1rem
.title
  font-size 17px
  font-weight bold
  margin-bottom 10px
.details
  display grid
  grid-template-columns 100px auto 80px
  align-items start
.selected
  border 1px solid #47cf73
  .title
    color #47cf73
.confirm
  display block
  margin 1rem auto
.info
  background: #f9f8f8;
  line-height: 1.7;
  border-radius: 4px;
  padding: 1rem;
  color: rgba(0, 0, 0, 0.58);
  margin-top: 8rem;
  letter-spacing: 1px;
</style>

<style lang="stylus">
.el-select .el-input
  width 100px
</style>
