import { createRouter, createWebHistory } from 'vue-router'
import EventList from '@/views/EventList.vue'
import EventDetails from '@/views/EventDetails.vue'
import EventCreate from '@/views/EventCreate.vue'
import AboutPage from '@/views/AboutPage.vue'

const routes = [
  {
    path: '/',
    name: 'EventList',
    component: EventList
  },
  {
    path: '/event/:id',
    name: 'EventDetails',
    props: true,
    component: EventDetails
  },
  {
    path: '/event/create',
    name: 'EventCreate',
    component: EventCreate
  },
  {
    path: '/about',
    name: 'AboutPage',
    component: AboutPage
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router