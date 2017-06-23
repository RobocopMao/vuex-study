<template>
  <div id="app">
    <counter></counter>
    <todo></todo>
  </div>
</template>

<script>
  import Counter from './Counter.vue'
  import Todo from './Todo.vue'
  export default {
    name: 'app',
    components: {
        Counter,
        Todo
    }
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
