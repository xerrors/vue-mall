<template>
  <div class="merchant-main">
    <div class="head">
      <img :src="merchant_info.logo" alt="LOGO" />
      <div class="head__info" style="display: inline-block">
        <div>{{ merchant_info.name }}</div>
        <i
          class="el-icon-star-on"
          v-for="_ in merchant_info.credit"
          :key="_"
          style="margin-right: 7px; color: #ffa426;"
        ></i>
      </div>
      <p style="margin-bottom: 0; color: #909399">地址：{{ merchant_info.address }}</p>
    </div>
    <div class="msg-alert" v-if="showMsgAlert">
      <i class="el-icon-chat-line-round" @click="checkMessage">&nbsp;你有新的消息等待处理</i>
      <i @click="showMsgAlert = false" class="el-icon-circle-close" style="float: right;"></i>
    </div>
    <div class="order-card">
      <div class="item">
        <img src="/svg/all.svg" class="svg" />
        <div class="title">全部订单</div>
        <div class="text">1290</div>
      </div>
      <div class="item">
        <img src="/svg/waiting.svg" class="svg" />
        <div class="title">等待接单</div>
        <div class="text">28</div>
      </div>
      <div class="item">
        <img src="/svg/check.svg" class="svg" />
        <div class="title">审核中</div>
        <div class="text">10</div>
      </div>
      <div class="item">
        <img src="/svg/pay.svg" class="svg" />
        <div class="title">等待付款</div>
        <div class="text">18</div>
      </div>
      <div class="item">
        <img src="/svg/cancel.svg" class="svg" />
        <div class="title">已取消</div>
        <div class="text">4</div>
      </div>
    </div>
    <div class="body">
      <div class="block b1">
        <p>营业时间</p>
        <div>10:00 - 18:00</div>
      </div>
      <div class="block b2">
        <p>联系电话</p>
        <div>{{ merchant_info.tel }}</div>
      </div>
      <div class="block b3">
        <p>入驻时长</p>
        <div>{{ merchant_info.settle_age }} 年</div>
      </div>
      <div class="block b4">
        <p>30天交易量</p>
        <div>{{ merchant_info.deal_count }} 笔</div>
      </div>
      <div class="block b5">
        <p>好评率</p>
        <div>{{ merchant_info.good_rate }}</div>
      </div>
      <div class="block b6">
        <p>平均回收周期</p>
        <div>{{ merchant_info.cycle }} 天</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      showMsgAlert: true,
      merchant_info: {}
    }
  },
  mounted () {
    this.getPlatformInfo()
  },
  methods: {
    getPlatformInfo (id) {
      // 这里就是通过ID向服务器获取信息了，后记可以加入一个全局的加载动画
      this.merchant_info = {
        id: '10001',
        logo:
          'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSXn7pjhFRXpjBp55BxxRTnNPrtvTF_y3PbLCHGWsCVb6LRiMHH',
        name: '爱回收',
        pics: [],
        tel: '17629739090',
        address: '江苏省无锡市滨湖区蠡湖大道1800号江南大学',
        credit: 5,
        settle_age: 4,
        deal_count: 1290,
        good_rate: '90%',
        cycle_ways: ['上门取件', '自行邮递', '线下门店'],
        cycle: 3.89,
        hist_orders: this.getHistOrders(id)
      }
    },
    getHistOrders (id) {
      return [
        {
          id: '2183173188920',
          model: '华为 P30 Pro',
          tags: [
            '轻微使用无刮痕',
            '128G',
            '屏幕显示正常',
            '有维修',
            '账户可正常退出'
          ],
          deal_price: 1800,
          evaluation: 5
        },
        {
          id: '2183173188920',
          model: '华为 P30 Pro',
          tags: [
            '轻微使用无刮痕',
            '128G',
            '屏幕显示正常',
            '有维修',
            '账户可正常退出'
          ],
          deal_price: 1900,
          evaluation: 3
        },
        {
          id: '2183173188920',
          model: '华为 P30 Pro',
          tags: [
            '轻微使用无刮痕',
            '128G',
            '屏幕显示正常',
            '有维修',
            '账户可正常退出'
          ],
          deal_price: 1600,
          evaluation: 5
        }
      ]
    },
    checkMessage () {
      this.$router.push('/messages')
    }
  }
}
</script>

<style lang="stylus" scoped>
.merchant-main {
  width: 800px;
  margin: 0 auto;

  .head {
    margin: 30px 0;

    >img {
      width: 100px;
      height: 100px;
      border-radius: 6px;
    }

    &__info {
      padding-left: 1rem;

      >div {
        letter-spacing: 3px;
        padding-bottom: 0.7rem;
        font-size: 18px;
        font-weight: 500;
      }
    }
  }

  .msg-alert {
    margin: 10px 0;
    padding: 0.5rem 1rem;
    border-radius: 6px;
    background: rgba(255, 157, 157, 0.2);

    i {
      cursor: pointer;
      transition: opacity 0.3s ease;

      &:hover {
        opacity: 0.6;
      }
    }
  }

  .order-card {
    padding: 1rem;
    margin: 0 auto;
    box-shadow: 0 1px 20px 0 rgba(0, 0, 0, 0.05);
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

  .body {
    width: 100%;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;

    .block {
      display: inline-block;
      height: 100px;
      margin: 14px 10px;
      padding: 0.5rem 1.5rem;
      border-radius: 6px;

      >p {
        font-size: 17px;
        font-weight: 500;
        letter-spacing: 3px;
      }

      >div {
        color: #232323;
        background: rgba(255, 255, 255, 0.5);
        padding: 0.3rem 0.5rem;
        border-radius: 4px;
      }
    }

    bg_shadow(c) {
      background: c;
      // box-shadow 0 1px 20px 0px c
    }

    .b1 {
      bg_shadow(#afbef8);
    }

    .b2 {
      bg_shadow(#f4b75f);
    }

    .b3 {
      bg_shadow(#f6bb13);
    }

    .b4 {
      bg_shadow(#5dcbe4);
    }

    .b5 {
      bg_shadow(#58c9b9);
    }

    .b6 {
      bg_shadow(#9dc8c8);
    }
  }

  .hist-order {
    border-radius: 6px;
    box-shadow: 0 1px 5px 1px rgba(0, 0, 0, 0.05);
    margin: 30px 0;
    height: 100px;
    padding: 1rem;
    display: flex;

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
}
</style>
