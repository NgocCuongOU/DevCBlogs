<template>
  <div class="blog-wrapper" :class="{ 'no-user': !getUser }">
    <div class="blog-content">
      <div>
        <h2 v-if="post.welcomeScreen">{{ post.title }}</h2>
        <h2 v-else>{{ post.title }}</h2>
        <p v-if="post.welcomeScreen">{{ post.blogPost }}</p>
        <p v-else class="content-preview">{{ post.blogHTML }}</p>
        <router-link v-if="post.welcomeScreen" class="link link-light" :to="{ name: 'Home' }">
          Đăng Nhập/Đăng Ký
          <Arrow class="arrow arrow-light" />
        </router-link>
        <router-link v-else :to="{ name: 'Home' }" class="link">
          Xem Bài Viết
          <Arrow class="arrow" />
        </router-link>
      </div>
    </div>
    <div class="blog-photo">
      <img v-if="post.welcomeScreen" src="@/assets/blogPhotos/coding.jpg" :alt="post.title" />
      <img v-else src="@/assets/blogPhotos/beautiful-stories.jpg" :alt="post.title" />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, type PropType } from 'vue'
import { mapState } from 'pinia'

import { useProfileStore } from '@/stores/useProfile'
import type BlogPost from '@/interfaces/BlogPost'
import Arrow from '@/assets/Icons/arrow-right-light.svg?component'

export default defineComponent({
  name: 'BlogPost',
  components: {
    Arrow
  },
  props: {
    post: {
      type: Object as PropType<BlogPost>,
      required: true
    }
  },
  computed: {
    ...mapState(useProfileStore, ['getUser'])
  }
})
</script>

<style lang="scss" scoped>
@import '@/assets/scss/variables';

.blog-wrapper {
  display: flex;
  flex-direction: column;
  box-shadow: $box-shadow;
  @media (min-width: 700px) {
    min-height: 650px;
    max-height: 650px;
    flex-direction: row;
  }

  .blog-content {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    flex: 4;
    order: 2;
    @media (min-width: 700px) {
      order: 1;
    }
    @media (min-width: 800px) {
      flex: 3;
    }

    div {
      max-width: 375px;
      padding: 72px 24px;
      @media (min-width: 700px) {
        padding: 0 24px;
      }

      h2 {
        font-size: 32px;
        font-weight: 300;
        text-transform: uppercase;
        margin-bottom: 24px;
        @media (min-width: 700px) {
          font-size: 40px;
        }
      }

      p {
        font-size: 15px;
        font-weight: 300;
        line-height: 1.7;
      }

      .content-preview {
        font-size: 13px;
        max-height: 24px;
        width: 250px;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
      }

      .link {
        display: inline-flex;
        align-items: center;
        margin-top: 32px;
        padding-bottom: 4px;
        border-bottom: 1px solid transparent;
        transition: 0.5s ease-in-out all;

        &:hover {
          border-bottom-color: $border-primary-color;
        }
      }

      .link-light {
        &:hover {
          border-bottom-color: $border-white-color;
        }
      }
    }
  }

  .blog-photo {
    order: 1;
    flex: 3;
    box-shadow: $box-shadow;
    @media (min-width: 700px) {
      order: 2;
    }
    @media (min-width: 800px) {
      flex: 4;
    }

    img {
      display: block;
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }

  &:nth-child(even) {
    .blog-content {
      order: 2;
    }

    .blog-photo {
      order: 1;
    }
  }
}

.no-user:first-child {
  .blog-content {
    background-color: $bg-primary-color;
    color: $white-text-color;
  }
}
</style>
