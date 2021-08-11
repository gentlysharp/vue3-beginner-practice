import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import NotFound from '../views/NotFound.vue'
// import About from '../views/About.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
    // component: About
  },
  {
    path: '/jobs',
    name: 'Jobs',
    component: () => import(/* webpackChunkName: "jobs" */ '../views/jobs/Jobs.vue')
  },
  {
    path: '/jobs/:id',
    name: 'JobDetails',
    component: () => import(/* webpackChunkName: "job-details" */ '../views/jobs/JobDetails.vue'),
    props: true
  },
  // redirect
  {
    path:'/all-jobs',
    redirect:'/jobs'
  },
  // carchall 404
  // :catchAll(.*)는 마치 함수와 같은 패턴으로 위에 정의된 모든 패턴 이외 다른패턴을 요청하게 되면 404 페이지를 보여준다.
  {
    path: '/:catchAll(.*)',
    component: NotFound
  }

]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
