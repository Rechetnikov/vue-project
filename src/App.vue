<template>
  <div>
    <h2>Form inputs</h2>
    <app-onoff v-model="switched"></app-onoff>
    <div>
      <h3 v-if="switched">Включено</h3>
      <h3 v-else>Выключено</h3>
    </div>
  </div>
</template>

<script>
  import Onoff from './Onoff'
  export default {
    data(){
      return{
        switched: false
      }
    },
    components: {
      appOnoff: Onoff
    }
  }
</script>

<style scoped>

</style>
