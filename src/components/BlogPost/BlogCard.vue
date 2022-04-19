<template>
  <div class="blog-card">
    <router-link class="link" to="#">
      <img src="@/assets/blogCards/stock-1.jpg" alt="stock-1" />
    </router-link>
    <div class="info">
      <h4>
        <router-link class="link" to="#">{{ post.blogTitle }}</router-link>
      </h4>
      <h6>Tác Giả: {{ post.author }}</h6>
      <h6>Ngày Đăng: {{ post.createdDate }}</h6>
      <router-link class="link" to="#">
        Xem Bài Viết
        <Arrow class="arrow" />
      </router-link>
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue'

import Arrow from '@/assets/Icons/arrow-right-light.svg?component'

export default defineComponent({
  name: 'blogCard',
  components: {
    Arrow
  },
  props: ['post'],
  setup() {}
})
</script>
<style lang="scss" scoped>
@import '@/assets/scss/variables';

.blog-card {
  position: relative;
  display: flex;
  flex-direction: column;
  border-radius: 8px;
  background-color: $bg-color;
  min-height: 420px;
  transition: all 0.5s ease;
  cursor: pointer;

  &:hover {
    transform: rotateZ(-1deg) scale(1.01);
    box-shadow: $box-shadow;
  }

  img {
    display: block;
    width: 100%;
    min-height: 200px;
    border-radius: 8px 8px 0 0;
    object-fit: cover;
    z-index: 1;
  }

  .info {
    display: flex;
    flex-direction: column;
    height: 100%;
    padding: 32px 16px;
    color: $black-text-color;
    z-index: 3;

    h4 {
      padding-bottom: 16px;
      font-size: 20px;
      font-weight: 500;

      .link {
        padding-top: 0;
      }
    }

    h6 {
      font-size: 14px;
      font-weight: 400;
      padding-bottom: 8px;

      &:nth-child(3) {
        padding-bottom: 16px;
      }
    }

    .link {
      display: flex;
      align-items: center;
      margin-top: auto;
      font-weight: 500;
      padding-top: 20px;
      padding-bottom: 4px;
      transition: all 0.5s ease-in;

      &:hover {
        color: rgba(48, 48, 48, 0.8);
      }

      .arrow {
        width: 10px;
      }
    }
  }
}
</style>
