<template>
  <header>
    <nav class="container">
      <div class="branding">
        <h1>
          <router-link class="header" :to="{ name: 'Home' }">
            <img src="@/assets/logo-c.png" alt="dev c" />
            DevBlogs
          </router-link>
        </h1>
      </div>
      <div class="nav-links">
        <ul>
          <li><router-link class="link" to="#">Home</router-link></li>
          <li><router-link class="link" to="#">Blogs</router-link></li>
          <li><router-link class="link" to="#">Create Post</router-link></li>
          <li><router-link class="link" to="#">Login/Register</router-link></li>
        </ul>
      </div>
    </nav>
    <MenuIcon />
    <transition name="mobile-nav">
      <ul>
        <li><router-link class="link" to="#">Home</router-link></li>
        <li><router-link class="link" to="#">Blogs</router-link></li>
        <li><router-link class="link" to="#">Create Post</router-link></li>
        <li><router-link class="link" to="#">Login/Register</router-link></li>
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
  setup() {}
})
</script>
<style lang="scss" scoped></style>
