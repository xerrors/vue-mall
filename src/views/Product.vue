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
    <div class="product_box">
      <div class="description">
        <div class="info__title">商品描述</div>
        <div class="description__text">{{ productInfo.description }}</div>
      </div>
      <div class="info">
        <div class="info__title">商品详情</div>
        <h4>手机型号：{{ productInfo.model.label }}</h4>
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
        seller: {
          name: '黄玉川',
          avatar: 'http://src.xerrors.fun/blog/20191021/CcFV3DJYgi0B.jpg?imageslim'
        },
        model: {
          label: '华为 Mate30 Pro',
          value: 'Huawei Mate30 Pro'
        },
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
        description: '换了新款手机了，这个不想使用了，没有任何问题，打算卖掉，入手渠道:专卖店全款购买的，有发票；使用感受:功能一切正常运行流畅，大型游戏不卡顿，使用起来没有任何问题，拍照清晰，吊打全球一亿像素的手机。'
      }
    }
  },

  methods: {
    handleChange (now, pre) {
      console.log(this.$refs.gallary.$children[now])
      // TODO：在这里修改DOM的样式
    }
  }
}
</script>

<style lang="stylus" scoped>
.main_container
  width 70%
  max-width 75rem
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
  .product_box
    box-shadow cardShadow
    padding 3rem
    display flex
    justif center
    margin-top 5rem
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
