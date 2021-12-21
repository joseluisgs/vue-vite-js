<template>
  <div
    id="nav"
    class="flex p-10 justify-center"
  >
    <router-link
      to="/"
      class="font-semibold text-gray-400 hover:text-green-200"
    >
      Home
    </router-link>
    |
    <router-link
      to="/about"
      class="font-semibold text-gray-400 hover:text-green-200"
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
        class="m-1 text-gray-400 w-5 hover:text-indigo-700"
      />
      <Icon
        v-else
        icon="feather:sun"
        class="m-1 text-gray-200 w-5 hover:text-yellow-300"
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
