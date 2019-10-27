<template>
  <div class="debug">
    <p>调试信息</p>
    <ul id="example-1">
      <li v-for="(a, b) in $store.state" :key='b'>
        {{ b }} : {{ a }}
      </li>
    </ul>
  </div>
</template>
