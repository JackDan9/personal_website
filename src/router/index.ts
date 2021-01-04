import Vue from 'vue';
import VueRouter from 'vue-router';
import Resume from '../views/resume/Resume.vue';
import BlogEditor from '../views/blog-editor/index.vue';
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
        component: () => import(/* webpackChunkName: "home" */ '../views/home/index.vue'),
        meta: { title: '首页' }
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
    component: () => import(/* webpackChunkName: "blog" */ '../views/blog/index.vue'),
    meta: { title: '博客' },
  },
  {
    path: '/blog-detail/:article_id',
    name: 'blog-detail',
    component: () => import(/* webpackChunkName: "blog-detail" */ '../views/blog-detail/index.vue'),
    meta: { title: '博客详情' },
  },
  {
    path: '/blog-editor',
    name: 'blog-editor',
    component: BlogEditor,
    meta: { title: '博客编辑' },
  },
  // 404 page must be placed at the end !!!
  { 
    path: '*', 
    redirect: '/404', 
    hidden: true 
  },
  {
    path: '/404',
    component: () => import(/* webpackChunkName: "404" */ '@/views/error-page/404'),
    hidden: true
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
