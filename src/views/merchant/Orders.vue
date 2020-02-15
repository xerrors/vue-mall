<template>
  <div class="orders">
    123
  </div>
</template>

<script>
export default {
  data () {
    return {
      test: 1213
    }
  }
}
</script>

<style lang="stylus" scoped>
.orders
  width 80%
  max-width 900px
  min-width 700px
  .order-card
    padding 1rem
    margin 20px auto
    box-shadow 0 1px 20px 0 rgba(0,0,0,.05)
    border-radius 6px
    display grid
    grid-template-columns 1fr 1fr 1fr 1fr 1fr
    align-items center
    .item
      text-align center
      line-height 1.7
      :first-child
        font-weight 600

    .item:not(:last-child)
      border-right 1px dashed #f2f3f4
      background green
</style>
