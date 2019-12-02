<template>
  <div class="publish">
    <div class="publish__top_box">
      <h1 class="publish__title">发布你的产品</h1>
    </div>
    <!-- TODO: 组件化 -->
    <!-- 选择机型 -->
    <div class="select">
      <div v-if="step==1" class="block">
        <div class="model_box">
          <div class="tabs">
            <div
              v-for="(brand, index) in brands"
              :key="index"
              class="tab"
              :class="{ tab_active: form.brand.value===brand.value }"
              @click="handleBrand(brand.value, index)"
              ><strong>{{ brand.label }}</strong></div>
            <div class="tab">其他</div>
          </div>
          <div class="models models_1" v-if="show_models === 1">
            <div
              class="model"
              v-for="(model, index) in brands[form.brand.index].models.slice(0, 5)"
              :key="index"
              @click="handleSelectModel(model)">
              <el-image
                :src="model.pic"
              ></el-image>
              <div>{{ model.label }}</div>
            </div>
            <div class="model-arrow">
              <i class="el-icon-caret-right" @click="show_models = 2"></i>
            </div>
          </div>
          <div class="models models_2" v-if="show_models === 2">
            <div class="model-arrow">
              <i class="el-icon-caret-left" @click="show_models = 1"></i>
            </div>
            <div
              class="model"
              v-for="(model, index) in brands[form.brand.index].models.slice(5, 10)"
              :key="index"
              @click="handleSelectModel(model)">
              <el-image
                :src="model.pic"
              ></el-image>
              <div>{{ model.label }}</div>
            </div>
            </div>
          </div>
      </div>
      <!-- 选择手机的情况信息 -->
      <div v-if="step==2">
        <h4>根据手机情况选择</h4>
        <el-collapse v-model="activeNames" accordion>
          <el-collapse-item
            v-for="(select, ind) in selections" :key="ind"
            :title="title(select, ind)"
            :name="ind + 1">
            <el-radio-group v-model="form.selected[ind]" @change="handleRadioChg">
              <el-radio
                v-for="(option, index) in select.options" :key="index"
                :label="index"
                border>{{ option.label }}</el-radio>
            </el-radio-group>
          </el-collapse-item>
        </el-collapse>
        <!-- 添加手机的照片，必选项 -->
        <h4>添加手机正面、背面、边框的照片</h4>
        <el-upload
          action="https://jsonplaceholder.typicode.com/posts/"
          list-type="picture-card"
          :on-preview="handlePictureCardPreview"
          :on-remove="handleRemove">
          <i class="el-icon-plus"></i>
        </el-upload>
        <el-dialog :visible.sync="dialogVisible">
          <img width="100%" :src="dialogImageUrl" alt="">
        </el-dialog>
        <!-- 交互逻辑按钮 -->
        <el-button class="pub_btn" @click="handlePre">上一步</el-button>
        <el-button class="pub_btn" @click="handleNext" type="primary">下一步</el-button>
      </div>

      <div v-if="step ==3">
        <h4>添加手机的描述</h4>

        <el-input
          type="textarea"
          :autosize="{ minRows: 2, maxRows: 10}"
          placeholder="请输入描述"
          v-model="form.describe">
        </el-input>
        <el-button class="pub_btn" @click="handlePre">上一步</el-button>
        <el-button class="pub_btn" @click="publish" type="primary">提交</el-button>
      </div>
    </div>

  </div>
</template>

<script>
export default {
  data () {
    return {
      show_models: 1, // 两个机型块展示哪一个
      step: 1, // 当前进行的步骤是第几步
      dialogImageUrl: '',
      dialogVisible: false,
      activeNames: ['status'], // 选择需要展开的页面
      brands: [{
        label: '华为',
        value: 'Huawei',
        models: [{
          label: '华为 Mate30',
          value: 'Huawei Mate30'
        }, {
          label: '华为 Mate30 Pro',
          value: 'Huawei Mate30 Pro'
        }, {
          label: '华为 Mate30 Pro 5G',
          value: 'Huawei Mate30 Pro 5G'
        }, {
          label: '华为 P30',
          value: 'Huawei P30'
        }, {
          label: '华为 P30 Pro',
          value: 'Huawei P30 Pro'
        }, {
          label: '华为 MateX',
          value: 'Huawei MateX'
        }, {
          label: '华为 Mate20',
          value: 'Huawei Mate20'
        }, {
          label: '华为 Mate20 Pro',
          value: 'Huawei Mate20 Pro'
        }, {
          label: '华为 Mate20X',
          value: 'Huawei Mate20X'
        }, {
          label: '华为 Mate20X 5G',
          value: 'Huawei Mate20X 5G'
        }]
      }, {
        label: '苹果',
        value: 'Apple',
        models: [{
          label: '苹果 iPhone 11',
          value: 'Apple iPhone 11'
        }, {
          label: '苹果 iPhone 11 Pro',
          value: 'Apple iPhone 11Pro'
        }, {
          label: '苹果 iPhone XR',
          value: 'Apple iPhone XR'
        }, {
          label: '苹果 iPhone XS',
          value: 'Apple iPhone XS'
        }, {
          label: '苹果 iPhone XS Max',
          value: 'Apple iPhone XS Max'
        }, {
          label: '苹果 iPhone X',
          value: 'Apple iPhone X'
        }, {
          label: '苹果 iPhone8',
          value: 'Apple iPhone8'
        }, {
          label: '苹果 iPhone8 plus',
          value: 'Apple iPhone8 plus'
        }, {
          label: '苹果 iPhone7 plus',
          value: 'Apple iPhone7 plus'
        }, {
          label: '苹果 iPhone7',
          value: 'Apple iPhone7'
        }]
      }, {
        label: 'OPPO',
        value: 'OPPO',
        models: [{
          label: 'OPPO Reno 2',
          value: 'OPPO Reno 2'
        }, {
          label: 'OPPO Reno 2Z',
          value: 'OPPO Reno 2Z'
        }, {
          label: 'OPPO Reno Ace',
          value: 'OPPO Reno Ace'
        }, {
          label: 'OPPO Reno',
          value: 'OPPO Reno'
        }, {
          label: 'OPPO FindX',
          value: 'OPPO FindX'
        }, {
          label: 'OPPO R17 Pro',
          value: 'OPPO R17 Pro'
        }, {
          label: 'OPPO R17',
          value: 'OPPO R17'
        }, {
          label: 'OPPO R15',
          value: 'OPPO R15'
        }, {
          label: 'OPPO K3',
          value: 'OPPO K3'
        }, {
          label: 'OPPO Find 7',
          value: 'OPPO Find 7'
        }]
      }, {
        label: '小米',
        value: 'XiaoMi',
        models: [{
          label: '小米 9 Pro',
          value: 'XiaoMi 9 Pro'
        }, {
          label: '小米 9',
          value: 'XiaoMi 9'
        }, {
          label: '小米 CC9 Pro',
          value: 'XiaoMi CC9 Pro'
        }, {
          label: '小米 CC9',
          value: 'XiaoMi CC9'
        }, {
          label: '小米 Redmi K20',
          value: 'XiaoMi Redmi K20'
        }, {
          label: '小米 Redmi K20 Pro',
          value: 'XiaoMi Redmi K20 Pro'
        }, {
          label: '小米 8',
          value: 'XiaoMi 8'
        }, {
          label: '小米 8 SE',
          value: 'XiaoMi 8 SE'
        }, {
          label: '小米 Mix 3',
          value: 'XiaoMi Mix 3'
        }, {
          label: '小米 Mix 3 5G',
          value: 'XiaoMi Mix 3 5G'
        }]
      }, {
        label: 'Vivo',
        value: 'Vivo',
        models: [{
          label: 'Vivo iQOO Pro',
          value: 'Vivo iQOO Pro'
        }, {
          label: 'Vivo iQOO',
          value: 'Vivo iQOO'
        }, {
          label: 'Vivo iQOO Neo',
          value: 'Vivo iQOO Neo'
        }, {
          label: 'Vivo Nex 3',
          value: 'Vivo Nex 3'
        }, {
          label: 'Vivo X27',
          value: 'Vivo X27'
        }, {
          label: 'Vivo X27 Pro',
          value: 'Vivo X27 Pro'
        }, {
          label: 'Vivo S5',
          value: 'Vivo S5'
        }, {
          label: 'Vivo Z5',
          value: 'Vivo Z5'
        }, {
          label: 'Vivo Z5x',
          value: 'Vivo Z5x'
        }, {
          label: 'Vivo Y7s',
          value: 'Vivo Y7s'
        }]
      }],
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
      }],
      form: {
        brand: {
          value: 'Huawei',
          index: 0
        },
        model: '', // 保存用户的机型信息
        selected: [], // 记录用户的选择的手机的状态
        describe: '' // 用户填写的描述
      }
    }
  },
  methods: {
    title (select, ind) {
      const head = select.label + ' : '
      let tail = ''
      if (select.options[this.form.selected[ind]]) {
        tail = select.options[this.form.selected[ind]].label
      } else {
        tail = '未选择'
      }
      return head + tail
    },
    handleChange (value) {
      console.log(value)
    },
    mdSelected () {
      this.modelSelected = true
    },
    handleRemove (file, fileList) {
      console.log(file, fileList)
    },
    handlePictureCardPreview (file) {
      this.dialogImageUrl = file.url
      this.dialogVisible = true
    },
    handleSelectModel (model) {
      this.form.model = model
      this.step += 1
    },
    // 处理下一步交互逻辑
    handleNext () {
      // TODO:如果当前界面的信息没有填完，无法进入下一步
      this.step += 1
    },
    // 处理上一步交互逻辑
    handlePre () {
      this.step -= 1
    },
    handleBrand (value, index) {
      this.form.brand.value = value
      this.form.brand.index = index
    },
    // 当选项组改变之后处理的事件
    handleRadioChg (e) {
      // 可以根据上次所使用的东西进行更改下面的逻辑。例如保存到矩阵里面
      this.activeNames += 1
    },
    // 提交操作 TODO:
    publish () {
      // 将手机的信息传到服务器，同时返还一个商品ID，然后界面跳转到商品详情界面
      this.$router.push('/product/id_12138')
    }
  }
}
</script>

<style lang="stylus" scoped>
.publish
  &__top_box
    height 20rem
    &::after
      content ''
      z-index -1
      position absolute
      left 0
      top navBarHeight
      width 100vw
      height 20rem
      background navBgColor
  &__title
    padding-top 4rem
    color white
    text-align center
    font-size 3rem

  .block
    .model_box
      height 20rem
      border 1px solid #f3f4f5
      border-radius 3px
      box-shadow cardShadow
      .tabs
        display flex
        align-items center
        .tab
          flex-grow 1
          text-align center
          height 3rem
          line-height 3rem
          background #f3f4f5
          &:hover
            background white
            cursor pointer
        .tab_active
          background white
          border-top 2px solid mainColor
    .models
      width 100%
      height 17rem
      display flex
      justify-content center
      align-items center
      transition all .5s ease
      .model-arrow
        display flex
        width 2rem
        height 70%
        opacity 0
        &:hover
          cursor pointer
          opacity 1
          color mainColor
        i
          margin auto
      .model
        width: 18%
        height 80%
        text-align center
        display inline-block
        .el-image
          height 80%
          width 90%
          margin-bottom 1rem
        &:hover
          cursor pointer
          color mainColor
        &__img
          width 6rem
          height 9rem
          margin 1.5rem 0
          &:hover
            transform scale(1.1)
            transition all .3s ease

  .select
    width 80%
    min-width 30rem
    margin 0 auto

    .pub_btn
      margin-top 20px
</style>

<style lang="stylus">
// 对 ElementUI 的原本的样式进行修改
.el-radio.is-bordered+.el-radio.is-bordered
  margin-left 10px

.el-radio
  &.is-bordered
    padding 0 10px
    margin 10px
    height 2rem
  &__inner
    display none
  &__label
    font-size smaller
    line-height 2rem
    padding-left 0
</style>
