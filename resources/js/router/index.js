import { createRouter, createWebHistory } from 'vue-router'
import ExamplesIndex from '../components/examples/ExamplesIndex'
import ExampleCreate from '../components/examples/ExampleCreate'


const routes = [
  {
    path: '/',
    name: 'examples.index',
    component: ExamplesIndex
  },
  {
    path: '/example/create',
    name: 'example.create',
    component: ExampleCreate
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
