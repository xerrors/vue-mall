<template>
  <div class="main_container">
    <!-- 卖家信息 // ! 暂时隐藏 -->
    <!-- <div name="seller" class="seller">
      <el-avatar class="seller__avatar" :src="productInfo.seller.avatar"></el-avatar>
      <span class="seller__name">{{ productInfo.seller.name }}</span>
    </div> -->
    <!-- 型号信息 -->
    <h3>{{ productInfo.model.label }}</h3>
    <!-- 型号 -->
    <div class="product_box">
      <div class="info">
        <h4 class="info__title">商品详情</h4>
        <div class="info__box" v-for="(item, index) in productInfo.selected" :key="index">
          <span><strong>{{ selections[index].label + ': ' }}</strong></span>
          <span>{{ selections[index].options[item].label }}</span>
        </div>
      </div>
      <!-- 描述 -->
      <div class="description">
        <h4 class="info__title">商品描述</h4>
        <div class="description__text">{{ productInfo.description }}</div>
      </div>
    </div>
    <!-- 照片信息 -->
    <h4>商品照片</h4>
    <div class="gallary">
      <el-image
        v-for="(item, index) in productInfo.pics" :key="index"
        fit="cover"
        :src="item"
        :preview-src-list="productInfo.real_pics || productInfo.pics">
      </el-image>
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
      return getProductInfo(this.$route.params.id)
    }
  },

  methods: {
    handleChange (now, pre) {
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
  .product_box
    display grid
    grid-template-columns 1fr 1fr
    .description
      &__text
        line-height 2rem
    .info
      &__box
        margin 1rem 0
        span:first-child
          margin-right 1rem
          padding-left .5rem
          border-left 2px solid mainColor
  .gallary
    display grid
    grid-template-columns 1fr 1fr 1fr 1fr
    row-gap: 20px;
    column-gap: 20px;
    .el-image
      justify-self center
      border-radius 5px
      height: 200px;
      width: 200px
</style>
