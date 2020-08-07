<template>
  <div>
    <h1>Car id: {{id}}</h1>
    <ul class="list-group">
      <router-link
        class="list-group-item"
        active-class="list-group-item-success"
        tag="li"
        v-for="car in 5"
        :to="'/car/' + car"
        :key="car"
      >
        <a class="text-success">Car: {{car}}</a>
      </router-link>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      // id: this.$router.currentRoute.params["id"],
      id: this.$route.params["id"],
    };
  },
  watch: {
    $route(toR) {
      this.id = toR.params["id"];
    },
  },
};
</script>

<style scoped>
</style>