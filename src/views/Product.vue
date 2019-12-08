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
        v-for="item in productInfo.values" :key="item.id"
        style="text-align: center;">
        <p style="display: inline-block;"><strong>{{ item.name }}</strong> 出价{{ item.value }}元 - {{ item.date }}</p>
        <el-button
          type="text"
          v-if="$store.state.roles === 'user'"
          style="display: inline-block; margin-left: 1rem;"
          :disabled="productInfo.dealed"
          @click="handleDeal">成交</el-button>
      </div>
    </div>
    <div
      class="value"
      v-if="$store.state.roles === 'boss'"
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
      <div class="description">
        <div class="info__title">商品描述</div>
        <div class="description__text">{{ productInfo.description }}</div>
      </div>
      <div class="info">
        <div class="info__title">商品详情</div>
        <div class="info__box" v-for="(item, index) in productInfo.selected" :key="index">
          <span><strong>{{ selections[index].label + ': ' }}</strong></span>
          <span>{{ selections[index].options[item].label }}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      elSlider: {
        step: 10,
        min: 100,
        max: 10000
      },
      valued: false,
      value: 0,
      selections: [{
        label: '手机状态',
        value: 'status',
        options: [{
          label: '正常进入桌面',
          value: 'nomal'
        }, {
          label: '无法开机或者进入桌面',
          value: 'unbootlog'
        }, {
          label: '全新未拆封',
          value: 'brandnew'
        }]
      }, {
        label: '内存、存储容量',
        value: 'status1',
        options: [{
          label: '256G',
          value: '256G'
        }, {
          label: '128G',
          value: '128G'
        }, {
          label: '64G',
          value: '64G'
        }]
      }, {
        label: '账号是否可退出',
        value: 'status2',
        options: [{
          label: '可正常退出',
          value: 'nomal'
        }, {
          label: '不可退出',
          value: 'disexit'
        }]
      }, {
        label: '磨损程度',
        value: 'status3',
        options: [{
          label: '外壳无瑕疵',
          value: 'almost_new'
        }, {
          label: '细微划痕无磕碰',
          value: 'slightly'
        }, {
          label: '磕碰掉漆、边框磨损',
          value: 'middle'
        }, {
          label: '外壳裂缝、变形',
          value: 'heavy'
        }]
      }, {
        label: '屏幕磨损',
        value: 'status4',
        options: [{
          label: '完美使用无划痕',
          value: 'almost_new'
        }, {
          label: '细微划痕',
          value: 'slightly'
        }, {
          label: '划伤、脱胶、小缺角',
          value: 'middle'
        }, {
          label: '碎裂、边角破损',
          value: 'heavy'
        }]
      }, {
        label: '屏幕显示',
        value: 'status5',
        options: [{
          label: '完美无瑕疵',
          value: 'almost_new'
        }, {
          label: '显示色差，或轻微泛黄/亮坏点',
          value: 'slightly'
        }, {
          label: '显示烧屏，或有透图/透字',
          value: 'middle'
        }, {
          label: '显示漏液，或闪烁/横竖线/花屏',
          value: 'heavy'
        }]
      }, {
        label: '维修情况',
        value: 'status6',
        options: [{
          label: '无维修情况',
          value: 'almost_new'
        }, {
          label: '屏幕维修',
          value: 'slightly'
        }, {
          label: '主板维修或功能故障',
          value: 'middle'
        }, {
          label: '屏幕和主板皆有维修',
          value: 'heavy'
        }]
      }]
    }
  },

  computed: {
    productInfo () {
      // TODO: 从服务器获取数据
      return {
        // seller 应该只获取得到 ID，然后再向服务器获取
        id: 12138,
        seller: {
          seller_id: 12138,
          name: '黄玉川',
          avatar: 'http://src.xerrors.fun/blog/20191021/CcFV3DJYgi0B.jpg?imageslim'
        },
        date: '2019-11-29',
        dealed: false, // 此订单是否已经交易
        // 手机的品牌
        model: {
          label: '华为 Mate30 Pro',
          value: 'Huawei Mate30 Pro'
        },
        // 用户的选项
        selected: [1, 1, 1, 1, 1, 1, 1],
        pics: [
          'http://src.xerrors.fun/blog/20191126/TiEyQCEnc6hi.png?imageslim',
          'http://src.xerrors.fun/blog/20191126/O6OBffI8bIuW.png?imageslim',
          'http://src.xerrors.fun/blog/20191126/wiafVBTwyzvD.png?imageslim',
          'http://src.xerrors.fun/blog/20191126/thMAJ0QTX489.png?imageslim',
          'http://src.xerrors.fun/blog/20191126/Oj6LnzUFkPUA.png?imageslim',
          'http://src.xerrors.fun/blog/20191126/o7Iyr9CY3s5Y.png?imageslim',
          'http://src.xerrors.fun/blog/20191126/0YFUsTWYHLaX.png?imageslim'
        ],
        // 出价记录
        values: [{
          id: 12138,
          name: '宋仁投',
          date: '2019-11-30 17:14:16',
          value: '2500'
        }, {
          id: 9527,
          name: '潘达秋',
          date: '2019-11-29 19:45:17',
          value: '2899'
        }],
        description: '换了新款手机了，这个不想使用了，没有任何问题，打算卖掉，入手渠道:专卖店全款购买的，有发票；使用感受:功能一切正常运行流畅，大型游戏不卡顿，使用起来没有任何问题，拍照清晰，吊打全球一亿像素的手机。'
      }
    }
  },

  methods: {
    handleChange (now, pre) {
      // console.log(this.$refs.gallary.$children[now])
      // TODO：在这里修改DOM的样式
    },
    handleDeal () {
      this.productInfo.dealed = true
      // 把信息发到服务器
    },
    handleValue () {
      this.$confirm('确认出价吗？出价后24小时内不可更改！', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '算了',
        type: 'warning'
      }).then(() => {
        let value = {
          // 获取用户的 ID
          id: 12138,
          // 获取当前时间
          date: '2019-11-29 18:15:48',
          value: this.value
        }
        this.valued = true
        // 向服务器发送请求
        this.productInfo.values.push({
          id: 7677,
          name: '黄玉川',
          date: '2019-12-16 09:45:17',
          value: this.value
        })
        console.log(value)
        this.$message({
          type: 'success',
          message: '出价成功!'
        })
      }).catch(() => {
        this.$message({
          type: 'info',
          message: '已取消'
        })
      })
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
