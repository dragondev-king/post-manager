<template>
  <PostForm :header-title="headerTitle" :button-title="buttonTitle" @submit-form="saveChanges" />
</template>

<script>
import PostForm from '@/components/PostForm.vue'

export default {
  name: "CreatePost",
  components: {
    PostForm,
  },
  data() {
    return {
      headerTitle: "Create new post",
      buttonTitle: "Create"
    }
  },
  methods: {
    saveChanges({title, body}) {
      // Create the post and redirect to Home page
      const post = {
        title,
        body,
        userId: 1
      }
      if (title && body) {
        this.$store.dispatch('createPost', post)
        this.$router.push('/')
      }
    }
  }
}
</script>
