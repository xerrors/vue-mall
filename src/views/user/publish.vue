<template>
  <div class="publish-container">
    <h1>Publish</h1>
    <button @click="test">Hello</button>
  </div>
</template>

<script>
export default {
  methods: {
    test () {
      console.log(this.$route)
      return 1
    }
  },
  updated () {
    this.test()
  }
}
</script>
