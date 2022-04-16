<template>
  <article class="blog-card">
    <div class="tools">
      <div class="author">
        <div class="author__avtar">
          <img src="@/assets/background.png" alt="author" />
        </div>
        <p class="author__name">Ngọc Cường</p>
      </div>
      <div class="icons">
        <div class="icon">
          <Edit class="edit" />
        </div>
        <div class="icon">
          <Delete class="delete" />
        </div>
      </div>
    </div>
    <div class="blog-info">
      <div class="blog-info__txt">
        <h2 class="blog-info__txt-heading">
          <router-link class="link" to="/">
            Sản phẩm react sau 2 tuần chăm chỉ học tại F8
          </router-link>
        </h2>
        <p class="blog-info__txt-preview">
          Chào tất cả các anh chị em đang học tập tại F8. Xin phép được giấu tên hoặc các bạn có thể
          gọi mình là Lee. Đã từ rất lâu rồi, mình Chào tất cả các anh chị em đang học tập tại F8.
          Xin phép được giấu tên hoặc các bạn có thể gọi mình là Lee. Đã từ rất lâu rồi, mình,Chào
          tất cả các anh chị em đang học tập tại F8. Xin phép được giấu tên hoặc các bạn có thể gọi
          mình là Lee. Đã từ rất lâu rồi, mình Chào tất cả các anh chị em đang học tập tại F8. Xin
          phép được giấu tên hoặc các bạn có thể gọi mình là Lee. Đã từ rất lâu rồi, mình,Chào tất
          cả các anh chị em đang học tập tại F8. Xin phép được giấu tên hoặc các bạn có thể gọi mình
          là Lee. Đã từ rất lâu rồi, mình Chào tất cả các anh chị em đang học tập tại F8. Xin phép
          được giấu tên hoặc các bạn có thể gọi mình là Lee. Đã từ rất lâu rồi, mình,Chào tất cả các
          anh chị em đang học tập tại F8. Xin phép được giấu tên hoặc các bạn có thể gọi mình là
          Lee. Đã từ rất lâu rồi, mình Chào tất cả các anh chị em đang học tập tại F8. Xin phép được
          giấu tên hoặc các bạn có thể gọi mình là Lee. Đã từ rất lâu rồi, mình,
        </p>
        <p class="blog-info__txt-date">5 ngày trước &#183; 7 phút đọc</p>
      </div>
      <div class="blog-info__img">
        <router-link class="link" to="/">
          <img src="@/assets/blogPhotos/beautiful-stories.jpg" alt="" />
        </router-link>
      </div>
    </div>
  </article>
</template>
<script lang="ts">
import { defineComponent } from 'vue'

import Edit from '@/assets/Icons/edit-regular.svg?component'
import Delete from '@/assets/Icons/trash-regular.svg?component'

export default defineComponent({
  name: 'BlogsCardLarge',
  components: {
    Edit,
    Delete
  },
  setup() {}
})
</script>
<style lang="scss" scoped>
@import '@/assets/scss/variables';
.blog-card {
  position: relative;
  padding: 24px;
  border: 2px solid $border-gray-light-color;
  border-radius: 16px;
  &:not(:last-child) {
    margin-bottom: 18px;
  }
  .tools {
    display: flex;
    justify-content: space-between;
    .author {
      display: flex;
      align-items: center;
      &__avtar {
        width: 20px;
        height: 20px;
        margin-right: 12px;
        overflow: hidden;
        border-radius: 50%;
        img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }
      }
    }

    .icons {
      position: absolute;
      top: 16px;
      right: 25px;
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
        cursor: pointer;

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
  }

  .blog-info {
    display: flex;
    flex-direction: column;
    margin-top: 16px;
    @media (min-width: 700px) {
      flex-direction: row;
      gap: 20px;
    }

    @media (min-width: 1200px) {
      gap: 40px;
    }

    &__txt {
      order: 2;
      @media (min-width: 700px) {
        order: 1;
        flex: 5;
      }

      @media (min-width: 1200px) {
        flex: 3;
      }

      &-heading {
        margin-top: 12px;
        @media (min-width: 700px) {
          margin-top: 0;
        }

        .link {
          display: -webkit-box !important;
          font-weight: 600;
          font-size: 22px;
          color: $black-text-color;
          transition: all 0.3s ease;
          line-height: 24px;
          max-height: 48px;
          overflow: hidden;
          -webkit-box-orient: vertical;
          -webkit-line-clamp: 2;

          &:hover {
            opacity: 0.8;
          }
        }
      }

      &-preview {
        margin-top: 8px;
        line-height: 20px;
        height: 60px;
        overflow: hidden;
        display: -webkit-box;
        -webkit-box-orient: vertical;
        -webkit-line-clamp: 3;
        font-weight: 400;
        font-size: 15px;
        @media (min-width: 1200px) {
          height: 100px;
          font-size: 16px;
          -webkit-line-clamp: 5;
        }
      }

      &-date {
        margin-top: 8px;
        font-weight: 400;
        font-size: 14px;
        @media (min-width: 1200px) {
          margin-top: 44px;
        }
      }
    }

    &__img {
      order: 1;
      @media (min-width: 700px) {
        order: 2;
        flex: 2;
      }

      @media (min-width: 1200px) {
        flex: 1;
      }

      img {
        width: 100%;
        height: auto;
        border-radius: 15px;
        object-fit: cover;
      }
    }

    .link {
      display: inline-block;
    }
  }
}
</style>
