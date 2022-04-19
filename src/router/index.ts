import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/views/Home.vue'
import Blogs from '@/views/Blogs.vue'
import Login from '@/views/Login.vue'
import Register from '@/views/Register.vue'
import ForgotPassword from '@/views/ForgotPassword.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home,
      meta: {
        title: 'Trang Chủ'
      }
    },
    {
      path: '/blogs',
      name: 'Blogs',
      component: Blogs,
      meta: {
        title: 'Danh Sách Bài Viết'
      }
    },
    {
      path: '/login',
      name: 'Login',
      component: Login,
      meta: {
        title: 'Đăng Nhập'
      }
    },
    {
      path: '/register',
      name: 'Register',
      component: Register,
      meta: {
        title: 'Đăng Ký Thành Viên'
      }
    },
    {
      path: '/forgot-password',
      name: 'ForgotPassword',
      component: ForgotPassword,
      meta: {
        title: 'Quên Mật Khẩu'
      }
    }
  ]
})

router.beforeEach((to, from, next) => {
  document.title = `${to.meta.title} | Dev's Café`
  next()
})

export default router
