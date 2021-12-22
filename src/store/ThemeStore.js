import { defineStore } from 'pinia'

const ThemeStore = defineStore({
  id: 'ThemeStore',

  state: () => ({
    theme: 'light'
  }),

  actions: {
    /**
     * Cambia el tema con la cadena que tengamos
     * @param {string} newTheme
     */
    setTheme (newTheme) {
      this.theme = newTheme
      console.log(`Store set Theme to: ${newTheme}`)
      localStorage.setItem('theme', newTheme)
      if (this.theme === 'light') {
        document.querySelector('html').classList.remove('dark')
      } else {
        document.querySelector('html').classList.add('dark')
      }
    },

    /**
     * Inicia la aplicación con un tema determinado
     */
    initTheme () {
      // Existe ya un tema en store?
      const cachedTheme = localStorage.theme ? localStorage.theme : false
      // tenemos un tema en el sistema operativo o explorador
      const userPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches
      if (cachedTheme) this.setTheme(cachedTheme)
      else if (userPrefersDark) this.setTheme('dark')
      else this.setTheme('light')
      console.log('Store init Theme', this.theme)
    }
  }
})

export default ThemeStore
