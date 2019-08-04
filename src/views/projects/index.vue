<template>
  <div class="projects-container">
    <div v-if="!isFetching">
      <div v-if="projects" class="projects">
        <div
          v-for="(project, index) in projects"
          :key="index"
          @click="projectOnClick(project)"
          class="project">
          <at-alert 
            :message="project.full_name"
            :description="project.description || `No Description`"
            type="success"
            show-icon>
          </at-alert>
        </div>
      </div>
    </div>
    <h5 class="text-center" v-else>Fetching {{$route.params.username}} Projects...</h5>
  </div>
</template>
<script>
import { mapActions, mapState } from 'vuex'
export default {
  name: 'ProjectsPage',
  computed: {
    ...mapState({
      projects: state => state.projects.projects,
      isFetching: state => state.projects.isFetching,
      usersNotFound: state => state.users.error
    })
  },
  watch: {
    usersNotFound(value) {
      if(value) {
        this.$router.push('/')
      }
    }
  },
  methods: {
    ...mapActions({
      getUsersProjects: 'projects/getListProjects',
      getUserInfo: 'users/getUserInfo'
    }),

    projectOnClick(project) {
      const projectName = project.full_name.split('/')[1]
      const username = this.$route.params.username
      this.$router.push({
        path: `/projects/${username}/${projectName}`,
        query: {
          url: btoa(project.url)
        }
      })
    }
  },
  created() {
    const { getUsersProjects, getUserInfo } = this
    const { username } = this.$route.params
    getUserInfo(username)
    getUsersProjects(username)
  },
  mounted() {
    const { usersNotFound } = this
    if(usersNotFound) {
      this.$router.push('/')
    }
  }
}
</script>

<style scoped>
  .projects-container {
    max-width: 800px;
    margin: auto;
  }
  .project {
    margin-bottom: 10px;
    cursor: pointer;
    transition: all ease 1s;
  }
  .project:hover .at-alert--success {
    background-color: #4dde8f;
  }
</style>


