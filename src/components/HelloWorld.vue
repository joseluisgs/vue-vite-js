<script setup>
// Probando el script setup para Vue3
import { ref } from 'vue'
import UserStore from '../store/Userstore'

// De esta manera puedo pasar propiedades.
const props = defineProps({
  msg: String
})

const userStore = UserStore()
const count = ref(0)

</script>

<template>
  <h1>{{ props.msg }}</h1>
  <h2>by: {{ userStore.name }}</h2>

  <p>
    Recommended IDE setup:
    <a
      href="https://code.visualstudio.com/"
      target="_blank"
    >VSCode</a>
    +
    <a
      href="https://github.com/johnsoncodehk/volar"
      target="_blank"
    >Volar</a>
  </p>

  <p>
    <a
      href="https://vitejs.dev/guide/features.html"
      target="_blank"
    >
      Vite Documentation
    </a>
    |
    <a
      href="https://v3.vuejs.org/"
      target="_blank"
    >Vue 3 Documentation</a>
  </p>

  <button
    type="button"
    @click="count++"
  >
    Local counter is: {{ count }}
  </button>
  <button
    type="button"
    @click="userStore.counter++"
  >
    Stored counter is: {{ userStore.counter }}
  </button>
  <p>
    Edit
    <code>components/HelloWorld.vue</code> to test hot module replacement.
  </p>
</template>

<style scoped>
a {
  color: #42b983;
}
</style>
