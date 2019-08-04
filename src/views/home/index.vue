<template>
  <div class="home">
    <div class="container">
      <h1 class="title">User's Github Projects</h1>
      <form @submit.prevent="handleSubmit">
        <!-- <h5 class="label">GitHub Username</h5> -->
        <at-input v-model="username" size="large" placeholder="GitHub Username">
          <template slot="prepend">
            <i class="icon icon-at-sign"></i>
          </template>
        </at-input>
      </form>
    </div>
  </div>
</template>

<script>
import { mapState, mapMutations } from 'vuex'
import { RESET_ERROR_STATE } from '../../store/users/types'
export default {
  name: 'home',
  data(){
    return {
      username: null,
    }
  },
  computed: {
    ...mapState({
      userNotFound: state => state.users.error
    })
  },
  mounted() {
    const { userNotFound } = this
    if(userNotFound) {
      const { resetError } = this
      this.$Message.error('Username not found!')
      resetError()
    }
  },
  methods:{
    ...mapMutations({
      resetError: `users/${RESET_ERROR_STATE}`
    }),
    handleSubmit(){
      const { username } = this
      if(username) {
        this.$router.push(`/projects/${username}`)
      } else {
        this.$Message.error('Username tidak boleh kosong!')
      }
    }
  }
}
</script>

<style>
.home {
  position: relative;
  min-height: 100vh;
}
.home .title {
  margin-bottom: 5px;
}
.home .container {
  max-width: 345px;
  position: absolute;
  top: 38%;
  left: 50%;
  transform: translate(-50%, -50%);
}
.home .container .label {
  text-align: left;
  margin-bottom: 2px;
}
</style>

