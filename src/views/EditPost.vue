<template>
  <v-sheet>
    <h1>Edit Post</h1>
    <v-form validate-on="submit" @submit.prevent="saveChanges">
      <v-text-field v-model="title" label="Title" :rules="titleRules" ></v-text-field>
      <v-textarea label="Body" v-model="body" :rules="bodyRules"></v-textarea>
      <v-btn type="submit">Save</v-btn>
    </v-form>
    {{ posts }}
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
      ],
    }
  },
  computed: {
    
  },
  created() {
    // Get the post ID from the URL and fetch the corresponding post
    const postId = this.$route.params.id
    const post = this.$store.state.posts.find(post => post.id === postId)
    if (post) {
      this.title = post.title
      this.body = post.body
    } else {
      // If the post doesn't exist, redirect to Home page
      this.$router.push('/')
    }
  },
  methods: {
    saveChanges() {
      // Update the post and redirect to Home page
      const id = this.$route.params.id
      const title = this.title
      const body = this.body
      const post = {
        id,
        title,
        body
      }
      if (id && title && body)
      this.$store.dispatch('editPost', post)
      this.$router.push('/')
    }
  },
}
</script>
