<template>
  <div class="reset-password">
    <div class="form-wrap">
      <form action="" class="reset">
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
        <button>Thiết Lập Mới</button>
        <div class="angle"></div>
      </form>
      <div class="background"></div>
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent, ref } from 'vue'

import Email from '@/assets/Icons/envelope-regular.svg?component'

export default defineComponent({
  name: 'ForgotPassword',
  components: {
    Email
  },
  setup() {
    const email = ref<string>('')

    return {
      email
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
