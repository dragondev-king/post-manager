<template>
  <v-snackbar v-model="showNotification" :timeout="2000">{{ message }}</v-snackbar>
</template>

<script>
export default {
  data() {
    return {
      showNotification: false,
      message: ''
    }
  },
  created() {
    // Listen for Vuex actions to show success or error snackbar notifications
    this.$store.subscribeAction((action) => {
      if (action.type === 'createPost') {
        this.message = 'Post created successfully!'
        this.showNotification = true
      } 
      if (action.type === 'editPost') {
        this.message = 'Post updated successfully!'
        this.showNotification = true
      } 
      if (action.type === 'deletePost') {
        this.message = 'Post removed successfully!'
        this.showNotification = true
      } else if (action.type.endsWith('Error')) {
        this.message = action.payload.message || 'An error occurred.'
        this.showNotification = true
      }
    })
  }
}
</script>