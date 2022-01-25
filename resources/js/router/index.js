import { createRouter, createWebHistory } from 'vue-router'
import ExamplesIndex from '../components/examples/ExamplesIndex'
import ExampleDetails from '../components/examples/ExampleDetails'


const routes = [
  {
    path: '/',
    name: 'ExamplesIndex',
    component: ExamplesIndex
  },
  {
    path: '/example-details',
    name: 'ExampleDetails',
    component: ExampleDetails
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
