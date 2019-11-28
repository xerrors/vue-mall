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
    console.log(this.info)
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
  &:hover
    cursor pointer
</style>
