<template>
  <div>
      <h2>List</h2>
      <input type="text" v-model="searchName" />
      <ol>
        <li v-for="name of filteredNames" v-bind:key="name.id">{{name}}</li>
      </ol>    
  </div>
</template>

<script>
  import listMixin from './listMixin'
  export default {
    mixins: [listMixin]
  }
</script>