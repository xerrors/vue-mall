<template>
  <div class="card_body">
    <div class="left">
      <h3 class="title">HUAWEI Mate 30 Pro</h3>
      <div class="tags">
        <span>6+128G</span>
        <span>5G</span>
        <span>幻夜黑</span>
      </div>
      <small class="info">发布于 2019年10月28日</small>
    </div>
    <div class="pic"></div>
  </div>
</template>

<style lang="stylus" scoped>
.card_body
  background #f7f7f7
  display flex
  justify-content space-between
  width 40rem
  height 8rem
  margin-top 5rem
  padding 2rem
  border 1px solid #ccc
  border-radius 4px
  .left
    display flex
    justify-content space-between
    flex-direction column
  .title
    grid-area title
    height 20%
    margin 1rem 0
  .tags
    grid-area tags
    height 60%
    span
      background rgba(88, 220, 117, .2)
      padding .5rem
      font-size small
      border-radius .3rem
      margin-right .5rem
  .info
    height 20%
    grid-area info
    font-size smaller
    color #666
  .pic
    grid-area pic
    width 10rem
    height 8rem
    background #ddd
</style>
