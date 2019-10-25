import Vue from 'vue'
import Router from 'vue-router'
import HeaderVue from '@/components/Layout/Header'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HeaderVue',
      component: HeaderVue
    }
  ]
})
