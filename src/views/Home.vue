<template>
  <div class="home container mx-auto px-4">
    <div class="h-60 mb-8 flex justify-center">
      <transition
        enter-active-class="transition ease-out duration-1000 transform"
        enter-from-class="-translate-x-100 opacity-0"
        enter-to-class="translate-x-0 opacity-100"
        leave-active-class="transition ease-in duration-1000 transform"
        leave-from-class="opacity-100"
        leave-to-class="opacity-0"
      >
        <img
          alt="Vue logo"
          src="../assets/images/logo.png"
        >
      </transition>
    </div>
    <HelloWorld msg="Welcome to Your Vue.js App" />
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
