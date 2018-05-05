import Vue from 'vue'
import VueRouter from 'vue-router'
//引入页面
import Home from '../html/Home.vue'

Vue.use(VueRouter)

const router = new VueRouter({
  mode: 'history',
  base: _dirname,
  routes: [
    {name: 'Home', path: '/ ', component: Home}
  ]
})