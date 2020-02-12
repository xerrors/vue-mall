<template>
  <div class="card_body" @click="checkDetails">
    <div class="left">
      <h3 class="title">{{ info.model.label }}</h3>
      <div class="tags">
      </div>
      <small class="info">发布于 {{ info.date }}</small>
    </div>
    <div class="pic"></div>
  </div>
</template>

<script>
export default {
  props: ['info'],
  data () {
    return {

    }
  },
  methods: {
    checkDetails () {
      this.$router.push('/product/id_' + this.info.id)
    }
  },
  mounted () {
    // cosole.log(this.info)
  }
}
</script>

<style lang="stylus" scoped>
.card_body
  background white
  display flex
  justify-content space-between
  width 40rem
  height 8rem
  margin-top 5rem
  border 1px solid #ccc
  border-radius 4px
  .left
    display flex
    justify-content space-between
    flex-direction column
    padding 1rem
    .title
      height 20%
      margin .5rem 0
    .tags
      height 60%
      span
        background rgba(88, 220, 117, .2)
        padding .5rem
        font-size small
        border-radius .3rem
        margin-right .5rem
    .info
      height 20%
      font-size smaller
      color #666
  .pic
    width 8rem
    height 100%
    background #ddd
  &:hover
    cursor pointer
</style>
