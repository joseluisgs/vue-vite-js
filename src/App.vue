<template>
  <div
    id="nav"
    class="flex justify-center p-10"
  >
    <router-link
      to="/"
      class="font-semibold text-gray-500 hover:text-gray-300"
    >
      Home
    </router-link> |
    <router-link
      to="/about"
      class="font-semibold text-gray-500 hover:text-gray-300"
    >
      About
    </router-link>
    <a
      href="#"
      @click.prevent="toggleTheme"
    >
      <Icon
        v-if="themeStore.theme === 'light'"
        icon="feather:moon"
        class="m-1 w-5 text-liText-ternary-dark hover:text-gray-400 dark:text-liText-ternary-light dark:hover:text-liBorder-primary-light"
      />
      <Icon
        v-else
        icon="feather:sun"
        class="m-1 w-5 text-gray-200 hover:text-gray-50"
      />
    </a>
  </div>
  <router-view v-slot="{ Component }">
    <transition
      name="fade"
      mode="out-in"
    >
      <component :is="Component" />
    </transition>
  </router-view>
</template>

<script setup>
import { onBeforeMount } from 'vue'
import ThemeStore from './store/ThemeStore'
import { Icon } from '@iconify/vue'

const themeStore = ThemeStore()
onBeforeMount(() => {
  themeStore.initTheme()
})

const toggleTheme = () => {
  const newTheme = themeStore.theme === 'light' ? 'dark' : 'light'
  themeStore.setTheme(newTheme)
}

</script>

<style>

#nav a.router-link-exact-active {
  color: #42b983;
}

/* Programamos las transiciones
https://vuejs.org/v2/guide/transitions.html */
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.2s;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}
</style>
