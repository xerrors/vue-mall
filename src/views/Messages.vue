<template>
  <div class="msg">
    <div class="msg__top_box">
      <h1 class="msg__title">消息管理</h1>
    </div>
      <div class="messages">
        <div class="messages__box"
          :class="{ messages_readed : msg.readed }"
          v-for="msg in msgs" :key='msg'
          @click="openMsg(msg)">
          <el-badge :is-dot="!msg.readed" style="width: 100%;">
            {{ msg.title }}
          </el-badge>
        </div>
      </div>
  </div>
</template>

<script>
// import { getMsg } from '@/api/user'
// import Date from '@/utils/datetime'
export default {
  data () {
    return {
      msgs: []
    }
  },
  methods: {
    openMsg (item) {
      if (item.magType === 'text') {
        this.$alert(item.content, '消息详情', {
          confirmButtonText: '朕已阅',
          callback: () => {
            // 消息已读，发送到服务器
            item.readed = true
          }
        })
      } else if (item.magType === 'product') {
        item.readed = true
        this.$router.push('/product/id_' + item.productID)
      } else if (item.magType === 'web') {
        window.open(item.link)
      }
    }
  },
  mounted () {
    // TODO: 从服务端获取消息
    // getMsg(this.$store.state.token, this.$store.state.roles).then((res) => {
    //   this.msgs = res.data.msgs
    // })
    // var time1 = new Date().format('yyyy-MM-dd hh:mm:ss')
    // console.log(time1)
    this.msgs = [{
      date: '',
      readed: false,
      profucer: 'admin',
      reveiver: 'everyone',
      magType: 'text', // text | product | web page
      title: '系统测试提醒：系统将于2020年2月31日进行系统维护！',
      content: '系统测试提醒：系统将于2020年2月31日进行系统维护，届时系统将无法进入！维护时长为 1000分钟！感谢您的理解！'
    }, {
      date: '',
      readed: false,
      profucer: '12138',
      reveiver: '12139',
      magType: 'product', // text | product | web page
      title: '产品提醒：有人对你发布的商品感兴趣并进行了出价，请查看！',
      productID: '12138' // 产品的ID
    }, {
      date: '',
      readed: true,
      profucer: 'admin',
      reveiver: 'everyone',
      magType: 'web', // text | product | web page
      title: '第一届易传扯淡大会即将召开，点击进入主会场 >>',
      link: 'http://www.baidu.com' // 外部的链接
    }]
  }
}
</script>

<style lang="stylus" scoped>
.msg
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
  .messages
    width 70%
    min-width 50rem
    margin 0 auto
    pading 1rem
    &__box
      color text-color-primary
      min-height 1rem
      background: #f5f5f5;
      border-radius 4px
      margin 1rem
      padding 1rem
      transition all .2s ease
      &:hover
        cursor pointer
        color link-color-primary
    .messages_readed
      color text-color-secondary
</style>
