<template>
  <div class="modal">
    <div class="modal-content">
      <p>{{ modalMessage }}</p>
      <button @click="closeModal">Đóng</button>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'Modal',
  props: {
    modalMessage: {
      type: String,
      required: true
    }
  },
  setup(props, { emit }) {
    function closeModal() {
      emit('onCloseModal')
    }

    return {
      closeModal
    }
  }
})
</script>

<style lang="scss" scoped>
@import '@/assets/scss/variables';

.modal {
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  z-index: 101;
  width: 100%;
  height: 100%;
  top: 0;
  background-color: rgba(0, 0, 0, 0.7);

  .modal-content {
    display: flex;
    flex-direction: column;
    justify-content: center;
    border-radius: 8px;
    width: 370px;
    padding: 40px 30px;
    background-color: $bg-secondary-color;

    p {
      text-align: center;
    }

    button {
      align-self: center;
    }
  }
}
</style>
