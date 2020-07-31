import Vue from 'vue'
import Vuelidate from 'vuelidate'
import VueRouter from 'vue-router'
import App from './App.vue'

Vue.use(Vuelidate)
Vue.use(VueRouter)

new Vue({
  render: h => h(App),
}).$mount('#app')
