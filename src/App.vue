<template>
  <div>
    <h2>Form inputs</h2>

    <select v-model="social">
      <option 
        v-for="s of socialList" 
        v-bind:key="s.id"
        :selected = "s === defaultSocial"
      >{{ s }}</option>
    </select> <hr />
    {{ social }}
  </div>
</template>

<script>
  export default {
    data(){
      return{
        defaultSocial: 'Vk',
        social: 'Vk',
        socialList: ['Instagram', 'Vk', 'Facebook']
      }
    }
  }
</script>

<style scoped>

</style>
