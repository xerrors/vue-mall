<template>
  <div class="orders">
    <div class="order-card">
      <div class="item" @click="filter=[0, 7]">
        <img src="/svg/all.svg" class="svg" />
        <div class="title">全部订单</div>
        <div class="text">1290</div>
      </div>
      <div class="item" @click="filter=[1, 2]">
        <img src="/svg/waiting.svg" class="svg" />
        <div class="title">等待接单</div>
        <div class="text">29</div>
      </div>
      <div class="item" @click="filter=[2, 5]">
        <img src="/svg/check.svg" class="svg" />
        <div class="title">等待审核</div>
        <div class="text">10</div>
      </div>
      <div class="item" @click="filter=[5, 7]">
        <img src="/svg/pay.svg" class="svg" />
        <div class="title">等待付款</div>
        <div class="text">18</div>
      </div>
      <div class="item" @click="filter=[0, 1]">
        <img src="/svg/cancel.svg" class="svg" />
        <div class="title">已取消</div>
        <div class="text">4</div>
      </div>
    </div>
    <div class="my-order" v-for="order in orders" :key="order.id" @click="lookupOrder(order.id)">
      <div class="price">{{ order.deal_price }} ¥</div>
      <div class="status">{{ status[order.status] }}</div>
      <div class="right">
        <div style="padding: 1rem">
          <span>{{ order.model }}</span>
          <span style="float: right;">
            <i class="el-icon-star-on" v-for="_ in order.evaluation" :key="_"></i>
          </span>
        </div>
        <div class="tags">
          <span v-for="(tag, ind) in order.tags" :key="ind">{{ tag }}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      filter: [0, 10],
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
    /*
     * 订单的状态
     * 0. 订单已取消
     * 1. 等待接单（商家接单进入下一状态）
     * 2. 等待发货（用户发货进入下一状态）
     * 3. 运输中 （用户发货进入下一状态）
     * 4. 检验中（商家给出最终价格进入下一状态）
     * 5. 核价中（用户接受此价格）
     * 6. 等待支付（商户支付钱款）
     * 7. 等待用户确认（20天自动确认）
     * 8. 交易完成
     *
     */
    orders () {
      const orders = this.getOrdersFromServer()
      return orders.filter(order => {
        return order.status >= this.filter[0] && order.status < this.filter[1]
      })
    }
  },
  methods: {
    getOrdersFromServer () {
      // TODO 向服务器获取数据
      return [
        {
          id: '45678930',
          deal_price: 2720,
          status: 0,
          model: 'iPhone 11 Pro',
          evaluation: 4,
          tags: ['账户可退出', '轻微磨损', '屏幕显示正常', '屏幕有维修']
        },
        {
          id: '45367890',
          deal_price: 2720,
          status: 1,
          model: 'iPhone 11 Pro',
          evaluation: 4,
          tags: ['账户可退出', '轻微磨损', '屏幕显示正常', '屏幕有维修']
        },
        {
          id: '45657890',
          deal_price: 2720,
          status: 2,
          model: 'iPhone 11 Pro',
          evaluation: 4,
          tags: ['账户可退出', '轻微磨损', '屏幕显示正常', '屏幕有维修']
        },
        {
          id: '45677890',
          deal_price: 2720,
          status: 6,
          model: 'iPhone 11 Pro',
          evaluation: 4,
          tags: ['账户可退出', '轻微磨损', '屏幕显示正常', '屏幕有维修']
        }
      ]
    },
    lookupOrder (id) {
      this.$router.push('/order/' + id)
    }
  }
}
</script>

<style lang="stylus" scoped>
.orders {
  width: 80%;
  max-width: 1000px;
  min-width: 750px;
  margin: 0 auto;
}

.order-card {
  padding: 1rem;
  margin: 0 auto;
  // // box-shadow: 0 1px 20px 0 rgba(0, 0, 0, 0.05);
  border-radius: 6px;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
  align-items: center;

  .item {
    &:not(:last-child) {
      border-right: 1px dashed #e2e3e4;
      margin-right: 10px;
    }

    text-align: center;
    line-height: 1.7;
    display: grid;
    grid-template-columns: 50px auto;
    grid-template-rows: repeat(2, 1fr);
    cursor: pointer;

    .svg {
      width: 35px;
      height: 35px;
      align-self: center;
      justify-self: center;
      border-radius: 5px;
      grid-area: 1 / 1 / 3 / 2;
    }

    .title {
      text-align: left;
      padding-left: 1rem;
      font-size: 13px;
      font-size: 16px;
      grid-area: 1 / 2 / 2 / 4;
    }

    .text {
      padding-left: 1rem;
      text-align: left;
      font-weight: 600;
      grid-area: 2 / 2 / 3 / 4;
    }
  }
}

.my-order {
  position: relative;
  border-radius: 6px;
  box-shadow: 0 1px 5px 1px rgba(0, 0, 0, 0.05);
  margin: 30px 0;
  height: 100px;
  padding: 1rem;
  display: flex;
  cursor: pointer;

  .status {
    position: absolute;
    left: 1rem;
    top: 1rem;
    font-size: small;
  }

  .price {
    width: 80px;
    height: 100%;
    color: #ffa426;
    font-size: 20px;
    margin: 0 1rem;
    display: flex;
    align-items: center;
  }

  .right {
    width: 100%;

    .tags {
      padding: 0 1rem;

      >span {
        color: #909399;
        display: inline-block;
        padding: 0.3rem 0.5rem;
        border-radius: 3px;
        background: #f1f1f1;
        font-size: small;
        margin-right: 1rem;
      }
    }
  }
}
</style>

<style lang="stylus">
.el-icon-star-on {
  margin-right: 7px;
  color: #ffa426;
}
</style>
