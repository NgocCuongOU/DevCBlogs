<template>
  <div class="home">
    <BlogPost :post="welcomeScreen" />
    <BlogPost :post="post" v-for="(post, index) in sampleBlogPost" :key="index" />
    <div class="blog-card-wrap">
      <div class="container">
        <h3>Xem Những Bài Viết Gần Đây</h3>
        <div class="blog-cards">
          <BlogCard :post="post" v-for="(post, index) in sampleBlogCard" :key="index" />
        </div>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue'

import BlogPost from '../components/BlogPost/BlogPost.vue'
import BlogCard from '@/components/BlogPost/BlogCard.vue'

export default defineComponent({
  name: 'Home',
  components: { BlogPost, BlogCard },
  data() {
    return {
      welcomeScreen: {
        title: 'Hí Anh Em!',
        blogPost:
          'Bài viết blog hàng tuần với tất cả các kiến thức lập trình bao gồm HTML, CSS, JavaScript và nhiều hơn nữa. Đăng ký ngay hôm nay để không bao giờ bỏ lỡ một bài viết!!!',
        welcomeScreen: true,
        photo: 'coding'
      },
      sampleBlogPost: [
        {
          title: 'This is filter title!',
          blogHTML: 'This is a filter blog post title',
          blogCoverPhoto: 'beautiful-stories'
        },
        {
          title: 'This is filter title2!',
          blogHTML: 'This is a filter blog post title 2',
          blogCoverPhoto: 'designed-for-everyone'
        }
      ],
      sampleBlogCard: [
        {
          blogTitle: 'Blog Card #1',
          author: 'Ngọc Cường',
          createdDate: 'May 1, 2022'
        },
        {
          blogTitle: 'Blog Card #2',
          author: 'Ngọc Cường',
          createdDate: 'May 1, 2022'
        },
        {
          blogTitle: 'Blog Card #3',
          author: 'Ngọc Cường',
          createdDate: 'May 1, 2022'
        },
        {
          blogTitle: 'Blog Card #4',
          author: 'Ngọc Cường',
          createdDate: 'May 1, 2022'
        }
      ]
    }
  },
  mounted() {}
})
</script>
<style lang="scss" scoped>
.blog-card-wrap {
  h3 {
    margin-bottom: 32px;
    font-weight: 300;
    font-size: 28px;
  }
}
</style>
