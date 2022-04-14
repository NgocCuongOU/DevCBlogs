<template>
  <div class="app-wrapper">
    <div class="app">
      <Header />
      <RouterView />
      <Footer />
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue'
import { RouterView } from 'vue-router'

import Header from '@/components/Header/Header.vue'
import Footer from '@/components/Footer/Footer.vue'

export default defineComponent({
  components: { Header, RouterView, Footer },
  setup() {}
})
</script>

<style lang="scss">
@import '@/assets/scss/_variables.scss';
@import '@/assets/scss/base.scss';
</style>
