<template>
  <div>
    <h2>Form inputs</h2>

    <label>
      <input type="checkbox" value="instagram" v-model="social" /> Instagram
    </label><hr />

    <label>
      <input type="checkbox" value="vk" v-model="social" /> Vk
    </label><hr />

    <label>
      <input type="checkbox" value="facebook" v-model="social" /> Facebook
    </label><hr />

    <ol>
      <li v-for="s in social" v-bind:key="s.id">{{s}}</li>  
    </ol>

  </div>
</template>

<script>
  export default {
    data(){
      return{
        social: ["vk"]
      }
    }
  }
</script>

<style scoped>

</style>
