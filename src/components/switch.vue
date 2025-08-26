<script setup>
import { ref } from 'vue'

const isFish = ref(false)

function toggle() {
  isFish.value = !isFish.value
}
</script>

<template>
  <button @click="toggle" style="cursor: pointer; margin-top: 20px;">Toggle</button>
  <h3 v-if="isFish">Fish</h3>
  <h3 v-else>PufferFish</h3>
</template>