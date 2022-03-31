<template>
  <div class="app-wrapper">
    <div class="app">
      <Header />
      <RouterView />
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue'
import Header from '@/components/Header/Header.vue'
import { RouterView } from 'vue-router'

export default defineComponent({
  components: { Header, RouterView },
  setup() {}
})
</script>

<style lang="scss">
@import '@/assets/scss/base.scss';
</style>
