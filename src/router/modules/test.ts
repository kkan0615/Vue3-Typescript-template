// import { RouteRecordRaw } from 'vue-router'
import { RouteRecordRaw } from 'vue-router'

export const routes: Array<RouteRecordRaw> = [
  {
    path: '/test',
    name: 'Test',
    component: () => import('@/views/test/index.vue')
  }
]

export default routes
