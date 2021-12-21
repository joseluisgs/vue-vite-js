import { defineStore } from 'pinia'

const UserStore = defineStore({
  id: 'UserStore',
  // arrow function recommended for full type inference
  state: () => {
    return {
      counter: 0,
      name: 'joseluisgs'
    }
  }
})

export default UserStore
