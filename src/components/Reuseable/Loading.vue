<template>
  <div class="loading">
    <span></span>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'Loading',
  setup() {}
})
</script>

<style lang="scss" scoped>
.loading {
  position: fixed;
  top: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 101;
  @keyframes spin {
    to {
      transform: rotateZ(360deg);
    }
  }

  span {
    display: block;
    width: 60px;
    height: 60px;
    margin: 0 auto;
    border: 3px solid transparent;
    border-top-color: #ffffff;
    border-bottom-color: #ffffff;
    border-radius: 50%;
    animation: spin ease 1000ms infinite;
  }
}
</style>
