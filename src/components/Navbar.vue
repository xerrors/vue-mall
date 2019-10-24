<template>
  <div>
    <login :is-show='!token'/>
    <div class="navbar">
      <router-link to="/"><img class="logo" src="logo_dark.png"></router-link>
      <div class="nav-links">
        <router-link to='/test' class="nav-link" tag="div" v-if="roles==='boss'">商户用例</router-link>
        <router-link to='/test' class="nav-link" tag="div" v-else>用户用例</router-link>
        <router-link to='/about' class="nav-link" tag="div">关于我们</router-link>
      </div>
      <div v-if="!token" class="nav-right">
        <el-button round plain @click="login">登录</el-button>
      </div>
      <div v-else class="user-box nav-right">
        <el-badge :is-dot="user.unread" class="item">
          <!-- TODO 消息功能 -->
          <span v-if="roles==='boss'" style="font-size: 14px; margin: 0 10px;">商家版</span>
          <span v-else style="font-size: 14px; margin: 0 10px;">用户版</span>
          <el-link icon="el-icon-message-solid">消息</el-link>
        </el-badge>
        <el-dropdown type="primary" @command="dropdownCmd">
          <el-avatar :src="avatar"></el-avatar>
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item command="profile">我的主页</el-dropdown-item>
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
    ...mapGetters(['token', 'avatar', 'roles']),
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
      if (obj === 'profile') {
        if (this.roles === 'user') {
          this.$router.push('/user/profile')
        } else {
          this.$router.push('/boss/profile')
        }
      }
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
    height navIconSize
    margin-right 30px

  .nav-links
    .nav-link
      display inline-block
      line-height navIconSize
      margin 0 20px

      color navTextColor
      cursor pointer

      &:hover, &.active
        color mainColor

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
