import { defineStore } from 'pinia'

interface IconsInterface {
  isShow: boolean
}

export const useIconsStore = defineStore('iconStore', {
  state: (): IconsInterface => {
    return {
      isShow: false
    }
  },
  getters: {
    getStatusShow(state: IconsInterface): boolean {
      return state.isShow
    }
  },
  actions: {
    handleToggleIcons(): void {
      this.isShow = !this.isShow
    }
  }
})
