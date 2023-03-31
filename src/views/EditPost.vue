<template>
  <v-sheet>
    <h1>Edit Post</h1>
    <v-form validate-on="submit" @submit.prevent="saveChanges(title, body)">
      <v-text-field v-model="title" label="Title" :rules="titleRules"></v-text-field>
      <v-textarea label="Body" v-model="body" :rules="bodyRules"></v-textarea>
      <v-btn type="submit">Save</v-btn>
    </v-form>
  </v-sheet>
</template>

<script>
import { mapActions, mapState } from 'vuex'

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
    ...mapState([
      'post'
    ])
  },
  created() {
    this.$store.dispatch('fetchPost', this.$route.params.id)
  },
  watch: {
    '$store.state.post': {
      handler() {
        this.title = this.post.title
        this.body = this.post.body
      }
    }
  },
  methods: {
    ...mapActions([
      'fetchPost'
    ]),
    saveChanges(title, body) {
      // Update the post and redirect to Home page
      const id = this.$route.params.id
      const post = {
        id,
        title,
        body,
        userId: 1
      }
      if (id && title && body) {
        this.$store.dispatch('editPost', post)
        this.$router.push('/')
      }
    }
  },
}
</script>
