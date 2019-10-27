<template>
  <div>
    <div class="navbar">
      <router-link :to="'/' + roles + '/main'"><img class="logo" src="logo_dark.png"></router-link>
      <div class="nav-links">
        <router-link to='/bosstest' class="nav-link" tag="div" v-if="roles==='boss'">商户用例</router-link>
        <router-link to='/usertest' class="nav-link" tag="div" v-if="roles==='user'">用户用例</router-link>
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

export default {
  nmae: 'nav-bar',
  computed: {
    ...mapGetters(['token', 'avatar', 'roles', 'showLogin']),
    user () {
      var user = {
        unread: true
      }
      return user
    }
  },
  methods: {
    // 点击登录按钮触发
    login () {
      this.$store.state.showLogin = true
    },
    // 对于下拉菜单栏的指令进行处理
    dropdownCmd (obj) {
      // 跳转到对应的个人中心去
      if (obj === 'profile') {
        if (this.roles === 'user') {
          this.$router.push('/user/center')
        } else {
          this.$router.push('/boss/center')
        }
      }

      // 实现登出功能，现在只写了前端部分
      if (obj === 'logout') {
        this.$store
          .dispatch('FedLogOut')
          .then(() => {
            this.$router.push('/')
          })
          .catch(err => {
            console.log(err)
          })
        this.$message({
          message: '成功登出',
          type: 'success'
        })
      }
    }
  },
  mounted () {
    if (this.token) {
      // 防止页面刷新之后无法获取用户信息
      this.$store.dispatch('GetInfo')
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
  // box-shadow cardShadow
  border-bottom 1px solid #ccc
  user-select none

  .logo
    height navIconSize
    margin-right 30px

  .nav-links
    .nav-link
      position relative
      display inline-block
      line-height navIconSize - 10px
      margin 0 1.5rem

      color navTextColor
      cursor pointer

      &::before, &::after
        content ''
        position absolute
        left 0
        right 0
        height 2px
        background-color mainColor
        transform scaleX(0)
        transition transform 0.5s ease

      &::before
        top 0
        transform-origin center right
      &::after
        bottom 0
        transform-origin center left

      &:hover, &.active
        &::before
          transform-origin center left
          transform scaleX(1)
        &::after
          transform-origin center right
          transform scaleX(1)

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
      cursor pointer
</style>
