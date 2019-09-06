import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/home'
import Ewm from '@/components/ewm'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/ewm',
      name: 'Ewm',
      component: Ewm
    },
  ]
})
