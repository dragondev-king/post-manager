<template>
  <v-app class="container">
    <div id="nav">
    <router-link to="/">Home</router-link> |
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

<style>
.container {
  padding: 10px 200px;
}
</style>
