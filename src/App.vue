<template>
  <div>
    <h2>Form inputs</h2>
    <textarea v-model.lazy='textarea'></textarea>
    <p>{{ textarea }}</p>
  </div>
</template>

<script>
  export default {
    data(){
      return{
        textarea: 'I am initial text',
      }
    }
  }
</script>

<style scoped>
  textarea{
    height: 100px;
    width:300px;
  }
  p{
    white-space: pre;
  }
</style>
