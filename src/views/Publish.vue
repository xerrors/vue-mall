<template>
  <div class="select">
    <el-steps :active="step" simple>
      <el-step title="选择机型" icon="el-icon-picture"></el-step>
      <el-step title="填写信息" icon="el-icon-s-platform"></el-step>
      <el-step title="完善信息" icon="el-icon-s-flag"></el-step>
    </el-steps>
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
          <div class="tab" @click="others">其他</div>
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
              v-for="(option, index) in select[1]" :key="index"
              :label="index"
              border>{{ option }}</el-radio>
          </el-radio-group>
        </el-collapse-item>
      </el-collapse>
      <!-- 添加手机的照片，必选项 -->
      <h4>添加手机正面、背面、边框的照片</h4>
      <el-upload
        action="https://jsonplaceholder.typicode.com/posts/"
        list-type="picture-card"
        :before-upload="onBeforeUpload"
        multiple
        accept="image/jpeg,image/gif,image/png"
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
          {{ ind + 1 }} : {{element.name}}
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
// import { getBrands } from '@/api/product'
import { getBrands, getSelections } from '@/api/product'
export default {
  data () {
    return {
      step: 1, // 当前进行的步骤是第几步
      dialogImageUrl: '',
      dialogVisible: false,
      activeNames: 1, // 选择需要展开的页面
      brands: [],
      selections: [],
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
          name: '上门取货'
        }, {
          id: 2,
          name: '自行邮寄'
        }, {
          id: 3,
          name: '线下门店'
        }] // 期望的回收方式
      }
    }
  },
  components: {
    draggable
  },
  methods: {
    getBrand () {
      return new Promise((resolve, reject) => {
        getBrands().then(res => {
          this.brands = res.info.brands
        }).catch(err => {
          reject(err)
        })
      })
    },
    getSelection () {
      return new Promise((resolve, reject) => {
        getSelections().then(res => {
          this.selections = Object.entries(res.info)
          resolve()
        }).catch(err => {
          reject(err)
        })
      })
    },
    title (select, ind) {
      const head = select[0] + ' > '
      let tail = ''
      if (select[1][this.form.selected[ind]]) {
        tail = select[1][this.form.selected[ind]]
      } else {
        tail = '待选择'
      }
      return head + tail
    },
    others () {
      this.$message('开发中')
    },
    handleChange (value) {
      this.$message('开发中')
    },
    onBeforeUpload (file) {
      const isIMAGE = file.type === 'image/jpeg' || 'image/gif' || 'image/png'
      const isLt1M = file.size / 1024 / 1024 < 5

      if (!isIMAGE) {
        this.$message.error('上传文件只能是图片格式!')
      }
      if (!isLt1M) {
        this.$message.error('上传文件大小不能超过 5MB!')
      }
      return isIMAGE && isLt1M
    },
    // 移除图片时
    handleRemove (file, fileList) {
      this.$message('开发中')
    },
    handlePictureCardPreview (file) {
      this.dialogImageUrl = file.url
      this.dialogVisible = true
    },
    handleSelectModel (model) {
      this.form.model = model
      scrollTo(0, 0) // 回到顶部，不会太尬
      this.step += 1
    },
    // 处理下一步交互逻辑
    handleNext () {
      // TODO:如果当前界面的信息没有填完，无法进入下一步
      scrollTo(0, 0) // 回到顶部，不会太尬
      this.step += 1
    },
    // 处理上一步交互逻辑
    handlePre () {
      this.step -= 1
    },
    // 切换品牌之后
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
        name: '上门取货'
      }, {
        id: 2,
        name: '自行邮寄'
      }, {
        id: 3,
        name: '线下门店'
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
      console.log(this.form)
      this.$router.push('/result')
    }
  },
  mounted () {
    this.getBrand()
    this.getSelection()
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
  min-width 800px
  margin 0 auto
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
      display grid
      grid-template-columns: repeat(auto-fill, 170px)
      justify-content space-evenly
      transition all .5s ease
      .model
        width 12rem
        height 14rem
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
