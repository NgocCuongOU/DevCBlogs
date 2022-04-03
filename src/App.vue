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
import { RouterView } from 'vue-router'
import Header from '@/components/Header/Header.vue'

export default defineComponent({
  components: { Header, RouterView },
  setup() {}
})
</script>

<style lang="scss"></style>
