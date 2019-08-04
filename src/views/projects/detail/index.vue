<template>
  <div class="project-detail">
    <h1>Project Detail</h1>
    <div v-if="isFetching">Loading ....</div>
    <div v-else>
      <VueMarkdown :source="readme" />
    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'
import VueMarkdown from 'vue-markdown'
export default {
  name: 'ProjectDetail',
  components: {
    VueMarkdown
  },
  computed: {
    ...mapState({
      readme: state => state.projects.readme,
      isFetching: state => state.projects.isFetching
    })
  },
  methods: {
    ...mapActions({
      getProjectContents: 'projects/getProjectContents'
    })
  },
  created() {
    const { getProjectContents } = this
    const { url } = this.$route.query
    getProjectContents(atob(url))
  }
}
</script>

<style>
.project-detail {
  max-width: 800px;
  margin: auto;
  padding-bottom: 30px;
}

.project-detail img {
  max-width: 100%;
  object-fit: cover;
}
</style>
