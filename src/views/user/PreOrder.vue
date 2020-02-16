<template>
  <div class="pre-order">
    <h4>商户信息</h4>
    <div class="top card">
      <div class="price">回收价格：{{ order.price }}&nbsp;¥</div>
      <div class="name">回收机构：{{ order.merchant.name }}</div>
    </div>
    <div class="tips">注意：当前显示价格为估计价格，具体价格以商家审核之后为准。</div>
    <h4>选择一种回收方式</h4>
    <div class="ways">
      <div
        @click="way = 0"
        v-if="order.merchant.cycle_ways.indexOf('上门取货') >= 0"
        :class="[{'selected': way === 0}, 'card']"
      >
        <div class="title">上门取货</div>
        <div class="details">
          <div>地址：</div>
          <div class="user-addr">{{ order.user_addr }}</div>
          <el-button type="text" @click="changeAddr">更改</el-button>
        </div>
      </div>
      <div
        @click="way = 1"
        v-if="order.merchant.cycle_ways.indexOf('自行邮寄') >= 0"
        :class="[{'selected': way === 1}, 'card']"
      >
        <div class="title">自行邮寄</div>
        <div class="details">
          <div>邮寄地址：</div>
          <div class="exp-addr">{{ order.merchant.expAddr }}</div>
          <el-button type="text" @click="copyAddr">复制</el-button>
        </div>
      </div>
      <div
        @click="way = 2"
        v-if="order.merchant.cycle_ways.indexOf('线下门店') >= 0"
        :class="[{'selected': way === 2}, 'card']"
      >
        <div class="title">线下门店</div>
        <div class="details">
          <div>门店地址：</div>
          <div class="store-addr">{{ order.merchant.address }}</div>
          <el-button type="text" @click="guide">导航</el-button>
        </div>
      </div>
    </div>
    <h4>收款方式</h4>
    <el-input placeholder="请输入收款账户" v-model="order.collection.account" class="input-with-select">
      <el-select v-model="order.collection.way" slot="prepend" placeholder="请选择">
        <el-option label="支付宝" value="支付宝"></el-option>
        <el-option label="微信" value="微信"></el-option>
      </el-select>
    </el-input>
    <el-button type="primary" class="confirm" :loading="loading" @click="confirm">确认订单</el-button>
    <div class="info">
      <strong>上门取货：</strong>由商户派人到你家里或者约定的地方取件，当场对手机进行检测并交易；
      <br />
      <strong>自行邮寄：</strong>如果商户距离较远，可以选择将物品邮寄给商家，待商家审核后给出最终价格，你若接受则完成交易，若不接受，机器原路返回，邮费双方自理。
      <br />
      <strong>线下门店：</strong>即到商户的线下地址当场进行交易。
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
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
      ],
      loading: false,
      order: {},
      way: 0, // 表示用户选择了哪一种回收方式
      ways: ['上门取货', '自行邮寄', '线下门店']
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
  },
  created () {
    this.order = {
      id: '201912191212138',
      status: 1,
      seller: {
        id: 12138,
        name: '黄玉川',
        avatar: 'http://src.xerrors.fun/blog/20191021/CcFV3DJYgi0B.jpg?imageslim'
      },
      collection: {
        way: '微信',
        account: '17681352667'
      },
      user_addr: '江苏省无锡市滨湖区江南大学', // 表示用户选择的地址
      merchant: {
        id: 10001,
        name: '爱回收',
        count: 1234,
        tel: '17687876756',
        address: '江苏省无锡市滨湖区星光广场13号',
        cycle_ways: ['上门取货', '自行邮寄', '线下门店'],
        expAddr: '江苏省无锡市滨湖区星光广场13号',
        logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSXn7pjhFRXpjBp55BxxRTnNPrtvTF_y3PbLCHGWsCVb6LRiMHH'
      },
      date: '2019-12-19 08:16:45',
      pay_date: '2020-01-02 09:29:29  ',
      way: this.ways[this.way],
      price: '2800',
      deal_price: '2780',
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
  }
}
</script>

<style lang="stylus" scoped>
.pre-order {
  width: 80%;
  min-width: 700px;
  max-width: 900px;
  margin: 0 auto;
}

.top {
  display: grid;
  grid-template-columns: 50% 50%;
}

.tips {
  font-size: small;
  color: #999;
}

.card {
  box-shadow: 0 1px 12px 1px rgba(0, 0, 0, 0.05);
  border-radius: 4px;
  margin: 1rem 0;
  padding: 1rem;
  border: 1px solid white
  cursor pointer
}

.title {
  font-size: 17px;
  font-weight: bold;
  margin-bottom: 10px;
}

.details {
  display: grid;
  grid-template-columns: 100px auto 80px;
  align-items: start;
}

.selected {
  border: 1px solid #47cf73;

  .title {
    color: #47cf73;
  }
}

.confirm {
  display: block;
  margin: 1rem auto;
}

.info {
  background: #f9f8f8;
  line-height: 1.7;
  border-radius: 4px;
  padding: 1rem;
  color: rgba(0, 0, 0, 0.58);
  margin-top: 8rem;
  letter-spacing: 1px;
}
</style>

<style lang="stylus">
.el-select .el-input {
  width: 100px;
}
</style>
