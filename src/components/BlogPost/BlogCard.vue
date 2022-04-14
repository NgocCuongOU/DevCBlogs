<template>
  <div class="blog-card">
    <div class="icons">
      <div class="icon">
        <Edit class="edit" />
      </div>
      <div class="icon">
        <Delete class="delete" />
      </div>
    </div>
    <img src="@/assets/blogCards/stock-1.jpg" alt="stock-1" />
    <div class="info">
      <h4>{{ post.blogTitle }}</h4>
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
import Edit from '@/assets/Icons/edit-regular.svg?component'
import Delete from '@/assets/Icons/trash-regular.svg?component'

export default defineComponent({
  name: 'blogCard',
  components: {
    Arrow,
    Edit,
    Delete
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

  .icons {
    position: absolute;
    top: 10px;
    right: 10px;
    z-index: 99;
    display: flex;

    .icon {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 35px;
      height: 35px;
      object-fit: cover;
      border-radius: 50%;
      background-color: $bg-color;
      transition: 0.5s all ease;

      &:hover {
        background-color: $bg-primary-color;
      }

      &:nth-child(1) {
        margin-right: 8px;
      }

      .edit,
      .delete {
        height: 15px;
        width: auto;
        pointer-events: none;
      }
    }
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
