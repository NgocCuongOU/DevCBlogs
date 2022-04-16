<template>
  <footer>
    <div class="container">
      <div class="left">
        <div class="col-1">
          <router-link class="header" :to="{ name: 'Home' }">
            <h2>DevBlogs</h2>
          </router-link>
          <ul>
            <li>
              <a href="#" class="icons-width-height"><YouTube class="svg-icon" /></a>
            </li>
            <li>
              <a href="#" class="icons-width-height"><Twitter class="svg-icon" /></a>
            </li>
            <li>
              <a href="#" class="icons-width-height"><Instagram class="svg-icon" /></a>
            </li>
            <li>
              <a href="#" class="icons-width-height"><Linkedin class="svg-icon" /></a>
            </li>
          </ul>
        </div>
        <div class="col-2">
          <ul>
            <li>
              <router-link class="link" :to="{ name: 'Home' }">Home</router-link>
            </li>
            <li>
              <router-link class="link" :to="{ name: 'Blogs' }">Blogs</router-link>
            </li>
            <li>
              <router-link class="link" to="/">Create Post</router-link>
            </li>
            <li>
              <router-link class="link" to="/">Login In / Register</router-link>
            </li>
          </ul>
        </div>
      </div>
      <div class="right">
        <p>Copyright 2022 All Rights Reserved.</p>
      </div>
    </div>
  </footer>
</template>
<script lang="ts">
import { defineComponent } from 'vue'
import YouTube from '@/assets/Icons/youtube-brands.svg?component'
import Twitter from '@/assets/Icons/twitter-brands.svg?component'
import Linkedin from '@/assets/Icons/linkedin-brands.svg?component'
import Instagram from '@/assets/Icons/instagram-brands.svg?component'
export default defineComponent({
  name: 'Footer',
  components: {
    YouTube,
    Twitter,
    Linkedin,
    Instagram
  }
})
</script>
<style lang="scss" scoped>
@import '@/assets/scss/variables';

footer {
  margin-top: auto;
  padding: 100px 25px;
  background-color: $bg-primary-color;

  .container {
    display: flex;
    flex-direction: column;
    gap: 32px;
    @media screen and (min-width: 800px) {
      flex-direction: row;
      gap: 0px;
    }

    > div {
      display: flex;
      flex: 1;
    }

    .left {
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 32px;
      color: $white-text-color;
      @media (min-width: 800px) {
        flex-direction: row;
        align-items: initial;
        gap: 0;
      }

      .header {
        font-size: 24px;
        color: $white-text-color;
        text-decoration: none;
        font-weight: 600;
      }

      ul {
        display: flex;
        gap: 16px;
      }

      .col-1,
      .col-2 {
        display: flex;
        gap: 20px;
        flex: 1;

        @media (min-width: 800px) {
          gap: 0;
        }
      }

      .col-1 {
        flex-direction: column;

        h2 {
          text-align: center;

          @media (min-width: 800px) {
            text-align: initial;
          }
        }

        ul {
          margin-top: auto;
          align-items: center;
          justify-content: center;
          gap: 36px;
          li {
            display: flex;
            align-items: center;

            .svg-icon {
              color: $white-text-color;
            }
          }
        }
      }

      .col-2 {
        @media (min-width: 800px) {
          justify-content: center;
        }

        ul {
          height: 100%;
          justify-content: center;
          flex-direction: row;
          flex-wrap: wrap;

          @media (min-width: 800px) {
            flex-direction: column;
            align-items: center;
          }

          .link {
            font-size: 16px;
            font-weight: 500;
            color: $white-text-color;
          }
        }
      }
    }

    .right {
      gap: 32px;
      color: $white-text-color;
      flex-direction: column;
      align-items: center;
      @media (min-width: 800px) {
        align-items: flex-end;
        gap: 0;
      }
    }

    p {
      margin-top: auto;
    }
  }
}
</style>
