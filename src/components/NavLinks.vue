<template>
  <div class="nav-links">
    <router-link to='/test' class="nav-link">Test</router-link>
    <router-link to='/test' class="nav-link">Test</router-link>
    <router-link to='/test' class="nav-link">Test</router-link>
    <div v-if="!logined" class="nav-right">
      <el-button round plain @click="logined = true">登录</el-button>
    </div>
    <div v-else class="user-box nav-right">
      <el-badge :is-dot="user.unread" class="item">
        <el-link icon="el-icon-bell">消息</el-link>
      </el-badge>
      <el-dropdown type="primary" @command="dropdownCmd">
        <el-avatar :src="user.avatar"></el-avatar>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item>我的主页</el-dropdown-item>
          <el-dropdown-item command="logout">退出登录</el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      logined: false
    }
  },
  computed: {
    user () {
      var user = {
        avatar: 'https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png',
        unread: true
      }
      return user
    }
  },
  methods: {
    dropdownCmd () {
      this.logined = false
    }
  }
}
</script>

<style lang="stylus">
nav-icon-size = 40px
.nav-links
  .nav-link
    display inline-block
  .user-avatar
    &__img
      width nav-icon-size
      height nav-icon-size
  .user-box
    display flex
    align-items center
    .el-button, .el-dropdown
      margin 8px
      height nav-icon-size
</style>
