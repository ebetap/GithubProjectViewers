import axios from 'axios'
import { API_ENDPOINT } from '../../config/values'
import * as types from './types'

export default {
  getListProjects: ({ commit }, username) => {
    commit(types.FETCH_LOADING)
    axios.get(`${API_ENDPOINT}/users/${username}/repos`)
    .then((res) => {
      commit(types.FETCH_PROJECTS_SUCCESS, res.data)
      commit(types.FETCH_LOADING)
    })
    .catch((err) => {
      commit(types.FETCH_PROJECTS_FAILED, err)
      commit(types.FETCH_LOADING)
    })
  },

  getProjectContents: ({ commit, dispatch }, url) => {
    commit(types.FETCH_LOADING)
    axios.get(`${url}/contents`)
    .then((res) => {
      const readmeUrl = res.data.filter(item => item.name.toLowerCase() === 'readme.md')
      if (readmeUrl.length > 0) {
        dispatch('getProjectReadme', readmeUrl[0].url)
      } else {
        commit(types.FETCH_CONTENT_FAILED, 'This repository has no Readme.md file')
        commit(types.FETCH_LOADING)
      }
    })
    .catch((err) => {
      commit(types.FETCH_CONTENT_FAILED, err)
      commit(types.FETCH_LOADING)
    })
  },

  getProjectReadme: ({ commit }, url) => {
    axios.get(url)
    .then((res) => {
      commit(types.FETCH_README_SUCCESS, res.data)
      commit(types.FETCH_LOADING)
    })
    .catch((err) => {
      commit(types.FETCH_README_FAILED, err)
      commit(types.FETCH_LOADING)
    })
  }
}