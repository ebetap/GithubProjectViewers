<template>
  <div v-if="$route.params.username" class="header">
    <h2 v-if="name && !isFetching">{{name}}'s Projects</h2>
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  name: 'Header',
  computed: {
    ...mapState({
      name: state => state.users.users.name,
      isFetching: state => state.users.isFetching
    })
  }
}
</script>

<style scoped>
  .header {
    padding: 15px 0;
    max-width: 800px;
    margin: auto;
  }
</style>
