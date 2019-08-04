import actions from './actions'
import mutations from './mutations'

export default {
  namespaced: true,
  state: {
    isFetching: false,
    projects: [],
    error: {
      status: false,
      message: ''
    },
    readme: ''
  },
  actions,
  mutations
}