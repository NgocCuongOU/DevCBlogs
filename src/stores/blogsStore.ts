import { defineStore } from 'pinia'

export const useBlogStore = defineStore({
  id: 'blogStore',
  state: () => ({
    counter: 0,
    sampleBlogCard: [
      {
        blogTitle: 'Blog Card #1',
        author: 'Ngọc Cường',
        createdDate: 'May 1, 2022'
      },
      {
        blogTitle: 'Blog Card #2',
        author: 'Ngọc Cường',
        createdDate: 'May 1, 2022'
      },
      {
        blogTitle: 'Blog Card #3',
        author: 'Ngọc Cường',
        createdDate: 'May 1, 2022'
      },
      {
        blogTitle: 'Blog Card #4',
        author: 'Ngọc Cường',
        createdDate: 'May 1, 2022'
      }
    ],
    editPost: null
  }),
  getters: {
    doubleCount: (state) => state.counter * 2,
    getSampleBlogCard: (state) => state.sampleBlogCard
  },
  actions: {
    increment() {
      this.counter++
    }
  }
})
