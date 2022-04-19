<template>
  <div class="blogs-wrapper">
    <div class="toggle-edit">
      <span>Chỉnh Sửa Bài Viết</span>
      <input @click="handleToggleIcons" type="checkbox" name="editPost" id="editPost" />
    </div>
    <h2 class="blogs-heading">Bài Viết Nổi Bật</h2>
    <p>
      Tổng hợp những bài viết hay, bổ ích chia sẻ về kinh nghiệm lập trình và những kiến thức về lập
      trình web.
    </p>
    <div class="search">
      <input type="search" id="search" placeholder="Tìm kiếm gì đó..." />
      <label for="search">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-3 w-3"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          stroke-width="2"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
          />
        </svg>
      </label>
    </div>
    <h4>Các chủ đề được đề xuất</h4>
    <ul class="tags">
      <li><span>Front-end</span></li>
      <li><span>Back-end</span></li>
      <li><span>UX/UI/Design</span></li>
      <li><span>Others</span></li>
    </ul>
    <section class="list-blogs">
      <BlogCardLarge :isVisibleIcons="isShow" :onToggleIcons="handleToggleIcons" />
      <BlogCardLarge :isVisibleIcons="isShow" :onToggleIcons="handleToggleIcons" />
      <BlogCardLarge :isVisibleIcons="isShow" :onToggleIcons="handleToggleIcons" />
      <BlogCardLarge :isVisibleIcons="isShow" :onToggleIcons="handleToggleIcons" />
    </section>
  </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue'
import { storeToRefs } from 'pinia'

import BlogCardLarge from '@/components/BlogPost/BlogCardLarge.vue'
import { useBlogStore } from '@/stores/useBlogs'
import { useIconsStore } from '@/stores/useIcons'

export default defineComponent({
  components: {
    BlogCardLarge
  },
  setup() {
    const blogStore = useBlogStore()
    const iconsStore = useIconsStore()
    const { isShow } = storeToRefs(iconsStore)

    return {
      blogStore,
      iconsStore,
      isShow,
      handleToggleIcons: iconsStore.handleToggleIcons
    }
  }
})
</script>
<style lang="scss" scoped>
@import '@/assets/scss/variables';

.blogs-wrapper {
  position: relative;
  width: 100%;
  max-width: 730px;
  margin: 0px auto;
  padding: 60px 25px;
  @media (min-width: 700px) and (max-width: 800px) {
    padding: 70px 0;
  }

  @media (min-width: 1200px) {
    max-width: 1200px;
  }

  .toggle-edit {
    position: absolute;
    top: 26px;
    right: 25px;
    display: flex;
    align-items: center;
    @media (min-width: 700px) and (max-width: 800px) {
      right: 0;
    }

    span {
      font-size: 16px;
      font-weight: 500;
      margin-right: 16px;
    }
  }

  .blogs-heading {
    margin-bottom: 20px;
    margin-top: 26px;
    font-size: 32px;
    font-weight: 500;
    text-transform: uppercase;
  }

  p {
    margin-bottom: 42px;
    font-size: 17px;
    font-weight: 400;
    line-height: 1.7;
  }

  h4 {
    font-weight: 500;
    font-size: 17px;

    color: $gray-text-color;
    text-transform: uppercase;
  }

  .search {
    display: flex;
    align-items: center;
    flex: 1;
    width: 100%;
    max-width: 730px;
    border-radius: 40px;
    overflow: hidden;
    margin-bottom: 26px;
    border: 2px solid $border-gray-light-color;
    transition: all 0.4s ease-in-out;
    @media (min-width: 1200px) {
      max-width: 1200px;
    }

    &:hover {
      box-shadow: $box-shadow;
    }

    input#search {
      width: 100%;
      padding: 0 16px;
      line-height: 40px;
      border: none;

      &:focus {
        outline: none;
      }
    }

    label {
      cursor: pointer;
      padding: 0 16px;
      line-height: 40px;
      color: $white-text-color;
      background-color: $light-green-color;
    }
  }

  .tags {
    display: flex;
    flex-wrap: wrap;
    margin-top: 16px;

    li {
      margin-bottom: 10px;

      &:not(:last-child) {
        margin-right: 8px;
      }

      span {
        display: block;
        border-radius: 40px;
        padding: 8px 16px;
        background-color: $bg-secondary-color;
        cursor: pointer;
        transition: all 0.3s ease-out;

        &:hover {
          color: $white-text-color;
          background-color: $bg-light-green-color;
          box-shadow: $box-shadow;
        }
      }
    }
  }

  .list-blogs {
    margin-top: 24px;
  }

  input#editPost {
    position: relative;
    width: 69px;
    height: 30px;
    border: none;
    border-radius: 20px;
    -webkit-appearance: none;
    background-color: $bg-secondary-color;
    outline: none;
    box-shadow: $box-shadow;
    cursor: pointer;

    &::before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      width: 30px;
      height: 30px;
      border-radius: 20px;
      background-color: $bg-primary-color;
      transform: scale(1.01);
      transition: 750ms ease all;
      box-shadow: $box-shadow;
    }

    &:checked::before {
      background-color: $bg-color;
      left: 38px;
    }
  }
}
</style>
