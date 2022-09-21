import { createRouter, createWebHistory } from 'vue-router'
import EventList from '../views/EventList.vue'
import EventDetails from '../views/event/DetailsEvent.vue'
import EventLayout from '../views/event/LayoutEvent.vue'
import EventRegister from '../views/event/RegisterNow.vue'
import EventEdit from '../views/event/EditEvent.vue'
import AboutView from '../views/AboutView.vue'
import NotFound from '../views/event/NotFound.vue'
import NetworkError from '../views/event/NetworkError.vue'


const routes = [
  {
    path: '/',
    name: 'EventList',
    component: EventList,
    props: route=>({page: parseInt(route.query.page) || 1})
  },
  {
    path: '/events/:id',
    name: 'EventLayout',
    props: true,
    component: EventLayout,
    children: [
      {
        path: '',
      name: 'EventDetails',
      component: EventDetails,
    },
    {
      path: 'register',
      name: 'EventRegister',
      component: EventRegister
    },
    {
      path: 'edit',
      name: 'EventEdit',
      component: EventEdit
    },
  ]
  },
  {
    path: '/event/:afterEvent(.*)',
    redirect: to => {
      return { path: '/events/' + to.params.afterEvent }
    }
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: AboutView
  },
  {
    path: '/:catchAll(.*)',
    name: 'NotFound',
    component: NotFound
  },
  {
    path: '/network-error',
    name: 'NetworkError',
    component: NetworkError
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
