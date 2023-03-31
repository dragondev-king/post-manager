<template>
  <div>
    <h1>All Posts</h1>
    <v-btn color="success" to="/create">New Post</v-btn>
    <v-table>
      <thead>
        <tr>
          <th>ID</th>
          <th class="w-100">Title</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="post in posts" :key="post.id">
          <td>{{ post.id }}</td>
          <td>{{ post.title }}</td>
          <td class="text-no-wrap">
            <v-btn class="mr-3" color="primary" @click="this.$router.push({
                path: `/post/${post.id}`
              })">View
            </v-btn>
            <v-btn class="mr-3" color="success" @click="this.$router.push({
              path: `/post/${post.id}/edit`
            })">Edit</v-btn>
            <v-btn color="error" @click="deletePost(post.id)">Delete</v-btn>
          </td>
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
    ...mapActions(['deletePost'])
  }
};
</script>
