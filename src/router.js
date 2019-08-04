import Vue from 'vue'
import Router from 'vue-router'
import ProjectDetail from './views/projects/detail/index.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('./views/home/index.vue')
    },
    {
      path: '/projects/:username',
      name: 'result',
      component: () => import('./views/projects/index.vue')
    },
    {
      path: '/projects/:username/:project',
      name: 'project-detail',
      component:ProjectDetail
    }
  ]
})
