<template>
  <div class="main-price">
    <div class="head">
      <p>当前设备在回收商中报价最高为
        <strong>{{ topPrice }}</strong>
        元</p>
    </div>
    <div class="businesses">
      <div class="bsns" v-for="item in prices" :key="item.ID">
        <span class="bsns__price">{{ item.price }}</span>
        <span class="bsns__name">{{ item.Name }}</span>
      </div>
    </div>
    <div style="text-align: center; margin-top: 100px; color: #46bd87;">
      <router-link
        to='/product/id_12138'
        class="transell" style="color: #46bd87;">
        我想转卖给小型商户
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      prices: [],
      topPrice: 0,
      constPrice: [
        {
          ID: '10001',
          Name: '爱回收',
          logo: 'a',
          price: 993
        },
        {
          ID: '10002',
          Name: '回收宝',
          logo: 'b',
          price: 946
        },
        {
          ID: '10003',
          Name: '闪回收',
          logo: 'b',
          price: 897
        },
        {
          ID: '10004',
          Name: '爱机汇',
          logo: 'b',
          price: 891
        },
        {
          ID: '10005',
          Name: '找靓机',
          logo: 'b',
          price: 876
        }
      ]
    }
  },
  mounted () {
    // 向后端请求数据
    this.prices = this.constPrice
    this.topPrice = this.prices[0].price
  }
}
</script>

<style lang="stylus" scoped>
.main-price
  margin-top 5rem
.head
  p
    text-align center
    color text-color-primary
    strong
      color color-primary
      font-size 3rem

.businesses
  display flex
  justify-content center
  align-items center
  .bsns
    text-align center
    padding 1.5rem
    // border 1px solid border-color-base
    *
      display block
      &:hover
        cursor pointer
    &__price
      font-size 2rem
      padding .5rem .8rem
      border-bottom 3px solid
      margin-bottom .5rem
      color color-primary
    &__name
      font-weight 600
      font-size 1.2rem
      color text-color-primary
</style>
