<template>
  <div>
    <h1>All Posts</h1>
    <!-- <ul>
      <li v-for="post in posts" :key="post.id">
        {{ post.title }}
      </li>
    </ul> -->
  </div>
</template>

<script>
import { mapState } from "vuex";

export default {
  computed: {
    ...mapState(["posts"]),
  },
  created() {
    // Fetch all posts from API or database using Vuex actions
    this.$store.dispatch("fetchPosts");
  },
};
</script>
