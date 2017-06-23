<template>
  <div id="app">
    <counter></counter>
  </div>
</template>

<script>
  import Counter from './Counter.vue'
  export default {
    name: 'app',
    components: { Counter }
  }
</script>

<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
