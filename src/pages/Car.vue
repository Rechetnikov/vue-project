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
    <br />
    <button class="btn btn-sm btn-success mb-2" @click="goCarToBack">Назад</button>
    <br />
    <router-link
      tag="button"
      class="btn btn-info mt-2"
      :to="{name: 'carFull', params: {id: id}, query:{name: 'Mazda', year: '2000'}}"
    >Просмотр</router-link>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  methods: {
    goCarToBack() {
      this.$router.push("/cars");
    },
  },
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