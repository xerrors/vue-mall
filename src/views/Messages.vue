<template>
  <div class="msg">
    <div class="msg__top_box">
      <h1 class="msg__title">消息管理</h1>
    </div>

    <div class="messages">
      <div class="messages__box" v-for="msg in msgs" :key='msg'>
        {{ msg }}
      </div>
    </div>
  </div>
</template>

<script>
// import { getMsg } from '@/api/user'
export default {
  data () {
    return {
      msgs: []
    }
  },
  mounted () {
    // TODO: 从服务端获取消息
    // getMsg(this.$store.state.token, this.$store.state.roles).then((res) => {
    //   this.msgs = res.data.msgs
    // })
    this.msgs = [
      '这是用来测试的，仅仅是用来测试使用的。',
      '这是用来测试的，仅仅是用来测试使用的。',
      '这是用来测试的，仅仅是用来测试使用的。',
      '这是用来测试的，仅仅是用来测试使用的。',
      '这是用来测试的，仅仅是用来测试使用的。这是用来测试的，仅仅是用来测试使用的。这是用来测试的，仅仅是用来测试使用的。这是用来测试的，仅仅是用来测试使用的。这是用来测试的，仅仅是用来测试使用的。这是用来测试的，仅仅是用来测试使用的。这是用来测试的，仅仅是用来测试使用的。这是用来测试的，仅仅是用来测试使用的。这是用来测试的，仅仅是用来测试使用的。这是用来测试的，仅仅是用来测试使用的。这是用来测试的，仅仅是用来测试使用的。这是用来测试的，仅仅是用来测试使用的。这是用来测试的，仅仅是用来测试使用的。这是用来测试的，仅仅是用来测试使用的。这是用来测试的，仅仅是用来测试使用的。这是用来测试的，仅仅是用来测试使用的。这是用来测试的，仅仅是用来测试使用的。这是用来测试的，仅仅是用来测试使用的。这是用来测试的，仅仅是用来测试使用的。这是用来测试的，仅仅是用来测试使用的。',
      '这是用来测试的，仅仅是用来测试使用的。',
      '这是用来测试的，仅仅是用来测试使用的。',
      '这是用来测试的，仅仅是用来测试使用的。',
      '这是用来测试的，仅仅是用来测试使用的。',
      '这是用来测试的，仅仅是用来测试使用的。',
      '这是用来测试的，仅仅是用来测试使用的。',
      '这是用来测试的，仅仅是用来测试使用的。',
      '这是用来测试的，仅仅是用来测试使用的。',
      '这是用来测试的，仅仅是用来测试使用的。',
      '这是用来测试的，仅仅是用来测试使用的。'
    ]
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
      min-height 2rem
      border 1px solid #ccc
      border-radius 4px
      margin 1rem
      padding 1rem
</style>
