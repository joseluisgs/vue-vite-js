<template>
  <div class="home container mx-auto px-4">
    <div class="h-60 mb-8 flex justify-center">
      <transition name="fade">
        <img
          alt="Vue logo"
          src="../assets/images/logo.png"
        >
      </transition>
    </div>
    <HelloWorld msg="Welcome to Your Vue.js Vite JS App" />
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '../components/HelloWorld.vue'

export default {
  name: 'Home',
  components: {
    HelloWorld
  }
}
</script>

<style scoped>
.fade-enter-active {
  transition: opacity 1s ease-in-out;
}
.fade-enter-to {
  opacity: 1;
}
.fade-enter {
  opacity: 0;
}
</style>
