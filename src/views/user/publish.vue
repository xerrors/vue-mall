<template>
  <div class="publish">
    <div class="publish__top_box">
      <h1 class="publish__title">发布你的产品</h1>
    </div>
    <!-- TODO: 组件化 -->
    <!-- 选择机型 -->
    <div class="select">
      <div v-if="step==1" class="block">
        <h4 class="demonstration">选择你的机型：</h4>
        <!-- <el-cascader
          placeholder="试试搜索：Mate20"
          v-model="model"
          :options="options"
          filterable
          @change="mdSelected"></el-cascader>
        <el-button class="pub_btn" @click="handleNext" type="primary">></el-button> -->
        <el-cascader-panel
          v-model="model"
          :options="options"
          @change="mdSelected"></el-cascader-panel>
        <el-button class="pub_btn" @click="handleNext" type="primary">下一步</el-button>
      </div>
      <!-- 选择手机的情况信息 -->
      <div v-if="step==2">
        <h4>根据手机情况选择</h4>
        <el-collapse v-model="activeNames" accordion>
          <el-collapse-item
            v-for="(select, ind) in selections" :key="ind"
            :title="title(select, ind)"
            :name="select.value">
            <el-radio-group v-model="selected[ind]">
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
          v-model="describe">
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
      dialogImageUrl: '',
      dialogVisible: false,
      selected: [], // 记录用户的选择
      activeNames: ['0'], // 选择需要展开的页面
      model: [], // 保存用户的机型信息
      describe: '', // 哟用户填写的描述
      step: 1, // 当前进行的步骤是第几步
      options: [{
        value: 'zhinan',
        label: '指南',
        children: [{
          value: 'shejiyuanze',
          label: '设计原则',
          children: [{
            value: 'yizhi',
            label: '一致'
          }, {
            value: 'fankui',
            label: '反馈'
          }, {
            value: 'xiaolv',
            label: '效率'
          }, {
            value: 'kekong',
            label: '可控'
          }]
        }, {
          value: 'daohang',
          label: '导航',
          children: [{
            value: 'cexiangdaohang',
            label: '侧向导航'
          }, {
            value: 'dingbudaohang',
            label: '顶部导航'
          }]
        }]
      }, {
        value: 'zujian',
        label: '组件',
        children: [{
          value: 'basic',
          label: 'Basic',
          children: [{
            value: 'layout',
            label: 'Layout 布局'
          }, {
            value: 'color',
            label: 'Color 色彩'
          }, {
            value: 'typography',
            label: 'Typography 字体'
          }, {
            value: 'icon',
            label: 'Icon 图标'
          }, {
            value: 'button',
            label: 'Button 按钮'
          }]
        }, {
          value: 'form',
          label: 'Form',
          children: [{
            value: 'radio',
            label: 'Radio 单选框'
          }, {
            value: 'checkbox',
            label: 'Checkbox 多选框'
          }, {
            value: 'input',
            label: 'Input 输入框'
          }, {
            value: 'input-number',
            label: 'InputNumber 计数器'
          }, {
            value: 'select',
            label: 'Select 选择器'
          }, {
            value: 'cascader',
            label: 'Cascader 级联选择器'
          }, {
            value: 'switch',
            label: 'Switch 开关'
          }, {
            value: 'slider',
            label: 'Slider 滑块'
          }, {
            value: 'time-picker',
            label: 'TimePicker 时间选择器'
          }, {
            value: 'date-picker',
            label: 'DatePicker 日期选择器'
          }, {
            value: 'datetime-picker',
            label: 'DateTimePicker 日期时间选择器'
          }, {
            value: 'upload',
            label: 'Upload 上传'
          }, {
            value: 'rate',
            label: 'Rate 评分'
          }, {
            value: 'form',
            label: 'Form 表单'
          }]
        }, {
          value: 'data',
          label: 'Data',
          children: [{
            value: 'table',
            label: 'Table 表格'
          }, {
            value: 'tag',
            label: 'Tag 标签'
          }, {
            value: 'progress',
            label: 'Progress 进度条'
          }, {
            value: 'tree',
            label: 'Tree 树形控件'
          }, {
            value: 'pagination',
            label: 'Pagination 分页'
          }, {
            value: 'badge',
            label: 'Badge 标记'
          }]
        }, {
          value: 'notice',
          label: 'Notice',
          children: [{
            value: 'alert',
            label: 'Alert 警告'
          }, {
            value: 'loading',
            label: 'Loading 加载'
          }, {
            value: 'message',
            label: 'Message 消息提示'
          }, {
            value: 'message-box',
            label: 'MessageBox 弹框'
          }, {
            value: 'notification',
            label: 'Notification 通知'
          }]
        }, {
          value: 'navigation',
          label: 'Navigation',
          children: [{
            value: 'menu',
            label: 'NavMenu 导航菜单'
          }, {
            value: 'tabs',
            label: 'Tabs 标签页'
          }, {
            value: 'breadcrumb',
            label: 'Breadcrumb 面包屑'
          }, {
            value: 'dropdown',
            label: 'Dropdown 下拉菜单'
          }, {
            value: 'steps',
            label: 'Steps 步骤条'
          }]
        }, {
          value: 'others',
          label: 'Others',
          children: [{
            value: 'dialog',
            label: 'Dialog 对话框'
          }, {
            value: 'tooltip',
            label: 'Tooltip 文字提示'
          }, {
            value: 'popover',
            label: 'Popover 弹出框'
          }, {
            value: 'card',
            label: 'Card 卡片'
          }, {
            value: 'carousel',
            label: 'Carousel 走马灯'
          }, {
            value: 'collapse',
            label: 'Collapse 折叠面板'
          }]
        }]
      }, {
        value: 'ziyuan',
        label: '资源',
        children: [{
          value: 'axure',
          label: 'Axure Components'
        }, {
          value: 'sketch',
          label: 'Sketch Templates'
        }, {
          value: 'jiaohu',
          label: '组件交互文档'
        }]
      }]
    }
  },
  methods: {
    title (select, ind) {
      const head = select.label + ' : '
      let tail = ''
      if (select.options[this.selected[ind]]) {
        tail = select.options[this.selected[ind]].label
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
    // 处理下一步交互逻辑
    handleNext () {
      // TODO:如果当前界面的信息没有填完，无法进入下一步
      this.step += 1
    },
    // 处理上一步交互逻辑
    handlePre () {
      this.step -= 1
    },
    // 提交操作 TODO:
    publish () {
      // 将手机的信息传到服务器，同时返还一个商品ID，然后界面跳转到商品详情界面

    }
  },
  computed: {
    selections () {
      // TODO: 数据用例
      return [{
        label: '手机状态',
        value: 'status',
        selected: 0,
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
        label: '手机状态',
        value: 'status1',
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
        label: '手机状态',
        value: 'status2',
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
        label: '手机状态',
        value: 'status3',
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
      }]
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

  .select
    width 60%
    min-width 30rem
    margin 0 auto

    .pub_btn
      margin-top 20px
</style>
