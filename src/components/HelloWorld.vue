<script setup>
// Probando el script setup para Vue3
import { ref } from 'vue'
import { Icon } from '@iconify/vue'
import UserStore from '../store/Userstore'

// De esta manera puedo pasar propiedades.
const props = defineProps({
  msg: String
})

const userStore = UserStore()
const count = ref(0)

</script>

<template>
  <div class="text-center">
    <h1 class="text-2xl">
      {{ props.msg }}
    </h1>
    <h2 class="text-xl">
      by: {{ userStore.name }}
    </h2>

    <p class="text-sm pt-1">
      Recommended IDE setup:
      <a
        href="https://code.visualstudio.com/"
        target="_blank"
        class="text-gray-400 hover:text-green-400"
      >VSCode</a>
      +
      <a
        href="https://github.com/johnsoncodehk/volar"
        target="_blank"
        class="text-gray-400 hover:text-green-400"
      >Volar</a>
    </p>

    <p class="text-sm pt-1">
      <a
        href="https://vitejs.dev/guide/features.html"
        target="_blank"
        class="text-gray-400 hover:text-green-400"
      >
        Vite Documentation
      </a>
      |
      <a
        href="https://v3.vuejs.org/"
        target="_blank"
        class="text-gray-400 hover:text-green-400"
      >Vue 3 Documentation</a>
    </p>

    <button
      type="button"
      class="rounded font-bold bg-gray-300 m-2 shadow-md py-2 px-4 text-gray-800 inline-flex items-center hover:bg-green-100"
      @click="count++"
    >
      <Icon
        icon="ic:outline-local-offer"
        class="mr-1"
      />
      Local counter is: {{ count }}
    </button>
    <button
      type="button"
      class="rounded font-bold bg-gray-300 m-2 shadow-md py-2 px-4 text-gray-800 inline-flex items-center hover:bg-green-100"
      @click="userStore.counter++"
    >
      <Icon
        icon="carbon:block-storage"
        class="mr-1"
      />
      Stored counter is: {{ userStore.counter }}
    </button>
    <p class="text-xs">
      Edit
      <code class="code">components/HelloWorld.vue</code> to test hot module replacement.
    </p>
  </div>
</template>

<style scoped>

</style>
