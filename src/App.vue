<template>
  <div>
    <h2>{{ title }}</h2>
    <input type="text" v-model="searchName" />
    <ol>
      <li v-for="name of filteredNames" v-bind:key="name.id">{{name}}</li>
    </ol>
    <app-list></app-list>
  </div>
</template>

<script>
  import listMixin from './listMixin'
  export default {
    data(){
      return{
        title: 'Hello World!',     
      }
    },
    mixins: [listMixin]
  }
</script>

<style>

</style>
