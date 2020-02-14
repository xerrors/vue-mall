<template>
  <div class="main_container">
    <div name="seller" class="seller">
      <el-avatar class="seller__avatar" :src="productInfo.seller.avatar"></el-avatar>
      <span class="seller__name">{{ productInfo.seller.name }}</span>
    </div>
    <el-carousel class="gallary" ref="gallary" :interval="4000" type="card" height="400px" @change="handleChange">
      <el-carousel-item v-for="(item, index) in productInfo.pics" :key="index">
        <el-image
          style="width: 300px; height: 400px"
          :src="item"
          fit="contain">
        </el-image>
      </el-carousel-item>
    </el-carousel>
    <!--TODO:-->
    <h4 style="text-align: center">型号：{{ productInfo.model.label }}</h4>
    <!-- 出价记录 -->
    <div
      class="valued-list"
      style="width: 100%;"
      >
      <div class="valued-list__item"
        v-for="(item, index) in productInfo.values" :key="item.id"
        style="text-align: center;">
        <p style="display: inline-block;"><strong>{{ item.name }}</strong> 出价{{ item.value }}元 - {{ item.date }}</p>
        <el-button
          type="text"
          v-if="$store.state.role === 'user'"
          style="display: inline-block; margin-left: 1rem;"
          :disabled="productInfo.dealed"
          @click="handleDeal(index)">成交</el-button>
      </div>
    </div>
    <div
      class="value"
      v-if="$store.state.role === 'merchant'"
      style="display: flex"
      >
      <el-slider
        v-model="value"
        show-input
        :step="elSlider.step"
        :min="elSlider.min"
        :max='elSlider.max'
        :disabled="valued"
        style="width: 90%">
      </el-slider>
      <el-button
        type="primary"
        size="small"
        style="margin-left: 1rem;"
        :disabled="valued"
        @click="handleValue"
        plain>出价</el-button>
    </div>
    <div class="product_box">
      <div class="info">
        <div class="info__title">商品详情</div>
        <div class="info__box" v-for="(item, index) in productInfo.selected" :key="index">
          <span><strong>{{ selections[index].label + ': ' }}</strong></span>
          <span>{{ selections[index].options[item].label }}</span>
        </div>
      </div>
      <div class="description">
        <div class="info__title">商品描述</div>
        <div class="description__text">{{ productInfo.description }}</div>
      </div>
    </div>
  </div>
</template>

<script>
import { getSelections, getProductInfo } from '@/utils/fakedata.js'
export default {
  data () {
    return {
      elSlider: {
        step: 10,
        min: 100,
        max: 10000
      },
      valued: false,
      dealed: false,
      value: 0,
      selections: getSelections()
    }
  },

  computed: {
    productInfo () {
      // TODO: 从服务器获取数据
      // console.log(this.$route.params.id)
      return getProductInfo(this.$route.params.id)
    }
  },

  methods: {
    handleChange (now, pre) {
      // console.log(this.$refs.gallary.$children[now])
      // TODO：在这里修改DOM的样式
    },
    handleDeal (index) {
      // 把信息发到服务器
      this.$confirm('确认交易吗？出价后24小时内不可更改！', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '算了',
        type: 'warning'
      }).then(() => {
        // 创建一个订单
        this.dealed = true
        var order = {
          order_id: 23454,
          product: this.productInfo,
          seller: this.productInfo.seller,
          buyer: this.productInfo.values[index]
        }
        this.$store
          .dispatch('CreateOrder', order)
          .then(() => {
          })
          .catch(() => {
            // cosole.log(err)
          })
        this.$router.push('/order')
      }).catch(() => {
        this.$message({
          type: 'info',
          message: '已取消'
        })
      })
    },
    handleValue () {
      this.$message('开发中')
    }
  }
}
</script>

<style lang="stylus" scoped>
.main_container
  width 70%
  max-width 75rem
  min-width 55rem
  margin 0 auto
  .seller
    display flex
    margin-top 3rem
    height 2.5rem
    &__avatar
      height 2.5rem
    &__name
      margin-left 1rem
      line-height 2.5rem
  .gallary
    width 60%
    min-width 50trm
    margin 0 auto
  .value
    box-shadow cardShadow
    border-radius 4px
    padding 3rem
    margin-top 3rem
  .product_box
    box-shadow cardShadow
    border-radius 4px
    padding 3rem
    display flex
    margin-top 3rem
    .description
      width 50%
      &__text
        line-height 2rem
        padding-right 2rem
    .info
      padding-left 3rem
      width 50%
      h4
        color mainColor
      &__title
        margin-bottom 1rem
        background #53bf7e
        display: inline-block
        color white
        padding .5rem 1rem
        border-radius 3px
      &__box
        margin 1rem 0
        span:first-child
          margin-right 1rem
          padding-left .5rem
          border-left 2px solid mainColor
</style>
