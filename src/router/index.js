import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
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

]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
