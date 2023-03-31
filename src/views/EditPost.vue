<template>
  <PostForm :post="post" :header-title="headerTitle" :button-title="buttonTitle" @submit-form="saveChanges" />
</template>
<script>
import { mapActions, mapState } from 'vuex'
import PostForm from '@/components/PostForm.vue'

export default {
  name: "EditPost",
  components: {
    PostForm
  },
  data() {
    return {
      headerTitle: "Edit post",
      buttonTitle: "Save"
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
  methods: {
    ...mapActions([
      'fetchPost'
    ]),
    saveChanges({title, body}) {
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
