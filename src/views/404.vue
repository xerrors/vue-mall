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
      return "好像并没有找到这个界面。。。";
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
.page404-container {
  transform: translate(-50%, -50%);
  position: absolute;
  top: 40%;
  left: 50%;
}
.page404 {
  position: relative;
  width: 1200px;
  padding: 0 50px;
  border: 0;
  overflow: hidden;
  .img404 {
    position: relative;
    margin-right: 50px;
    float: left;
    width: 550px;
    overflow: hidden;
    opacity: 0;
    animation-name: slideUp;
    animation-duration: 0.5s;
    animation-delay: 0.1s;
    animation-fill-mode: forwards;
  }
  .errorcard {
    position: relative;
    float: left;
    width: 300px;
    padding: 30px 0;
    overflow: hidden;
    &__oops {
      font-size: 32px;
      font-weight: bold;
      line-height: 40px;
      color: #1482f0;
      opacity: 0;
      margin-bottom: 20px;
      animation-name: slideUp;
      animation-duration: 0.5s;
      animation-delay: 0.1s;
      animation-fill-mode: forwards;
    }
    &__headline {
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
    }
    &__info {
      font-size: 13px;
      line-height: 21px;
      color: grey;
      opacity: 0;
      margin-bottom: 30px;
      animation-name: slideUp;
      animation-duration: 0.5s;
      animation-delay: 0.3s;
      animation-fill-mode: forwards;
    }
    &__return-btn {
      opacity: 0;
      cursor: pointer;
      animation-name: slideUp;
      animation-duration: 0.5s;
      animation-delay: 0.4s;
      animation-fill-mode: forwards;
    }
    @keyframes slideUp {
      0% {
        transform: translateY(60px);
        opacity: 0;
      }
      100% {
        transform: translateY(0);
        opacity: 1;
      }
    }
  }
}
</style>
