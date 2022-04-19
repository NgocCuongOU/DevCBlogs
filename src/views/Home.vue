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
    <div class="updates">
      <div class="container">
        <h2>Để không bỏ lỡ bài viết nào. Hãy đăng ký tài khoản miễn phí tại đây!</h2>
        <router-link class="router-button" to="#">
          Đăng ký cho Dev's Café
          <Arrow class="arrow arrow-light" />
        </router-link>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue'
import { useBlogStore } from '@/stores/useBlogs'
import { mapState } from 'pinia'

import BlogPost from '../components/BlogPost/BlogPost.vue'
import BlogCard from '@/components/BlogPost/BlogCard.vue'
import Arrow from '@/assets/Icons/arrow-right-light.svg?component'

export default defineComponent({
  name: 'Home',
  components: { BlogPost, BlogCard, Arrow },
  created() {},
  data() {
    const blogsStore = useBlogStore()

    return {
      welcomeScreen: {
        title: 'Hí Anh Em!',
        blogPost:
          'Bài viết blog hàng tuần với tất cả các kiến thức lập trình bao gồm HTML, CSS, JavaScript và nhiều hơn nữa. Đăng ký ngay hôm nay để không bao giờ bỏ lỡ một bài viết nhé!!!',
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
      blogsStore
    }
  },
  computed: {
    ...mapState(useBlogStore, ['sampleBlogCard'])
  }
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

.updates {
  .container {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 100px 25px;
    @media (min-width: 800px) {
      flex-direction: row;
      padding: 125px 25px;
    }

    .router-button {
      display: flex;
      font-size: 14px;
      text-decoration: none;
      @media (min-width: 800px) {
        margin-left: auto;
      }
    }

    h2 {
      width: 100%;
      max-width: 605px;
      text-align: center;
      text-transform: uppercase;
      font-weight: 300;
      font-size: 32px;
      @media (min-width: 800px) {
        text-align: initial;
        font-size: 40px;
      }
    }
  }
}
</style>
