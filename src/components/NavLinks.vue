<template>
  <div class="nav-links">
    <router-link to='/test'>Test</router-link>
    <router-link to='/test'>Test</router-link>
    <router-link to='/test'>Test</router-link>
    <router-link v-if="!online" to='/test'>登录/注册</router-link>
    <span v-else class="user-avatar">
      <img class="user-avatar__img" :src="user.avatar">
    </span>
  </div>
</template>

<script>
export default {
  data () {
    return {
      online: true
    }
  },
  computed: {
    user () {
      var user = {
        avatar: 'http://img3.imgtn.bdimg.com/it/u=4095182135,769981712&fm=26&gp=0.jpg'
      }
      return user
    }
  }
}
</script>

<style lang="stylus">
.nav-links
  display flex
  align-items center
  justify-content space-between
  .user-avatar
    &__img
      width 40px
      height 40px
</style>
