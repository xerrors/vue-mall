<template>
  <div class="main_container">
    <div class="seller">
      <el-avatar class="seller__avatar" :src="productInfo.seller.avatar"></el-avatar>
      <span class="seller__name">{{ productInfo.seller.name }}</span>
      <div class="product_box">
        <el-carousel class="gallary" :interval="4000" type="card" height="400px" @change="handleChange">
          <el-carousel-item v-for="(item, index) in productInfo.pics" :key="index">
            <el-image
              style="width: 300px; height: 400px"
              :src="item"
              fit="contain">
            </el-image>
          </el-carousel-item>
        </el-carousel>
        <div class="info">
          <h3>{{ productInfo.model.label }}</h3>
          <div class="info__box" v-for="(item, index) in productInfo.selected" :key="index">
            <span><strong>{{ selections[index].label + ': ' }}</strong></span>
            <span>{{ selections[index].options[item].label }}</span>
          </div>
        </div>
      </div>
      <p class="description">{{ productInfo.description }}</p>
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
          'http://src.xerrors.fun/blog/20191125/E4YSQB5mISMl.jpg?imageslim',
          'http://src.xerrors.fun/blog/20191125/lX3mGcjhk6rH.jpg?imageslim',
          'http://src.xerrors.fun/blog/20191125/cx7Mvp3pLSNb.jpg?imageslim',
          'http://src.xerrors.fun/blog/20191125/4MlfwFzvvv9D.jpg?imageslim',
          'http://src.xerrors.fun/blog/20191125/lX3mGcjhk6rH.jpg?imageslim'
        ],
        description: '换了新款手机了，这个不想使用了，没有任何问题，打算卖掉，入手渠道:专卖店全款购买的，有发票；使用感受:功能一切正常运行流畅，大型游戏不卡顿，使用起来没有任何问题，拍照清晰，吊打全球一亿像素的手机。'
      }
    }
  },

  methods: {
    handleChange (now, pre) {
      console.log(now)
      // TODO：在这里修改DOM的样式
    }
  }
}
</script>

<style lang="stylus" scoped>
.main_container
  max-width 75rem
  .gallary
    width 32rem
</style>
