import Vue from 'vue'
import App from './App.vue'
import List from './List.vue'

Vue.component('app-list', List)

Vue.mixin({
  beforeCreate(){
    console.log('beforeCreated');
  }
});

new Vue({
  render: h => h(App),
}).$mount('#app')
