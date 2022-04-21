<template>
  <div class="profile">
    <Teleport to="body">
      <Modal v-if="isShowModal" :modalMessage="modalMessage" @onCloseModal="handleCloseModal" />
    </Teleport>
    <div class="container">
      <h2>Thiết lập tài khoản</h2>
      <div class="profile-info">
        <div class="initials">{{ profileInitials }}</div>
        <div class="admin-badge">
          <AdminIcon class="icon" />
          <span>admin</span>
        </div>
        <div class="input">
          <label for="firstName">Tên người dùng:</label>
          <input type="text" id="firstName" v-model="firstName" />
        </div>
        <div class="input">
          <label for="lastName">Họ người dùng:</label>
          <input type="text" id="lastName" v-model="lastName" />
        </div>
        <div class="input">
          <label for="username">Username:</label>
          <input type="text" id="username" v-model="username" />
        </div>
        <div class="input">
          <label for="email">Email:</label>
          <input type="text" id="email" v-model="email" />
        </div>
        <button @click="handleSaveChanged">Lưu thay đổi</button>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent, ref } from 'vue'
import { mapState, storeToRefs, mapActions } from 'pinia'

import Modal from '@/components/Modal/Modal.vue'
import { useProfileStore } from '@/stores/useProfile'
import AdminIcon from '@/assets/Icons/user-crown-light.svg?component'

export default defineComponent({
  name: 'Profile',
  components: {
    Modal,
    AdminIcon
  },
  setup() {
    const isShowModal = ref<boolean>(false)
    const modalMessage = ref<string>('Lưu Thông Tin Thành Công!!!')
    const profileStore = useProfileStore()

    const {
      profileEmail: email,
      profileFirstName: firstName,
      profileLastName: lastName,
      profileUsername: username
    } = storeToRefs(profileStore)

    const handleCloseModal = () => {
      isShowModal.value = !isShowModal.value
    }

    const handleSaveChanged = () => {
      profileStore.updateUserSettings()
      isShowModal.value = !isShowModal.value
    }

    return {
      isShowModal,
      modalMessage,
      firstName,
      lastName,
      email,
      username,
      handleCloseModal,
      handleSaveChanged
    }
  },
  computed: {
    ...mapState(useProfileStore, ['profileInitials'])
  }
})
</script>

<style lang="scss" scoped>
@import '@/assets/scss/variables';

.profile {
  .container {
    max-width: 1000px;
    padding: 60px 25px;

    h2 {
      margin-bottom: 16px;
      text-align: center;
      font-weight: 300;
      font-size: 32px;
      text-transform: uppercase;
    }

    .profile-info {
      padding: 32px;
      border-radius: 8px;
      box-shadow: $box-shadow;
      background-color: $bg-secondary-color;
      display: flex;
      flex-direction: column;
      max-width: 650px;
      margin: 32px auto;

      .initials {
        position: initial;
        display: flex;
        align-items: center;
        justify-content: center;
        margin: 0 auto;
        width: 80px;
        height: 80px;
        border-radius: 50%;
        font-size: 32px;
        background-color: $bg-primary-color;
        color: $white-text-color;
        box-shadow: $box-shadow;
      }

      .admin-badge {
        display: flex;
        align-self: center;
        padding: 8px 24px;
        margin: 14px 0;
        text-align: center;
        text-transform: capitalize;
        font-size: 14px;
        border-radius: 8px;
        color: $white-text-color;
        background-color: $bg-primary-color;

        .icon {
          width: 14px;
          height: auto;
          margin-right: 8px;
        }
      }

      .input {
        margin: 16px 0;

        label {
          font-size: 14px;
          display: block;
          padding-bottom: 6px;
        }

        input {
          width: 100%;
          border: none;
          padding: 8px;
          height: 50px;
          background-color: $bg-white-gray-color;

          &:focus {
            outline: none;
          }
        }
      }

      button {
        align-self: center;
      }
    }
  }
}
</style>
