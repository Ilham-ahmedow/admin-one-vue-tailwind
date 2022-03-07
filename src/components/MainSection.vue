<script setup>
import { onMounted } from 'vue'
import { useRouter } from 'vue-router'
import { useStore } from 'vuex'

const router = useRouter()
const store = useStore()

onMounted(() => {
  console.log(store.state.userEmail)
  if (store.state.userEmail === null) {
    router.push('Login')
  }
})
</script>

<template>
  <section class="px-0 md:px-6 py-6">
    <slot />
  </section>
</template>
