<script setup>
import { ref, onMounted } from 'vue'

const pElementRef = ref(null)

onMounted(() => {
  pElementRef.value.textContent = 'mounted!'
  pElementRef.value.className = 'mountedStatus'
})
</script>

<template>
  <p ref="pElementRef">Hello</p>
</template>

<style scoped>
  .mountedStatus {
    position: absolute;
    right: 0;
    bottom: 0;
    margin: 0;
  }
</style>