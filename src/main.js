import Vue from 'vue'
import App from './App.vue'
import router from './config/routes'

new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
