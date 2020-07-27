<template>
  <div id="app">
    <h2 v-colored:background.font="'red'">{{title}}</h2><hr />
    <h2 v-colored:color.delay.font="'blue'">{{title}}</h2>
  </div>
</template>

<script>
  export default {
    name: 'App',
    data(){
      return{
        title: 'Hello World!'
      }
    }
  }
</script>

<style>

</style>
