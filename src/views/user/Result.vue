<template>
  <div class="result">
    <div class="loading-mask" v-if="loading">
      <div class="lds-ripple"><div></div><div></div></div>
    </div>
    没想好最终以什么形式展现，所以暂时先空着
  </div>
</template>

<script>
export default {
  data () {
    return {
      loading: true
    }
  },
  mounted () {
    // 向后端请求数据
    setTimeout(() => {
      this.loading = false
    }, 3000)
  }
}
</script>

<style scoped>
.loading-mask {
    width: 100%;
    height: 100vh;
    position: absolute;
    left: 0;
    top: 0;
    background: white;
    display: flex;
    align-items: center;
    justify-content: center;
}
.lds-ripple {
  display: inline-block;
  position: relative;
  width: 80px;
  height: 80px;
}
.lds-ripple div {
  position: absolute;
  border: 4px solid #47cf73;
  opacity: 1;
  border-radius: 50%;
  animation: lds-ripple 1s cubic-bezier(0, 0.2, 0.8, 1) infinite;
}
.lds-ripple div:nth-child(2) {
  animation-delay: -0.5s;
}

.lds-ripple::after {
  color: #36323d;
  content: '正在匹配最佳回收点';
  display: block;
  position: relative;
  top: 100px;
  margin: 0 auto;
  text-align: center;
}

@keyframes lds-ripple {
  0% {
    top: 36px;
    left: 36px;
    width: 0;
    height: 0;
    opacity: 1;
  }
  100% {
    top: 0px;
    left: 0px;
    width: 72px;
    height: 72px;
    opacity: 0;
  }
}
</style>
