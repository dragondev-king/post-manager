<template>
  <v-sheet>
    <h1>Create New Post</h1>
    <v-form validate-on="submit" @submit.prevent="saveChanges">
      <v-text-field v-model="title" label="Title" :rules="titleRules" ></v-text-field>
      <v-textarea label="Body" v-model="body" :rules="bodyRules"></v-textarea>
      <v-btn type="submit">Create Post</v-btn>
    </v-form>
  </v-sheet>
</template>

<script>

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
    saveChanges() {
      // Create the post and redirect to Home page
      const post = {
        title: this.title,
        body: this.body,
        userId: 1
      }
      if (this.title && this.body) {
        this.$store.dispatch('createPost', post)
        this.$router.push('/')
      }
    }
  }
}
</script>
