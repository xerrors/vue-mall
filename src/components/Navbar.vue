<template>
  <div>
    <login :is-show='!token'/>
    <div class="navbar">
      <router-link to="/"><img class="logo" src="https://upload.wikimedia.org/wikipedia/commons/5/53/Wikimedia-logo.png"></router-link>
      <div class="nav-links">
        <router-link to='/test' class="nav-link" tag="div">公关部门</router-link>
        <router-link to='/test' class="nav-link" tag="div">市场部门</router-link>
        <router-link to='/test' class="nav-link" tag="div">人力部门</router-link>
        <router-link to='/about' class="nav-link" tag="div">关于我们</router-link>
      </div>
      <div v-if="!token" class="nav-right">
        <el-button round plain @click="login">登录</el-button>
      </div>
      <div v-else class="user-box nav-right">
        <el-badge :is-dot="user.unread" class="item">
          <!-- TODO 消息功能 -->
          <el-link icon="el-icon-message-solid">消息</el-link>
        </el-badge>
        <el-dropdown type="primary" @command="dropdownCmd">
          <el-avatar :src="avatar"></el-avatar>
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item>我的主页</el-dropdown-item>
            <el-dropdown-item command="logout">退出登录</el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import Login from '@/components/Login.vue'

export default {
  nmae: 'nav-bar',
  components: {
    Login
  },
  computed: {
    ...mapGetters(['token', 'avatar']),
    user () {
      var user = {
        unread: true
      }
      return user
    }
  },
  methods: {
    login () {
      this.$store.state.showLogin = true
    },
    dropdownCmd (obj) {
      if (obj === 'logout') {
        this.$store
          .dispatch('FedLogOut')
          .then(() => {
            this.loading = false
          })
          .catch(err => {
            console.log(err)
            this.loading = false
          })
        this.$message({
          message: '成功登出',
          type: 'success'
        })
      }
    }
  }
}
</script>

<style lang="stylus">
.navbar
  display flex
  align-items center

  height navBarHeight
  padding 0 30px

  background-color navBgColor
  box-shadow cardShadow

  .logo
    width navIconSize
    height navIconSize
    margin-right 30px

  .nav-links
    .nav-link
      display inline-block
      line-height navIconSize
      margin 0 20px

      color navTextColor
      cursor pointer
    .el-avatar
      width navIconSize
      height navIconSize
  .nav-right
    margin-left auto

  .user-box
    display flex
    align-items center
    .el-button, .el-dropdown
      margin 0 10px
      height navIconSize
      cursor: pointer;
</style>
