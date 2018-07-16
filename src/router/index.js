import Vue from 'vue'
import Router from 'vue-router'
import ExampleOne from '@/components/ExampleOne'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'ExampleOne',
      component: ExampleOne
    }
  ]
})
