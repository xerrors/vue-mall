<template>
  <div class="debug">
    <ul id="example-1">
      <li v-for="(a, b) in $store.state" :key='a'>
        {{ b }} - {{ a }}
      </li>
    </ul>
  </div>
</template>
