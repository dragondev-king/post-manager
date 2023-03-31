<template>
  <v-app class="container">
    <div id="nav">
      <router-link to="/">Home</router-link> |
    </div>
    <router-view/>
    <ActionNotification />
  </v-app>
</template>

<script>
import ActionNotification from './components/ActionNotification.vue';

export default {
  name: 'App',
  components: { ActionNotification },
  data() {
    return {
      drawer: false
    }
  }
}
</script>

<style>
.container {
  padding: 10px 400px;
}
</style>
