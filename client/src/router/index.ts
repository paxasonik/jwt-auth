import { createRouter, createWebHistory } from 'vue-router';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes:
  [
    {
      path: '/',
      redirect: { name: 'login' },
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('../views/Login.vue'),
    },
    {
      path: '/registration',
      name: 'registration',
      component: () => import('../views/Registration.vue'),
    },
    {
      path: '/users',
      name: 'users',
      component: () => import('../views/Users.vue'),
    },
  ],
})

export default router;
