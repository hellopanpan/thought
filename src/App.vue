<template>
  <div id="app">
    <Main />
  </div>
</template>

<script>
import Main from './views/main/index.vue'

export default {
  name: 'App',
  components: {
    Main
  }
}
</script>

<style lang="less">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 0px;
}
</style>
