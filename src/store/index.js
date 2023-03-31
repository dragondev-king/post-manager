import { createStore } from 'vuex'
import axios from 'axios'

const apiURL = process.env.VUE_APP_BE_URL

export default createStore({
  state: {
    posts: [],
    post: {},
    comments: []
  },
  mutations: {
    SET_POSTS(state, payload) {
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
      axios.get(`${apiURL}/posts`).then((response) =>commit('SET_POSTS', response.data)) 
    },
    fetchPost({ commit }, postId) {
      // Fetch selected post from API or database
      axios.get(`${apiURL}/posts/${postId}`).then(response => {
        commit('SET_POST', response.data)
      })
    },
    fetchComments({ commit }, postId) {
      // Fetch comments for selected post from API or database
      axios.get(`${apiURL}/posts/${postId}/comments`).then(response => {
        commit('SET_COMMENTS', response.data)
      })
    },
    createPost({ dispatch }, postData) {
      // Create new post and update store by fetching posts again
      if (postData.title && postData.body) {
        axios.post(`${apiURL}/posts`, postData).then(() => {
          dispatch('fetchPosts')
        })
      }
    },
    editPost({ dispatch }, postData) {
      // Update existing post and update store by fetching posts again
      axios.put(`/api/posts/${postData.id}`, postData).then(() => {
        dispatch('fetchPosts')
      })
    },
    deletePost({ dispatch }, postId) {
      // Delete post and update store by fetching posts again
      axios.delete(`${apiURL}/posts/${postId}`).then(() => {
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
