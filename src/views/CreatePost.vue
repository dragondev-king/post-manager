<template>
  <v-sheet>
    <h1>Create New Post</h1>
    <v-form validate-on="submit" @submit.prevent="createPost({
      title,
      body,
      userId: 1
    })">
      <v-text-field v-model="title" label="Title" :rules="titleRules" ></v-text-field>
      <v-textarea label="Body" v-model="body" :rules="bodyRules"></v-textarea>
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
      titleRules: [
        value => value ? true : 'Title is required'
      ],
      body: '',
      bodyRules: [
        value => value ? true : 'Body is required'
      ]
    }
  },
  methods: {
    ...mapActions(['createPost'])
  }
}
</script>
