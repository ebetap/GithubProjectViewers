export default {
  FETCH_LOADING(state) {
    state.isFetching = !state.isFetching
  },

  FETCH_PROJECTS_SUCCESS(state, projects) {
    state.projects = projects
  },

  FETCH_README_SUCCESS(state, readme) {
    const decodedReadme = atob(readme.content)
    state.readme = decodedReadme
  },

  FETCH_CONTENT_FAILED(state, message) {
    state.readme = message
  },

  FETCH_PROJECTS_FAILED(state, message) {
    state.error = {
      status: true,
      message
    }
  }
}