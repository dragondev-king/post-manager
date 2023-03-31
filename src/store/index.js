import { createStore } from 'vuex'
import axios from 'axios'

export default createStore({
  state: {
    posts: [],
    post: {},
    comments: []
  },
  mutations: {
    SET_POSTS(state, payload) {
      console.log(payload, '========')
      state.posts = payload
    },
    SET_POST(state, payload) {
      state.post = payload
    },
    SET_COMMENTS(state, payload) {
      state.comments = payload
    }
  },
  actions: {
    fetchPosts({ commit }) {
      // Fetch all posts from API or database
      axios.get('https://jsonplaceholder.typicode.com/posts').then((response) =>commit('SET_POSTS', response.data)) 
    },
    fetchPost({ commit }, postId) {
      // Fetch selected post from API or database
      axios.get(`/api/posts/${postId}`).then(response => {
        commit('SET_POST', response.data)
      })
    },
    fetchComments({ commit }, postId) {
      // Fetch comments for selected post from API or database
      axios.get(`/api/posts/${postId}/comments`).then(response => {
        commit('SET_COMMENTS', response.data)
      })
    },
    createPost({ dispatch }, postData) {
      // Create new post and update store by fetching posts again
      axios.post('/api/posts', postData).then(() => {
        dispatch('fetchPosts')
      })
    },
    editPost({ dispatch }, postData) {
      // Update existing post and update store by fetching posts again
      axios.put(`/api/posts/${postData.id}`, postData).then(() => {
        dispatch('fetchPosts')
      })
    },
    deletePost({ dispatch }, postId) {
      // Delete post and update store by fetching posts again
      axios.delete(`/api/posts/${postId}`).then(() => {
        dispatch('fetchPosts')
      })
    }
  },
  getters: {
    postById: state => postId => {
      // Get post by ID from store
      return state.posts.find(post => post.id === postId)
    }
  }
})
