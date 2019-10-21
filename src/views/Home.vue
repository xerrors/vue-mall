<template>
  <div class="home">
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
