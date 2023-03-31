<template>
  <div>
    <h2>Title</h2>
    <h3>{{ post.title }}</h3>
    <h2>Description</h2>
    <p>{{ post.body }}</p>
    <h2>Comments</h2>
    <ul>
      <li v-for="comment in comments" :key="comment.id">
        {{ comment.body }}
      </li>
    </ul>
    <v-btn  @click="this.$router.push({
            path: `/post/${post.id}/edit`
          })">Edit Post</v-btn>
    <v-btn @click="handleDelete">Delete Post</v-btn>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'

export default {
  computed: {
    ...mapState(['post', 'comments'])
  },
  created() {
    // Fetch selected post and its comments from API or database using Vuex actions
    this.$store.dispatch('fetchPost', this.$route.params.id)
    this.$store.dispatch('fetchComments', this.$route.params.id)
  },
  methods: {
    ...mapActions(['editPost', 'deletePost']),
    handleDelete() {
      const id = this.$route.params.id
      if (id) {
        this.$store.dispatch('deletePost', id)
        this.$router.push('/')
      }
    }
  }
}
</script>
