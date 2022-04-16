import { createRouter, createWebHistory } from "vue-router";
import Home from "@/views/Home.vue";
import Blogs from '@/views/Blogs.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "Home",
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
    }
  ],
});

router.beforeEach((to, from, next) => {
  document.title = `${to.meta.title} | DevBlogs`
  next()
})

export default router;
