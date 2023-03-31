import { createRouter, createWebHashHistory } from 'vue-router';

import AllPosts from '@/views/AllPosts.vue'
import CreatePost from '@/views/CreatePost.vue'
import DetailPost from '@/views/DetailPost.vue'



const router = createRouter({
  mode: 'history',
  history: createWebHashHistory(),
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: AllPosts
    },
    {
      path: '/',
      name: 'post',
      component: DetailPost
    },
    {
      path: '/',
      name: 'create',
      component: CreatePost
    },
  ]
});

export default router;
