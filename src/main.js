import Vue from "vue";
import VueResourse from 'vue-resource'
import App from "./App.vue";

Vue.use(VueResourse)

new Vue({
  render: (h) => h(App),
}).$mount("#app");
