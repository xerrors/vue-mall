<template>
  <div class="page404-container">
    <div class="page404">
      <img class="img404" src="@/assets/error404.png" alt="404">
      <div class="errorcard">
        <div class="errorcard__oops">OOPS!</div>
        <div class="errorcard__headline">{{ message }}</div>
        <div class="errorcard__info">请检查您输入的网址是否正确，点击以下按钮返回主页</div>
        <el-button type="primary" round class="errorcard__return-btn" @click="retHome">返回主页</el-button>
      </div>
    </div>
  </div>
</template>

<script>
/* eslint-disable */
export default {
  name: "Page404",
  computed: {
    message() {
      return "页面似乎不存在~~~";
    }
  },
  methods: {
    retHome() {
      this.$router.push("/");
    }
  }
};
</script>

<style lang="stylus" scoped>
.page404
  display flex
  align-items center
  justify-content center
  flex-wrap wrap

  height 100vh
  overflow: hidden

  .img404
    opacity: 0;
    display inline-block

    animation-name: slideUp;
    animation-duration: 0.5s;
    animation-delay: 0.1s;
    animation-fill-mode: forwards

    object-fit scale-down
    width 50vw
    min-width 400px
    max-width 600px

  .errorcard
    float: left;
    width: 30vw;
    min-width 400px
    margin-left 30px
    overflow: hidden;
    &__oops
      font-size: 32px;
      font-weight: bold;
      line-height: 40px;
      color: mainColor;
      opacity: 0;
      margin-bottom: 20px;
      animation-name: slideUp;
      animation-duration: 0.5s;
      animation-delay: 0.1s;
      animation-fill-mode: forwards;
    &__headline
      font-size: 20px;
      line-height: 24px;
      color: #222;
      font-weight: bold;
      opacity: 0;
      margin-bottom: 10px;
      animation-name: slideUp;
      animation-duration: 0.5s;
      animation-delay: 0.2s;
      animation-fill-mode: forwards;

    &__info
      font-size: 0.8rem;
      line-height: 1.5rem;
      color: grey;
      opacity: 0;
      margin-bottom: 2rem;
      animation-name: slideUp;
      animation-duration: 0.5s;
      animation-delay: 0.3s;
      animation-fill-mode: forwards;
    &__return-btn
      opacity: 0;
      cursor: pointer;
      animation-name: slideUp;
      animation-duration: 0.5s;
      animation-delay: 0.4s;
      animation-fill-mode: forwards;

    @keyframes slideUp
      0%
        transform: translateY(60px);
        opacity: 0;

      100%
        transform: translateY(0);
        opacity: 1;
</style>
