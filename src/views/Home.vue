<template>
  <div class="home">
    <BlogPost :post="welcomeScreen" />
    <BlogPost :post="post" v-for="(post, index) in sampleBlogPost" :key="index" />
  </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue'
import BlogPost from '../components/BlogPost/BlogPost.vue'

export default defineComponent({
  name: 'Home',
  components: { BlogPost },
  data() {
    return {
      welcomeScreen: {
        title: 'Welcome!',
        blogPost:
          'Weekly blog articles with all things programming including HTML, CSS, Javascript and more. Register today to never miss a post!',
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
      ]
    }
  },
  mounted() {}
})
</script>
