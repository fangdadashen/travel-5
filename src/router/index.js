import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/pages/Home/home.vue'
import Detail from '@/pages/Detail/detail.vue'
import City from '@/pages/City/city.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/detail',
      name: 'Detail',
      component: Detail
    },
    {
      path: '/city',
      name: 'City',
      component: City
    }
  ]
})
