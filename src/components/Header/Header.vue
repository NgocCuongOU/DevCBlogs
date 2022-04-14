<template>
  <header>
    <nav class="container">
      <div class="branding">
        <h1>
          <router-link class="header" :to="{ name: 'Home' }">
            <img src="@/assets/logo-c.png" alt="dev c" class="logo-width-height" />
            DevBlogs
          </router-link>
        </h1>
      </div>
      <div class="nav-links">
        <ul v-show="!isMobile">
          <li><router-link class="link" :to="{ name: 'Home' }">Trang Chủ</router-link></li>
          <li><router-link class="link" to="#">Danh Sách Bài Đăng</router-link></li>
          <li><router-link class="link" to="#">Tạo Bài Viết</router-link></li>
          <li><router-link class="link" to="#">Đăng Nhập/Đăng Ký</router-link></li>
        </ul>
      </div>
    </nav>
    <MenuIcon
      class="menu-icon logo-width-height"
      @click="handleToggleMobileNav"
      v-show="isMobile"
    />
    <transition name="mobile-nav">
      <ul class="mobile-nav" v-show="mobileNav">
        <li><router-link class="link" :to="{ name: 'Home' }">Trang Chủ</router-link></li>
        <li><router-link class="link" to="#">Danh Sách Bài Đăng</router-link></li>
        <li><router-link class="link" to="#">Tạo Bài Viết</router-link></li>
        <li><router-link class="link" to="#">Đăng Nhập/Đăng Ký</router-link></li>
      </ul>
    </transition>
  </header>
</template>
<script lang="ts">
import { defineComponent } from 'vue'

import MenuIcon from '@/assets/Icons/bars-regular.svg?component'

export default defineComponent({
  components: {
    MenuIcon
  },
  data() {
    return {
      isMobile: null as unknown as boolean,
      mobileNav: null as unknown as boolean,
      windowWidth: null as unknown as number
    }
  },
  created() {
    window.addEventListener('resize', this.handleCheckMobile)

    this.handleCheckMobile()
  },
  methods: {
    handleCheckMobile(): void | undefined {
      this.windowWidth = window.innerWidth

      if (this.windowWidth <= 750) {
        this.isMobile = true

        return
      }

      this.isMobile = false
      this.mobileNav = false

      return
    },

    handleToggleMobileNav(): void {
      if (this.isMobile) this.mobileNav = !this.mobileNav
    }
  }
})
</script>
<style lang="scss" scoped>
@import '@/assets/scss/_variables.scss';

header {
  position: relative;
  padding: 0 25px;
  background-color: $bg-color;
  box-shadow: $box-shadow;
  z-index: 99;

  .link {
    font-weight: 500;
    padding: 0 8px;
    transition: 0.3s color ease;

    &:hover {
      color: $light-green-color;
    }
  }

  nav {
    display: flex;
    padding: 25px 0;

    .branding {
      display: flex;
      align-items: center;

      .header {
        font-weight: 600;
        font-size: 24px;
        text-decoration: none;
        color: $black-color;
      }
    }

    .nav-links {
      position: relative;
      display: flex;
      flex: 1;
      align-items: center;
      justify-content: flex-end;

      ul {
        margin-right: 32px;

        li {
          display: inline-block;

          &:not(:last-child) {
            margin-right: 32px;
          }
        }
      }
    }
  }

  .menu-icon {
    cursor: pointer;
    position: absolute;
    top: 50%;
    right: 32px;
    transform: translateY(-50%);
    width: auto;
  }

  .mobile-nav {
    position: fixed;
    top: 0;
    left: 0;
    width: 70%;
    max-width: 320px;
    height: 100%;
    padding: 20px;
    display: flex;
    flex-direction: column;
    background-color: $bg-primary-color;

    .link {
      padding: 15px 0;
      display: inline-block;
      color: $white-color;
    }
  }

  .mobile-nav-enter-active,
  .mobile-nav-leave-active {
    transition: all 1s ease;
  }

  .mobile-nav-enter {
    transform: translateX(-320);
  }

  .mobile-nav-enter-active {
    transform: translateX(0);
  }

  .mobile-nav-leave-to {
    transform: translateX(-100%);
  }
}
</style>
