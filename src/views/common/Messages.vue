<template>
  <div class="msg">
    <div class="messages">
      <h2>消息管理</h2>
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
import { getMsgs } from '@/utils/fakedata.js'
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
    this.msgs = getMsgs()
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
