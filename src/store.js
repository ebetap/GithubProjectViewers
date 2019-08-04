import Vue from 'vue'
import Vuex from 'vuex'

import projectsModule from './store/projects'
import usersModule from './store/users'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    projects: projectsModule,
    users: usersModule,
  }
})
