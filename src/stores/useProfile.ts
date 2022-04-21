import { defineStore } from 'pinia'
import firebase from 'firebase/app'
import db from '@/firebase/firebaseInit'
import 'firebase/auth'

interface UserProfileInterface {
  profileEmail: string
  profileUsername: string
  profileLastName: string
  profileFirstName: string
  profileUserId: string
  user: any
  profileInitials: string
}

export const useProfileStore = defineStore('useProfile', {
  state: (): UserProfileInterface => ({
    profileEmail: '',
    profileUsername: '',
    profileFirstName: '',
    profileLastName: '',
    profileInitials: '',
    profileUserId: '',
    user: null
  }),
  getters: {
    getUser(state) {
      return state.user
    }
  },
  actions: {
    async getCurrentUser() {
      const database = await db.collection('users').doc(firebase.auth().currentUser?.uid)
      const dbResult = await database.get()

      this.profileUserId = dbResult.id
      this.profileEmail = dbResult.data()?.email
      this.profileFirstName = dbResult.data()?.firstName
      this.profileLastName = dbResult.data()?.lastName
      this.profileUsername = dbResult.data()?.username

      const userLastname: string = (await this.profileFirstName
        .match(/(\b\S)?/g)
        ?.join('')) as string
      const userFirstname: string = (await this.profileLastName
        .match(/(\b\S)?/g)
        ?.join('')) as string

      this.profileInitials = userLastname + userFirstname
    },

    async updateUserSettings() {
      const database = await db.collection('users').doc(this.profileUserId)

      await database.update({
        firstName: this.profileFirstName,
        lastName: this.profileLastName,
        username: this.profileUsername
      })

      const userLastname: string = (await this.profileFirstName
        .match(/(\b\S)?/g)
        ?.join('')) as string
      const userFirstname: string = (await this.profileLastName
        .match(/(\b\S)?/g)
        ?.join('')) as string

      this.profileInitials = userLastname + userFirstname
    },

    updateUser(user: unknown): void {
      this.user = user
    }
  }
})
