<script setup>
import { ref } from 'vue'

const Fish = ref(false)

function toggle() {
  Fish.value = !Fish.value
}
</script>

<template>
  <button @click="toggle" style="margin-top: 20px;">Toggle</button>
  <h3 v-if="Fish">Fish</h3>
  <h3 v-else>PufferFish</h3>
</template>