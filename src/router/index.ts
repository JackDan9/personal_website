import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/home/Home.vue';
import Resume from '../views/resume/Resume.vue';
import Blog from '../views/blog/index.vue';
import { UserLayout } from '@/layout';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'index',
    component: UserLayout,
    meta: { title: '首页' },
    redirect: '/home',
    children: [
      {
        path: '/home',
        name: 'home',
        component: Home,
      }
    ]
  },
  {
    path: '/resume',
    name: 'resume',
    component: Resume,
    meta: { title: '简历' },
  },
  {
    path: '/blog',
    name: 'blog',
    component: Blog,
    meta: { title: '博客' },
  }
  // {
  //   path: '/about',
  //   name: 'about',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () => import(/* webpackChunkName: "about" */ '../views/About.vue'),
  // },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
