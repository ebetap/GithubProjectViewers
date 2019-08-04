import actions from './actions'
import mutations from './mutations'

export default {
  namespaced: true,
  state: {
    users: {},
    isFetching: false,
    error: null
  },
  actions,
  mutations
}