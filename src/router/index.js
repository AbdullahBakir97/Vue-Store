import { createRouter, createWebHistory } from 'vue-router'
import CoursesView from '@/views/CoursesView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'courselist',
      component: CoursesView
    },
    {
      path: '/about',
      name: 'coursedetail',
      component: () => import('../views/CourseDetailView.vue')
    }
  ]
})

export default router
