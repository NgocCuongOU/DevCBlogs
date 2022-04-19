<template>
  <div class="reset-password">
    <Teleport to="body">
      <Modal :modal-message="modalMessage" v-if="isModal" @onCloseModal="handleCloseModal" />
    </Teleport>
    <Teleport to="body">
      <Loading v-if="isLoading" />
    </Teleport>
    <div class="form-wrap">
      <form class="reset" @submit.prevent="handleReset">
        <p class="login-register">
          Trở lại
          <router-link class="router-link" :to="{ name: 'Login' }">Đăng nhập.</router-link>
        </p>
        <h2>
          Đặt lại mật khẩu
          <br />
          Dev's Café
        </h2>
        <p>
          Bạn đã quên mật khẩu? Vui lòng nhập lại
          <strong>email</strong>
          để đặt lại mật khẩu mới!
        </p>
        <div class="inputs">
          <div class="input">
            <input type="email" id="email" placeholder="Nhập email đã đăng ký" v-model="email" />
            <Email class="icon" />
          </div>
        </div>
        <button type="submit">Thiết Lập Mới</button>
        <div class="angle"></div>
      </form>
      <div class="background"></div>
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent, ref } from 'vue'
import firebase from 'firebase/app'
import 'firebase/auth'

import Email from '@/assets/Icons/envelope-regular.svg?component'
import Modal from '@/components/Modal/Modal.vue'
import Loading from '@/components/Reuseable/Loading.vue'

export default defineComponent({
  name: 'ForgotPassword',
  components: {
    Email,
    Modal,
    Loading
  },
  setup() {
    const email = ref<string>('')
    const modalMessage = ref<string>('Hello world')
    const isModal = ref<boolean>(false)
    const isLoading = ref<boolean>(false)

    const handleCloseModal = () => {
      isModal.value = !isModal.value
    }

    const handleReset = () => {
      isLoading.value = true

      firebase
        .auth()
        .sendPasswordResetEmail(email.value)
        .then(() => {
          isLoading.value = false
          isModal.value = true
          modalMessage.value =
            'Chúng tôi đã gửi đi một tin nhắn tới email của bạn. Vui lòng đăng nhập vào email để đổi mật khẩu!'
        })
        .catch(() => {
          isLoading.value = false
          isModal.value = true
          modalMessage.value = 'Vui lòng nhập đúng email của bạn!'
        })
    }

    return {
      email,
      modalMessage,
      isModal,
      isLoading,
      handleCloseModal,
      handleReset
    }
  }
})
</script>
<style lang="scss" scoped>
.reset-password {
  position: relative;

  .form-wrap {
    .reset {
      h2 {
        margin-bottom: 8px;
        @media (min-width: 900px) {
          font-size: 38px;
        }
      }

      p {
        text-align: center;
        margin-bottom: 32px;
      }
    }
  }
}
</style>
