<template>
  <div class="result">
    <div class="loading-mask" v-if="loading">
      <div class="lds-ripple"><div></div><div></div></div>
    </div>
    <div class="container">
      <h4>下面是根据所提供的信息匹配到的最佳网点:</h4>
      <div class="item" v-for="result in results" :key="result.id">
        <div class="left">
          <div class="top">
            <div class="logo">
              <img :src="result.logo"/>
            </div>
            <div class="body">
              <div class="head">
                <div class="name" @click="lookup(result.id)">{{ result.name }}</div>
                <div class="credit">
                  <i class="el-icon-star-on" v-for="_ in result.credit" :key="_"></i>
                </div>
              </div>
              <div class="price">{{ result.price }}&nbsp; ¥</div>
            </div>
          </div>
          <div class="bottom">
            <div class="address">
              <p>{{ result.address }}</p>
            </div>
            <div class="ways">
              <span v-for="way in result.cycle_ways" :key="way">{{ way }}</span>
            </div>
          </div>
        </div>
        <div class="right">
          <el-button class="deal-button" @click="toPreOrder(result.id)">下单</el-button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      loading: true,
      results: [{
        id: '10001',
        logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSXn7pjhFRXpjBp55BxxRTnNPrtvTF_y3PbLCHGWsCVb6LRiMHH',
        name: '爱回收',
        pics: [],
        tel: '17629739090',
        address: '江苏省无锡市滨湖区蠡湖大道1800号江南大学',
        credit: 4,
        settle_age: 4,
        deal_count: 1290,
        good_rate: '90%',
        price: 1870,
        cycle_ways: ['上门取件', '自行邮递', '线下门店'],
        cycle: 3.89
      }, {
        id: '10002',
        logo: 'http://src.xerrors.fun/blog/20200213/uvfwGrkuCfgJ.png',
        name: '闪回收',
        pics: [],
        tel: '17629739090',
        address: '江西省南昌市人民路东3201号',
        credit: 3,
        settle_age: 4,
        deal_count: 190,
        good_rate: '95%',
        price: 1897,
        cycle_ways: ['自行邮递', '线下门店'],
        cycle: 2.89
      }, {
        id: '10003',
        logo: 'http://src.xerrors.fun/blog/20200213/2wAS6RWEgEFW.png',
        name: '闪鱼回收',
        pics: [],
        tel: '17629739090',
        address: '安徽省亳州市利辛县振兴街18号',
        credit: 5,
        settle_age: 4,
        deal_count: 890,
        good_rate: '95%',
        price: 1607,
        cycle_ways: ['自行邮递', '线下门店'],
        cycle: 2.89
      }
      ]
    }
  },
  methods: {
    lookup (id) {
      this.$router.push('/merchant/' + id)
    },
    toPreOrder (id) {
      this.$router.push({
        path: '/pre-order',
        parms: {
          id: id
        }
      })
    }
  },
  mounted () {
    // 向后端请求数据
    setTimeout(() => {
      this.loading = false
    }, 3000)
  }
}
</script>

<style scoped>
.loading-mask {
    width: 100%;
    height: 100vh;
    position: absolute;
    left: 0;
    top: 0;
    background: white;
    display: flex;
    align-items: center;
    justify-content: center;
}
.lds-ripple {
  display: inline-block;
  position: relative;
  width: 80px;
  height: 80px;
}
.lds-ripple div {
  position: absolute;
  border: 4px solid #47cf73;
  opacity: 1;
  border-radius: 50%;
  animation: lds-ripple 1s cubic-bezier(0, 0.2, 0.8, 1) infinite;
}
.lds-ripple div:nth-child(2) {
  animation-delay: -0.5s;
}

.lds-ripple::after {
  color: #36323d;
  content: '正在匹配';
  display: block;
  position: relative;
  top: 100px;
  margin: 0 auto;
  text-align: center;
}

@keyframes lds-ripple {
  0% {
    top: 36px;
    left: 36px;
    width: 0;
    height: 0;
    opacity: 1;
  }
  100% {
    top: 0px;
    left: 0px;
    width: 72px;
    height: 72px;
    opacity: 0;
  }
}
</style>

<style lang="stylus" scoped>
h4
  display inline-block
  background: linear-gradient(0deg, rgba(71, 207, 115, 0.5) 40%,#fff 0)
  padding .4rem

.container
  width 700px
  margin 0 auto

.item
  min-width 700px
  max-width 900px
  height 151px
  width 80%
  // border 1px solid #f1f2f3
  box-shadow 0 1px 12px 1px rgba(0,0,0,0.05)
  display: grid;
  grid-template-columns: auto 112px
  margin 1rem auto
  border-radius 6px
  .left
    padding 1rem
    .top
      display: grid;
      grid-template-columns: 80px auto
      .logo>img
        border-radius 6px
      .body
        padding 0 .8rem
        .head>div
          display inline-block
        .name:hover
          cursor pointer
        .name, .price
          font-size large
          font-weight bold
          margin-bottom 10px
        .credit
          font-size large
          float right
          color #ffa426
        .price
          color #ffa426
    .bottom
      display grid
      grid-template-columns 300px auto
      >*
        align-self center
      .address>p
        margin 10px 0
        overflow: hidden;
        /*文本不会换行*/
        white-space: nowrap;
        /*当文本溢出包含元素时，以省略号表示超出的文本*/
        text-overflow: ellipsis;
      .ways
        text-align right
        margin-right 1rem
        >span
          background #f7f8f9
          border-radius 3px
          padding .3rem
          margin-left 10px
          font-size small
  .right
    align-self center
    display: flex;
    border-left 1px dashed #f6f7f8
    padding 1rem
    .deal-button
      margin 0 auto
  .logo
    width 80px
    height 80px
    >img
      width 100%
</style>
