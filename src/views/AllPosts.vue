<template>
  <div>
    <h1>All Posts</h1>
    <v-btn to="/create">New Post</v-btn>
    <v-table>
      <thead>
        <tr>
          <th>ID</th>
          <th>Title</th>
          <th colspan="3">Actions</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="post in posts" :key="post.id">
          <td>{{ post.id }}</td>
          <td>{{ post.title }}</td>
          <td><v-btn @click="this.$router.push({
            path: `/post/${post.id}`
          })">View</v-btn></td>
          <td><v-btn @click="this.$router.push({
            path: `/post/${post.id}/edit`
          })">Edit</v-btn></td>
          <td><v-btn @click="deletePost(post.id)">Delete</v-btn></td>
        </tr>
      </tbody>
    </v-table>
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";

export default {
  computed: {
    ...mapState(["posts"]),
  },
  created() {
    // Fetch all posts from API or database using Vuex actions
    this.$store.dispatch("fetchPosts");
  },
  methods: {
    ...mapActions(['editPost', 'deletePost'])
  }
};
</script>
