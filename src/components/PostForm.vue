<template>
  <v-sheet>
    <h1>{{ headerTitle }}</h1>
    <v-form validate-on="submit" @submit.prevent="$emit('submit-form', {title, body})">
      <v-text-field v-model="title" label="Title" :rules="titleRules" ></v-text-field>
      <v-textarea label="Body" v-model="body" :rules="bodyRules"></v-textarea>
      <v-btn color="success" type="submit">{{ buttonTitle }}</v-btn>
    </v-form>
  </v-sheet>
</template>

<script>
export default {
  name: "PostForm",
  props: {
    post: Object,
    headerTitle: String,
    buttonTitle: String,
  },
  data() {
    return {
      title: this.post ? this.post.title : '',
      titleRules: [
        value => value ? true : 'Title is required'
      ],
      body: this.post ? this.post.body : '',
      bodyRules: [
        value => value ? true : 'Body is required'
      ]
    }
  },
  watch: {
    '$store.state.post': {
      handler() {
        this.title = this.post.title
        this.body = this.post.body
      }
    }
  },
}
</script>