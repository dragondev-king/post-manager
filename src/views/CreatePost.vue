<template>
  <v-sheet>
    <h1>Create New Post</h1>
    <v-form @submit.prevent="createPost({
      title,
      body,
      userId: 1
    })">
      <v-text-field v-model="title" label="Title"></v-text-field>
      <v-textarea label="Body" v-model="body"></v-textarea>
      <v-btn type="submit">Create Post</v-btn>
    </v-form>
  </v-sheet>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  data() {
    return {
      title: '',
      body: ''
    }
  },
  methods: {
    ...mapActions(['createPost'])
  }
}
</script>
