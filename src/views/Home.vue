<template>
  <div class="home">
    <h1 style="text-align: center;">这是主页</h1>
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
  name: 'home'
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
