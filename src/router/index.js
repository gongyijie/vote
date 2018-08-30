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
      },
      {
          path: '/InformalEssay',
          name: 'InformalEssay',
          component: resolve => void(require(['../components/InformalEssay.vue'], resolve))
      },
      {
          path: '/AboutMe',
          name: 'AboutMe',
          component: resolve => void(require(['../components/AboutMe.vue'], resolve))
      },
  ]
})
