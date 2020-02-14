<template>
  <div>
    <div class="navbar">
      <router-link to="/"><img class="logo" src="Logo.png"></router-link>
      <div class="nav-links nav-right">
        <router-link to='/main' v-if="!isMerchant" class="nav-link" tag="div">回收设备</router-link>
        <router-link to='/merchant/main' v-else class="nav-link" tag="div">控制中心</router-link>
        <router-link v-if="token" to='/messages' class="nav-link" tag="div">消息中心</router-link>
        <router-link to='/about' class="nav-link" tag="div">关于我们</router-link>
      </div>
      <div v-if="!token">
        <el-button round plain @click="login"
          style="background: #47cf73; border: none; color: #000;"
          >登录</el-button>
      </div>
      <div v-else class="user-box">
        <span v-if="role==='merchant'" style="font-size: 14px; margin: 0 10px;">商家版</span>
        <span v-else style="font-size: 14px; margin: 0 10px;">用户版</span>
        <el-dropdown type="primary" @command="dropdownCmd">
          <el-badge :is-dot="user.unread" class="item">
            <el-avatar :src="avatar" style="border: 2px solid #f2f2f2;"></el-avatar>
          </el-badge>
          <el-dropdown-menu slot="dropdown">
            <el-badge :is-dot="user.unread" class="item">
              <el-dropdown-item command="msg">我的消息</el-dropdown-item>
            </el-badge>
            <el-dropdown-item command="profile">个人页面</el-dropdown-item>
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
    ...mapGetters(['token', 'avatar', 'role', 'showLogin']),
    isMerchant () {
      return this.role && this.role === 'merchant'
    },
    user () {
      var user = {
        unread: false
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
      // 跳转到消息中心去
      if (obj === 'msg') {
        this.$router.push('/messages')
      }

      // 跳转到对应的个人中心去
      if (obj === 'profile') {
        this.$router.push('/user/center')
      }

      // 实现登出功能，现在只写了前端部分
      if (obj === 'logout') {
        this.$store
          .dispatch('FedLogOut')
          .then(() => {
            this.$router.push('/')
            this.$message({
              message: '成功登出',
              type: 'success'
            })
          })
          .catch((err) => {
            this.$message('Navbar.vue', err)
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
  color navTextColor
  background-color navBgColor
  user-select none

  .logo
    height navBarHeight - 16px
    margin-right 30px

  .nav-links
    .nav-link
      position relative
      display inline-block
      line-height navIconSize - 6px
      margin 0 1.5rem
      font-weight bolder
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
        top 1px
        transform-origin center right
      &::after
        bottom 1px
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
    .my-msg
      font-size small
      padding 0 1rem
    .el-button, .el-dropdown
      margin 0 10px
      height navIconSize
      cursor pointer
</style>
