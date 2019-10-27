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
