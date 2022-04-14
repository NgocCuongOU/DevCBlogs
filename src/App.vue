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

.blog-card-wrap {
  position: relative;
  padding: 80px 16px;
  background-color: $bg-secondary-color;
  @media (min-width: 500px) {
    padding: 100px 16px;
  }

  .blog-cards {
    display: grid;
    gap: 32px;
    grid-template-columns: 1fr;
    @media (min-width: 500px) {
      grid-template-columns: repeat(2, 1fr);
    }

    @media (min-width: 900px) {
      grid-template-columns: repeat(3, 1fr);
    }

    @media (min-width: 1200px) {
      grid-template-columns: repeat(4, 1fr);
    }
  }
}
</style>
