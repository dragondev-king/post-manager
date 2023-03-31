<template>
  <div>
    <h1>{{ post.title }}</h1>
    <p>{{ post.body }}</p>
    <ul>
      <li v-for="comment in comments" :key="comment.id">
        {{ comment.body }}
      </li>
    </ul>
    <button @click="editPost">Edit Post</button>
    <button @click="deletePost">Delete Post</button>
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
    ...mapActions(['editPost', 'deletePost'])
  }
}
</script>
