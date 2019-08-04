import * as types from './types'
import { API_ENDPOINT } from '../../config/values'
import axios from 'axios'

export default {
  getUserInfo: ({ commit }, username) => {
    commit(types.FETCH_LOADING)
    axios.get(`${API_ENDPOINT}/users/${username}`)
    .then((res) => {
      commit(types.FETCH_USERS_SUCCESS, res.data)
      commit(types.FETCH_LOADING)
    })
    .catch((err) => {
      commit(types.FETCH_USERS_FAILED, err)
      commit(types.FETCH_LOADING)
    })
  }
}