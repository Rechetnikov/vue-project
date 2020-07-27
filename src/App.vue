<template>
  <div>
    <h2>{{ title }}</h2>
    <input type="text" v-model="searchName" />
    <ol>
      <li v-for="name of filteredNames" v-bind:key="name.id">{{name}}</li>
    </ol>
  </div>
</template>

<script>
  export default {
    data(){
      return{
        title: 'Hello World!',
        searchName: '',
        names: ['Vlad', 'Max', 'Elena', 'Igor', 'Sergey']
      }
    },
    computed:{
      filteredNames(){
        return this.names.filter(name => {
          return name.toLowerCase().indexOf(this.searchName.toLowerCase()) !== -1
        })
      }
    }
  }
</script>

<style>

</style>
