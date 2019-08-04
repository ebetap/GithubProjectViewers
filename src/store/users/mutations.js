export default {
  FETCH_LOADING(state) {
    state.isFetching = !state.isFetching
  },

  FETCH_USERS_SUCCESS(state, data) {
    state.users = data
  },

  FETCH_USERS_FAILED(state) {
    state.error = 'Username not found!'
  },

  RESET_ERROR_STATE(state) {
    state.error = null
  }
}