<template>
  <div class="app-wrapper">
    <div class="app">
      <Header v-if="isShowNavFoot" />
      <RouterView />
      <Footer v-if="isShowNavFoot" />
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent, ref } from 'vue'
import { mapActions } from 'pinia'
import { RouterView } from 'vue-router'
import firebase from 'firebase/app'
import 'firebase/auth'

import { useProfileStore } from '@/stores/useProfile'
import Header from '@/components/Header/Header.vue'
import Footer from '@/components/Footer/Footer.vue'

export default defineComponent({
  components: { Header, RouterView, Footer },
  setup() {
    let isShowNavFoot = ref<unknown>(null)
    const profileStore = useProfileStore()

    return {
      isShowNavFoot,
      profileStore,
      updateUser: profileStore.updateUser,
      getCurrentUser: profileStore.getCurrentUser
    }
  },
  created() {
    firebase.auth().onAuthStateChanged((user) => {
      this.updateUser(user)

      if (user) {
        this.getCurrentUser()
      }
    })

    this.checkRoutes()
  },
  methods: {
    checkRoutes(): void | undefined {
      if (
        this.$route.name === 'Login' ||
        this.$route.name === 'Register' ||
        this.$route.name === 'ForgotPassword'
      ) {
        this.isShowNavFoot = false

        return
      }

      this.isShowNavFoot = true

      return
    }
  },
  computed: {
    ...mapActions(useProfileStore, ['getCurrentUser', 'updateUser'])
  },
  watch: {
    $route() {
      this.checkRoutes()
    }
  }
})
</script>

<style lang="scss">
@import '@/assets/scss/_variables.scss';
@import '@/assets/scss/base.scss';

.blog-card-wrap {
  position: relative;
  padding: 80px 16px;
  background-color: $bg-secondary-color;
  @media (min-width: 500px) {
    padding: 100px 16px;
  }

  .blog-cards {
    display: grid;
    gap: 32px;
    grid-template-columns: 1fr;
    @media (min-width: 500px) {
      grid-template-columns: repeat(2, 1fr);
    }

    @media (min-width: 900px) {
      grid-template-columns: repeat(3, 1fr);
    }

    @media (min-width: 1200px) {
      grid-template-columns: repeat(4, 1fr);
    }
  }
}

.error {
  text-align: center;
  color: #cc0000;
}
</style>
