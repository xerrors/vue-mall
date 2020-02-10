<template>
  <div class="select">
    <div v-if="step==1" class="block">
      <h4>选择你的产品</h4>
      <div class="model_box">
        <!-- 手机品牌 -->
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
        <!-- 手机机型 -->
        <div class="models">
          <div
            class="model"
            v-for="(model, index) in brands[form.brand.index].models.slice(0, 10)"
            :key="index"
            @click="handleSelectModel(model)">
            <el-image
              class="model__img"
              fit="contain"
              :src="model.pic"
            ></el-image>
            <div>{{ model.label }}</div>
          </div>
        </div>
      </div>
    </div>
    <!-- 选择手机的情况信息 -->
    <div v-if="step==2" class="slim">
      <h4>手机基本信息</h4>
      <el-collapse v-model="activeNames" accordion>
        <el-collapse-item
          v-for="(select, ind) in selections" :key="ind"
          :title="title(select, ind)"
          :name="ind + 1"
          style='color: #304455'>
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

    <div v-if="step ==3" class="slim">
      <h4>想要以旧换新</h4>
      <div>
        <el-switch
          v-model="form.change"
          active-text="是"
          inactive-text="否">
        </el-switch>
      </div>
      <h4>添加手机的描述</h4>
      <el-input
        type="textarea"
        :autosize="{ minRows: 2, maxRows: 10}"
        placeholder="请输入描述"
        v-model="form.describe">
      </el-input>
      <h4>选择你期望的回收方式</h4>
      <div>
        <span>拖拽排序</span>&nbsp;
        <el-button type="text" @click="setDef">重置</el-button>
      </div>
      <!-- https://github.com/SortableJS/Vue.Draggable -->
      <draggable v-model="form.methods" group="people" @start="drag=true" @end="drag=false">
        <div v-for="(element, ind) in form.methods" :key="element.id" class="methods">
          {{ind}} : {{element.name}}
          <el-button type="text"
            style="float: right; color: #f17171; padding: .3rem;"
            @click="delMethod(ind)"
            >删除</el-button>
        </div>
      </draggable>
      <el-button class="pub_btn" @click="handlePre">上一步</el-button>
      <el-button class="pub_btn" @click="publish" type="primary">提交</el-button>
    </div>
  </div>
</template>

<script>
import draggable from 'vuedraggable'
export default {
  data () {
    return {
      step: 1, // 当前进行的步骤是第几步
      dialogImageUrl: '',
      dialogVisible: false,
      activeNames: 1, // 选择需要展开的页面
      brands: [{
        label: '华为',
        value: 'Huawei',
        logo: 'http://src.xerrors.fun/blog/20200210/2CKAUviSNhTC.png',
        models: [{
          label: '华为 Mate30',
          value: 'Huawei Mate30',
          pic: 'http://src.xerrors.fun/blog/20191205/GkdvAxS04X5p.jpg'
        }, {
          label: '华为 Mate30 Pro',
          value: 'Huawei Mate30 Pro',
          pic: 'http://src.xerrors.fun/blog/20191205/8GxNLCE028ur.jpg'
        }, {
          label: '华为 P30 Pro',
          value: 'Huawei P30 Pro',
          pic: 'http://src.xerrors.fun/blog/20191205/6NLlz6Uh4kOP.jpg'
        }, {
          label: '华为 P20',
          value: 'Huawei P20',
          pic: 'http://src.xerrors.fun/blog/20191205/hkylCiingwk8.jpg'
        }, {
          label: '华为 P20 Pro',
          value: 'Huawei P20 Pro',
          pic: 'http://src.xerrors.fun/blog/20191205/np0cyDgrDGUa.jpg'
        }, {
          label: '华为 nova 5',
          value: 'Huawei nova 5',
          pic: 'http://src.xerrors.fun/blog/20191205/ohLmcuoR8uDR.jpg'
        }, {
          label: '华为 nova 5i',
          value: 'Huawei nova5i',
          pic: 'http://src.xerrors.fun/blog/20191205/krFcbP0foFDY.jpg'
        }, {
          label: '华为 Mate20 Pro',
          value: 'Huawei Mate20 Pro',
          pic: 'http://src.xerrors.fun/blog/20191205/HQrCJ2E5YgUG.jpg'
        }, {
          label: '华为 Mate20X',
          value: 'Huawei Mate20X',
          pic: 'http://src.xerrors.fun/blog/20191205/BXvNX7JUxN7J.jpg'
        }, {
          label: '华为 nova 4',
          value: 'Huawei nova 4',
          pic: 'http://src.xerrors.fun/blog/20191205/1b67CA7Ik7Rh.jpg'
        }]
      }, {
        label: '苹果',
        value: 'Apple',
        models: [{
          label: '苹果 iPhone 11',
          value: 'Apple iPhone 11',
          pic: 'http://src.xerrors.fun/blog/20191205/apBwU0F5rgtj.png'
        }, {
          label: '苹果 iPhone 11 Pro',
          value: 'Apple iPhone 11Pro',
          pic: 'http://src.xerrors.fun/blog/20191205/DxKdchnDRsr0.jpg'
        }, {
          label: '苹果 iPhone XR',
          value: 'Apple iPhone XR',
          pic: 'http://src.xerrors.fun/blog/20191205/behdUx7YSsxB.jpg'
        }, {
          label: '苹果 iPhone XS',
          value: 'Apple iPhone XS',
          pic: 'http://src.xerrors.fun/blog/20191205/VLYpH1lDmuIy.jpg'
        }, {
          label: '苹果 iPhone XS Max',
          value: 'Apple iPhone XS Max',
          pic: 'http://src.xerrors.fun/blog/20191205/8pzUj0gO6toz.jpg'
        }, {
          label: '苹果 iPhone X',
          value: 'Apple iPhone X',
          pic: 'http://src.xerrors.fun/blog/20191205/rTsv1UY6RJpG.jpg'
        }, {
          label: '苹果 iPhone8',
          value: 'Apple iPhone8',
          pic: 'http://src.xerrors.fun/blog/20191205/5CFS26IbcnOk.jpg'
        }, {
          label: '苹果 iPhone8 plus',
          value: 'Apple iPhone8 plus',
          pic: 'http://src.xerrors.fun/blog/20191205/xMQxCh33WnfG.jpg'
        }, {
          label: '苹果 iPhone7 plus',
          value: 'Apple iPhone7 plus',
          pic: 'http://src.xerrors.fun/blog/20191205/97sSD3OtU0AI.jpg'
        }, {
          label: '苹果 iPhone7',
          value: 'Apple iPhone7',
          pic: 'http://src.xerrors.fun/blog/20191205/akKmoi56t0tD.jpg'
        }]
      }, {
        label: 'OPPO',
        value: 'OPPO',
        models: [{
          label: 'OPPO Reno 2',
          value: 'OPPO Reno 2',
          pic: 'http://src.xerrors.fun/blog/20191205/o4GFn4kbbs6z.jpg'
        }, {
          label: 'OPPO Reno 2Z',
          value: 'OPPO Reno 2Z',
          pic: 'http://src.xerrors.fun/blog/20191205/bz4BF51IAIxH.jpg'
        }, {
          label: 'OPPO Reno Ace',
          value: 'OPPO Reno Ace',
          pic: 'http://src.xerrors.fun/blog/20191205/d8mdUSHIQlhI.jpg'
        }, {
          label: 'OPPO Reno',
          value: 'OPPO Reno',
          pic: 'http://src.xerrors.fun/blog/20191205/5QhJQn9FApnn.jpg'
        }, {
          label: 'OPPO FindX',
          value: 'OPPO FindX',
          pic: 'http://src.xerrors.fun/blog/20191205/2kAgbVsfn95Q.jpg'
        }, {
          label: 'OPPO R17 Pro',
          value: 'OPPO R17 Pro',
          pic: 'http://src.xerrors.fun/blog/20191205/IIi7RO1uUcHD.jpg'
        }, {
          label: 'OPPO R17',
          value: 'OPPO R17',
          pic: 'http://src.xerrors.fun/blog/20191205/oX8n3SF6AzG0.jpg'
        }, {
          label: 'OPPO K5',
          value: 'OPPO K5',
          pic: 'http://src.xerrors.fun/blog/20191205/INDCHIQRXiyU.jpg'
        }, {
          label: 'OPPO K3',
          value: 'OPPO K3',
          pic: 'http://src.xerrors.fun/blog/20191205/K14h2PYYP3qI.jpg'
        }, {
          label: 'OPPO A9',
          value: 'OPPO A9',
          pic: 'http://src.xerrors.fun/blog/20191205/sddMjiU8KD4X.jpg'
        }]
      }, {
        label: '小米',
        value: 'XiaoMi',
        models: [{
          label: '小米 Mix 2s',
          value: 'XiaoMi Mix 2s',
          pic: 'http://src.xerrors.fun/blog/20191205/FtCcpjPximET.jpg'
        }, {
          label: '小米 9',
          value: 'XiaoMi 9',
          pic: 'http://src.xerrors.fun/blog/20191205/MOfKo1zgb8Oo.jpg'
        }, {
          label: '小米 CC9 Pro',
          value: 'XiaoMi CC9 Pro',
          pic: 'http://src.xerrors.fun/blog/20191205/4SJASLfDAz0U.jpg'
        }, {
          label: '小米 CC9',
          value: 'XiaoMi CC9',
          pic: 'http://src.xerrors.fun/blog/20191205/em2LraiBV9Pg.jpg'
        }, {
          label: '小米 Note 2',
          value: 'XiaoMi Note 2',
          pic: 'http://src.xerrors.fun/blog/20191205/ABe2Bnidxk6u.jpg'
        }, {
          label: '小米 play',
          value: 'XiaoMi play',
          pic: 'http://src.xerrors.fun/blog/20191205/JNTp6HcAastG.jpg'
        }, {
          label: '小米 8',
          value: 'XiaoMi 8',
          pic: 'http://src.xerrors.fun/blog/20191205/0SxwNK2jU6nS.jpg'
        }, {
          label: '小米 9 SE',
          value: 'XiaoMi 9 SE',
          pic: 'http://src.xerrors.fun/blog/20191205/utUi3wrBqnCm.jpg'
        }, {
          label: '小米 Mix 3',
          value: 'XiaoMi Mix 3',
          pic: 'http://src.xerrors.fun/blog/20191205/ugSbTV1MApVx.jpg'
        }, {
          label: '小米 Mix',
          value: 'XiaoMi Mix',
          pic: 'http://src.xerrors.fun/blog/20191205/xCk5KsH8bzkC.jpg'
        }]
      }, {
        label: 'Vivo',
        value: 'Vivo',
        models: [{
          label: 'Vivo NEX',
          value: 'Vivo NEX',
          pic: 'http://src.xerrors.fun/blog/20191205/kiNjuNeWMEqe.jpg'
        }, {
          label: 'Vivo iQOO',
          value: 'Vivo iQOO',
          pic: 'http://src.xerrors.fun/blog/20191205/kf43oNfTLYDj.jpg'
        }, {
          label: 'Vivo S1 Pro',
          value: 'Vivo S1 Pro',
          pic: 'http://src.xerrors.fun/blog/20191205/lu0sFPIDJimd.jpg'
        }, {
          label: 'Vivo Nex 3',
          value: 'Vivo Nex 3',
          pic: 'http://src.xerrors.fun/blog/20191205/Rcj8lmX7gXgJ.jpg'
        }, {
          label: 'Vivo X27',
          value: 'Vivo X27',
          pic: 'http://src.xerrors.fun/blog/20191205/sixwLb5GX4ou.jpg'
        }, {
          label: 'Vivo X27 Pro',
          value: 'Vivo X27 Pro',
          pic: 'http://src.xerrors.fun/blog/20191205/Yajqe14uuT96.jpg'
        }, {
          label: 'Vivo S5',
          value: 'Vivo S5',
          pic: 'http://src.xerrors.fun/blog/20191205/omJ2DANyLhn5.jpg'
        }, {
          label: 'Vivo Z5',
          value: 'Vivo Z5',
          pic: 'http://src.xerrors.fun/blog/20191205/luztz3NkcNzG.jpg'
        }, {
          label: 'Vivo S1',
          value: 'Vivo S1',
          pic: 'http://src.xerrors.fun/blog/20191205/oyVN2pqCr2II.jpg'
        }, {
          label: 'Vivo Y7s',
          value: 'Vivo Y7s',
          pic: 'http://src.xerrors.fun/blog/20191205/FSWHLkA0NTqv.jpg'
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
        describe: '', // 用户填写的描述
        change: false, // 是否想要以旧换新
        methods: [{
          id: 1,
          name: '上门回收'
        }, {
          id: 2,
          name: '自行邮寄'
        }, {
          id: 3,
          name: '去线下门店'
        }] // 期望的回收方式
      }
    }
  },
  components: {
    draggable
  },
  methods: {
    title (select, ind) {
      const head = select.label + ' >>> '
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
      this.show_models = 1
    },
    // 当选项组改变之后处理的事件
    handleRadioChg (e) {
      // 可以根据上次所使用的东西进行更改下面的逻辑。例如保存到矩阵里面
      this.activeNames += 1
    },
    // 将回收方式设置为默认的
    setDef () {
      this.form.methods = [{
        id: 1,
        name: '上门回收'
      }, {
        id: 2,
        name: '自行邮寄'
      }, {
        id: 3,
        name: '去线下门店'
      }]
    },
    // 删除不想要的回收方式
    delMethod (ind) {
      if (this.form.methods.length === 1) {
        this.$message.error('至少有一种回收方式哦！')
      } else {
        this.form.methods.splice(ind, 1)
      }
    },
    // 提交操作 TODO:
    publish () {
      // 将手机的信息传到服务器，同时返还一个商品ID，然后界面跳转到商品详情界面
      this.$router.push('/price')
      // this.$router.push('/product/id_12138')
    }
  }
}
</script>

<style lang="stylus">
// 重写 ELementUI 的样式
.el-collapse-item__header
  font-size 1rem
</style>

<style lang="stylus" scoped>
.select
  width 80%
  min-width 30rem
  margin 0 auto
  >div>h4
    display inline-block
    background: linear-gradient(0deg, rgba(71, 207, 115, 0.5) 40%,#fff 0)
    padding .4rem
  .block
    .model_box
      border: 1px solid #f3f4f5;
      padding-bottom 2rem
      .tabs
        color color-text-title
        display flex
        align-items center
        .tab
          flex-grow 1
          border-top: 2px solid #f3f4f5;
          text-align center
          height 3rem
          line-height 3rem
          background #f3f4f5
          &:hover
            cursor pointer
        .tab_active
          background white
          border-top 2px solid mainColor
    .models
      width 100%
      display flex
      flex-flow wrap
      justify-content space-between
      align-items center
      transition all .5s ease
      .model
        width 12rem
        text-align center
        transition all .3s ease
        &:hover
          cursor pointer
          color mainColor
        &__img
          width 80%
          margin-top 1rem
          margin-bottom .5rem
          transition all .1s ease
          &:hover
            transform scale(1.01)
  .slim
    width 800px
    margin 0 auto
  .pub_btn
    margin-top 20px
  .methods
    border 1px solid #f2f2f2
    border-radius 4px
    margin .3rem 0
    padding .5rem
    background #f2f7fa
    &:hover
      cursor grabbing
</style>

<style lang="stylus">
// 对 ElementUI 的原本的样式进行修改
.el-radio-group
  margin-top 7px

.el-radio
  &.is-bordered:not(:last-child)
    margin-right 10px
  &.is-bordered
    padding 10px 10px
    height 34px
  &__inner
    display none
  &__label
    line-height 14px
    padding-left 0
</style>
