<template>
  <div class="home">
    <h1 style="text-align: center;">这是主页</h1>
    <el-button @click="goCenter" v-if="$store.state.token">进入主页 {{ roles }}</el-button>
    <el-button @click="goLogin" v-else>去登录 {{ roles }}</el-button>
    <div class="test-ctn">
      <div class="test"></div>
      <div class="test"></div>
      <div class="test"></div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
export default {
  name: 'home',
  computed: {
    roles () {
      return this.$store.state.roles || '无'
    }
  },
  methods: {
    goCenter () {
      this.$router.push('/' + this.$store.state.roles + '/main')
    },
    goLogin () {
      this.$store.state.showLogin = true
    }
  }
}
</script>

<style scoped>
.test {
  height: 100vh;
  border: 1px solid #ccc
}

.test-ctn:nth-child(even) {
  background-color: #fff;
}
</style>
