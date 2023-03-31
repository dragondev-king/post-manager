import { createRouter, createWebHashHistory } from 'vue-router';

import AllPosts from '@/views/AllPosts.vue'
import CreatePost from '@/views/CreatePost.vue'
import DetailPost from '@/views/DetailPost.vue'
import EditPost from '@/views/EditPost.vue'


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
      path: '/post/:id',
      name: 'view',
      component: DetailPost
    },
    {
      path: '/post/:id/edit',
      name: 'edit',
      component: EditPost
    },
    {
      path: '/create',
      name: 'create',
      component: CreatePost
    },
  ]
});

export default router;
