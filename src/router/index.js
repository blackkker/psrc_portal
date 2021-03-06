import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: 'Index'
  },
  {
    path: '/index',
    name: 'Index',
    redirect: '/home',
    component: () => import('../components/Index.vue'),
    children: [
      {
        path: '/home',
        name: 'Home',
        component: () => import('../components/Home.vue')
      },
      {
        path: '/overview/:route',
        name: 'Overview',
        component: () => import('../components/Overview.vue'),
        props: true,
        children: [
          {
            path: '/overview/introduction',
            name: 'Introduction',
            component: () => import('../components/Overview/Introduction.vue')
          },
          {
            path: '/overview/council',
            name: 'Council',
            component: () => import('../components/Overview/Council.vue')
          },
          {
            path: '/overview/leader',
            name: 'Leader',
            component: () => import('../components/Overview/Leader.vue')
          },
          {
            path: '/overview/teacher',
            name: 'Teacher',
            component: () => import('../components/Overview/Teacher.vue')
          }
        ]
      },
      {
        path: '/team/:route',
        name: 'Team',
        component: () => import('../components/Team.vue'),
        props: true
      },
      {
        path: '/news/:route',
        name: 'News',
        component: () => import('../components/News.vue'),
        props: true
      },
      {
        path: '/cooperation/:route',
        name: 'Cooperation',
        component: () => import('../components/Cooperation.vue'),
        props: true
      }
    ]
  }
]

const router = new VueRouter({
  routes
})

export default router
