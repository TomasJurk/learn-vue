import Vue from 'vue'
import App from './App.vue'
import 'bulma'

Vue.config.productionTip = false

new Vue({
  template: '<App/>',
  components: {
    App
  }
}).$mount('#app')
