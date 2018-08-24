import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'homepage',
      component: resolve => void(require(['../components/homepage.vue'], resolve))
    },
      {
          path: '/MyPhoto',
          name: 'MyPhoto',
          component: resolve => void(require(['../components/MyPhoto.vue'], resolve))
      }
  ]
})
