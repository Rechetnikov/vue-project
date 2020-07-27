<template>
  <div>
    <h2>Form inputs</h2>

    <label>
      <input type="radio" value="instagram" v-model="social" /> Instagram
    </label><hr />

    <label>
      <input type="radio" value="vk" v-model="social" /> Vk
    </label><hr />

    <label>
      <input type="radio" value="facebook" v-model="social" /> Facebook
    </label><hr />

    <p>{{social}}</p>

  </div>
</template>

<script>
  export default {
    data(){
      return{
        social: "vk"
      }
    }
  }
</script>

<style scoped>

</style>
