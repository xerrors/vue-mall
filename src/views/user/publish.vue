<template>
  <div class="publish">
    <div class="publish__top_box">
      <h1 class="publish__title">发布你的产品</h1>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    test () {
      console.log(this.$route)
      return 1
    }
  },
  updated () {
    this.test()
  }
}
</script>

<style lang="stylus" scoped>
.publish
  &__top_box
    position absolute
    left 0
    width 100vw
    height 20rem
    background-color navBgColor
  &__title
    padding-top 4rem
    color white
    text-align center
    font-size 3rem
</style>
