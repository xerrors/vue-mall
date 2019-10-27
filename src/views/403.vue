<template>
  <div class="403">
    <h1>403 没有权限</h1>
    <p>将在 {{ timer }} 秒钟后返回主页</p>
  </div>
</template>

<script>
export default {
  data () {
    return {
      timer: 5
    }
  },
  mounted () {
    var intervalid = setInterval(() => {
      this.timer--
      if (this.timer === 0) {
        clearInterval(intervalid)
        this.$router.push('/')
      }
    }, 1000)
  }
}
</script>
