<template>
  <div class="form-wrap">
    <form action="" class="login">
      <p class="login-register">
        Bạn chưa có tài khoản?
        <router-link class="router-link" :to="{ name: 'Register' }">Đăng ký</router-link>
        tại đây.
      </p>
      <h2>Đăng nhập Dev's Café</h2>
      <div class="inputs">
        <div class="input">
          <input type="text" id="email" placeholder="Nhập Email" v-model="email" />
          <Email class="icon" />
        </div>
        <div class="input">
          <input type="password" id="password" placeholder="Nhập Password" v-model="password" />
          <Password class="icon" />
        </div>
      </div>
      <router-link class="forgot-password" :to="{ name: 'ForgotPassword' }">
        Bạn quên mật khẩu?
      </router-link>
      <button>Đăng Nhập</button>
      <div class="angle"></div>
    </form>
    <div class="background"></div>
  </div>
</template>
<script lang="ts">
import { defineComponent, ref } from 'vue'

import Email from '@/assets/Icons/envelope-regular.svg?component'
import Password from '@/assets/Icons/lock-alt-solid.svg?component'

export default defineComponent({
  name: 'Login',
  components: {
    Email,
    Password
  },
  setup() {
    const email = ref<string>('')
    const password = ref<string>('')

    return {
      email,
      password
    }
  }
})
</script>
<style lang="scss">
@import '@/assets/scss/_variables.scss';
.form-wrap {
  display: flex;
  overflow: hidden;
  justify-content: center;
  align-self: center;
  margin: 0 auto;
  height: 100vh;
  width: 90%;
  @media (min-width: 900px) {
    width: 100%;
  }

  .login-register {
    margin-bottom: 32px;
    text-align: center;

    .router-link {
      font-weight: 500;
      color: $black-text-color;
      transition: all 0.5s ease;

      &:hover {
        color: $light-green-text-color;
      }
    }
  }

  form {
    position: relative;
    padding: 0 10px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    flex: 1;
    @media (min-width: 900px) {
      padding: 0 50px;
    }

    h2 {
      margin-bottom: 40px;
      text-align: center;
      font-size: 32px;
      color: $black-light-text-color;
      @media (min-width: 900px) {
        font-size: 40px;
      }
    }

    .inputs {
      width: 100%;
      max-width: 350px;

      .input {
        position: relative;
        display: flex;
        justify-content: center;
        align-items: center;
        margin-bottom: 8px;

        input {
          width: 100%;
          padding: 4px 4px 4px 30px;
          height: 50px;
          border: none;
          border-radius: 3px;
          background-color: $bg-white-gray-color;

          &:focus {
            outline: none;
          }
        }

        .icon {
          width: 12px;
          position: absolute;
          left: 6px;
        }
      }
    }

    .forgot-password {
      color: $black-text-color;
      text-decoration: none;
      font-size: 14px;
      margin: 16px 0 8px;
      border-bottom: 1px solid transparent;
      cursor: pointer;
      transition: all 0.5s ease;

      &:hover {
        border-color: $border-primary-color;
      }
    }

    .angle {
      display: none;
      position: absolute;
      background-color: $bg-color;
      transform: rotateZ(3deg);
      width: 60px;
      right: -30px;
      height: 101%;
      @media (min-width: 900px) {
        display: block;
      }
    }
  }

  .background {
    display: none;
    flex: 2;
    width: 100%;
    height: 100%;
    background-image: url('@/assets/bacground/auth-background.jpg');
    background-size: cover;
    background-position: center center;
    background-repeat: no-repeat;
    @media (min-width: 900px) {
      display: initial;
    }
  }
}
</style>
