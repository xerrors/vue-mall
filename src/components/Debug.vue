<template>
  <div class="debug">
    <p>调试信息</p>
    <ul id="example-1">
      <li v-for="(a, b) in $store.state" :key='b'>
        {{ b }} : {{ a }}
      </li>
    </ul>
    <p>权限信息</p>
    <ul v-if="$route.meta.roles">
      <li v-for="item in $route.meta.roles" :key="item" >{{ item }}</li>
    </ul>
  </div>
</template>

<style lang="stylus" scoped>
*
  display none
p
  margin 0
  font-weight bold
  color #AA2222
ul
  padding-left 2px
  li
    list-style none
    padding-left 0
    white-space: nowrap;
    text-overflow: ellipsis;
</style>
