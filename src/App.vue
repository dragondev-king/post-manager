<template>
  <v-app>
    <div id="nav">
    <router-link to="/">Home</router-link> |
    <router-link to="/post">Post</router-link> |
    <router-link to="/create-post">Create</router-link>
  </div>
  <router-view/>
  </v-app>
</template>

<script>

export default {
  name: 'App',
  data() {
    return {
      drawer: false
    }
  }
}
</script>
