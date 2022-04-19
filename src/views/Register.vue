<template>
  <div class="form-wrap">
    <form action="" class="register">
      <p class="login-register">
        Bạn đã có tài khoản
        <router-link class="router-link" :to="{ name: 'Login' }">Đăng nhập</router-link>
        tại đây.
      </p>
      <h2>Đăng ký Dev's Café</h2>
      <div class="inputs">
        <div class="input">
          <input type="text" id="firstName" placeholder="Nhập Tên" v-model="firstName" />
          <User class="icon" />
        </div>
        <div class="input">
          <input type="text" id="lastName" placeholder="Nhập Họ" v-model="lastName" />
          <User class="icon" />
        </div>
        <div class="input">
          <input type="text" id="email" placeholder="Nhập Email" v-model="email" />
          <Email class="icon" />
        </div>
        <div class="input">
          <input type="text" id="userName" placeholder="Nhập Tài Khoản" v-model="userName" />
          <User class="icon" />
        </div>
        <div class="input">
          <input type="password" id="password" placeholder="Nhập Password" v-model="password" />
          <Password class="icon" />
        </div>
      </div>
      <button>Đăng Ký</button>
      <div class="angle"></div>
    </form>
    <div class="background"></div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'

import Email from '@/assets/Icons/envelope-regular.svg?component'
import Password from '@/assets/Icons/lock-alt-solid.svg?component'
import User from '@/assets/Icons/user-alt-light.svg?component'

export default defineComponent({
  name: 'Register',
  components: {
    Email,
    Password,
    User
  },
  setup() {
    const userName = ref<string>('')
    const password = ref<string>('')
    const firstName = ref<string>('')
    const lastName = ref<string>('')
    const email = ref<string>('')

    return {
      userName,
      password,
      firstName,
      lastName,
      email
    }
  }
})
</script>

<style lang="scss"></style>
