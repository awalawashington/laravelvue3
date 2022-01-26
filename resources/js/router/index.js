import { createRouter, createWebHistory } from 'vue-router'
import ExamplesIndex from '../components/examples/ExamplesIndex'
import ExampleCreate from '../components/examples/ExampleCreate'
import ExampleEdit from '../components/examples/ExampleEdit'


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
  },
  {
    path: '/example/:id/edit',
    name: 'example.edit',
    component: ExampleEdit,
    props:true
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
