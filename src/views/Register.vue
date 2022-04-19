<template>
  <div class="form-wrap">
    <form action="" class="register" @submit.prevent="handleSubmitRegister">
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
          <input type="text" id="userName" placeholder="Nhập Tài Khoản" v-model="username" />
          <User class="icon" />
        </div>
        <div class="input">
          <input type="password" id="password" placeholder="Nhập Password" v-model="password" />
          <Password class="icon" />
        </div>
      </div>
      <div class="error" v-show="error">{{ error.errorMessage }}</div>
      <button type="submit">Đăng Ký</button>
      <div class="angle"></div>
    </form>
    <div class="background"></div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, reactive } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import firebase from 'firebase/app'
import 'firebase/auth'
import db from '@/firebase/firebaseInit'

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
    const username = ref<string>('')
    const password = ref<string>('')
    const firstName = ref<string>('')
    const lastName = ref<string>('')
    const email = ref<string>('')
    const error = reactive({
      isError: false,
      errorMessage: ''
    })

    const router = useRouter()

    const validateEmail = (email: string) => {
      return String(email)
        .toLowerCase()
        .match(
          /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        )
    }

    const handleSubmitRegister = async () => {
      if (
        username.value !== '' &&
        password.value !== '' &&
        firstName.value !== '' &&
        lastName.value !== '' &&
        email.value !== ''
      ) {
        if (!validateEmail(email.value)) {
          error.isError = true
          error.errorMessage = 'Vui lòng nhập email hợp lệ!'
        } else {
          error.isError = false
          error.errorMessage = ''

          const firebaseAuth = await firebase.auth()
          const createUser = await firebaseAuth.createUserWithEmailAndPassword(
            email.value,
            password.value
          )
          const result = await createUser
          const database = db.collection('users').doc(result.user?.uid)

          await database.set({
            username: username.value,
            firstName: firstName.value,
            lastName: lastName.value,
            email: email.value
          })

          router.push({ name: 'Home' })

          return
        }
      } else {
        error.isError = true
        error.errorMessage = 'Vui lòng điền đầy đủ thông tin!'
      }
    }

    return {
      username,
      password,
      firstName,
      lastName,
      email,
      error,
      handleSubmitRegister
    }
  }
})
</script>

<style lang="scss"></style>
