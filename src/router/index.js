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
        path: '/overview',
        name: 'Overview',
        component: () => import('../components/Overview.vue'),
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
          },
          {
            path: '/overview/detail/:id',
            name: 'Teacher',
            component: () => import('../templates/Detail.vue'),
            props: true
          }
        ]
      },
      {
        path: '/team',
        name: 'Team',
        component: () => import('../components/Team.vue')
      },
      {
        path: '/news',
        name: 'News',
        component: () => import('../components/News.vue')
      },
      {
        path: '/cooperation',
        name: 'Cooperation',
        component: () => import('../components/Cooperation.vue')
      }
    ]
  }
]

const router = new VueRouter({
  routes
})

export default router
