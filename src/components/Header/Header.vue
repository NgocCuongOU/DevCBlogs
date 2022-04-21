<template>
  <header>
    <nav class="container">
      <div class="branding">
        <h1>
          <router-link class="header" :to="{ name: 'Home' }">
            <img src="@/assets/logo-c.png" alt="dev c" class="logo-width-height" />
            Dev's Café
          </router-link>
        </h1>
      </div>
      <div class="nav-links">
        <ul v-show="!isMobile">
          <li><router-link class="link" :to="{ name: 'Home' }">Trang Chủ</router-link></li>
          <li>
            <router-link class="link" :to="{ name: 'Blogs' }">Danh Sách Bài Đăng</router-link>
          </li>
          <li><router-link class="link" to="#">Tạo Bài Viết</router-link></li>
          <li v-if="!getUser">
            <router-link class="link" :to="{ name: 'Login' }">Đăng Nhập/Đăng Ký</router-link>
          </li>
        </ul>
        <div v-if="getUser" class="profile" ref="profile" @click="handleToggleProfile">
          <span>{{ profileInitials }}</span>
          <div v-show="isShowProfile" class="profile-menu">
            <div class="info">
              <p class="initials">
                {{ profileInitials }}
              </p>
              <div class="right">
                <p>{{ profileLastName }} {{ profileFirstName }}</p>
                <p>
                  {{ profileUsername }}
                </p>
                <p>{{ profileEmail }}</p>
              </div>
            </div>
            <div class="options">
              <div class="option">
                <router-link class="option" :to="{ name: 'Profile' }">
                  <UserIcon class="icon" />
                  <p>Trang cá nhân</p>
                </router-link>
              </div>
              <div class="option">
                <router-link class="option" :to="{ name: 'Admin' }">
                  <AdminIcon class="icon" />
                  <p>Admin</p>
                </router-link>
              </div>
              <div @click="handleSignOut" class="option">
                <SignOutIcon class="icon" />
                <p>Đăng xuất</p>
              </div>
            </div>
          </div>
        </div>
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
        <li><router-link class="link" :to="{ name: 'Blogs' }">Danh Sách Bài Đăng</router-link></li>
        <li><router-link class="link" to="#">Tạo Bài Viết</router-link></li>
        <li v-if="!getUser">
          <router-link class="link" :to="{ name: 'Login' }">Đăng Nhập/Đăng Ký</router-link>
        </li>
      </ul>
    </transition>
  </header>
</template>
<script lang="ts">
import { defineComponent } from 'vue'
import { mapState } from 'pinia'
import { useProfileStore } from '@/stores/useProfile'
import firebase from 'firebase/app'
import 'firebase/auth'

import MenuIcon from '@/assets/Icons/bars-regular.svg?component'
import UserIcon from '@/assets/Icons/user-alt-light.svg?component'
import AdminIcon from '@/assets/Icons/user-crown-light.svg?component'
import SignOutIcon from '@/assets/Icons/sign-out-alt-regular.svg?component'

export default defineComponent({
  components: {
    MenuIcon,
    UserIcon,
    AdminIcon,
    SignOutIcon
  },
  data() {
    return {
      isShowProfile: null as unknown as boolean,
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
    },

    handleToggleProfile(event: Event): void {
      if (this.$refs.profile === event.target) {
        this.isShowProfile = !this.isShowProfile
      }
    },

    handleSignOut() {
      firebase.auth().signOut()
      window.location.reload()
    }
  },
  computed: {
    ...mapState(useProfileStore, [
      'profileEmail',
      'profileFirstName',
      'profileInitials',
      'profileUserId',
      'profileLastName',
      'user',
      'profileUsername',
      'getUser'
    ])
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
      color: $light-green-text-color;
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

        img {
          @media (min-width: 700px) and (max-width: 800px) {
            display: none;
          }
        }
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
        @media (min-width: 700px) and (max-width: 800px) {
          margin-right: 0px;
        }

        li {
          display: inline-block;

          &:not(:last-child) {
            margin-right: 32px;

            @media (min-width: 700px) and (max-width: 800px) {
              margin-right: -6px;
            }
          }
        }
      }

      .profile {
        position: relative;
        display: flex;
        justify-content: center;
        align-items: center;
        cursor: pointer;
        width: 40px;
        height: 40px;
        border-radius: 50%;
        color: $white-text-color;
        background-color: $bg-primary-color;
        box-shadow: $box-shadow;
        @media (max-width: 500px) {
          display: none;
        }

        @media (min-width: 700px) and (max-width: 800px) {
          margin-left: 12px;
        }

        > span {
          pointer-events: none;
        }

        &-menu {
          position: absolute;
          top: 65px;
          right: 0;
          width: 250px;
          background-color: $bg-primary-color;
          box-shadow: $box-shadow;

          .info {
            display: flex;
            align-items: center;
            padding: 15px;
            border-bottom: 1px solid $border-white-color;

            .initials {
              position: initial;
              width: 40px;
              height: 40px;
              background-color: $bg-secondary-color;
              color: $black-light-text-color;
              display: flex;
              align-items: center;
              justify-content: center;
              border-radius: 50%;
            }

            .right {
              flex: 1;
              margin-left: 24px;

              p:nth-child(1) {
                font-size: 14px;
              }

              p:nth-child(2),
              p:nth-child(3) {
                font-size: 12px;
              }
            }
          }

          .options {
            padding: 15px;

            .option {
              display: flex;
              align-items: center;
              color: $white-text-color;
              margin-bottom: 12px;
              text-decoration: none;

              .icon {
                width: 18px;
                height: auto;
              }

              p {
                font-size: 14px;
                margin-left: 12px;
              }

              &:last-child {
                margin-bottom: 0px;
              }
            }
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
