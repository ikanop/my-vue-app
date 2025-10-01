<script setup>
import {ref} from 'vue'

const Switch = ref(false)

function toggle() {
  Switch.value = !Switch.value
}
</script>

<template>
  <div class="switch-container">
    <button :class="Switch ? 'true' : 'false'" class="switch-btn" @click="toggle">
      {{ Switch ? 'True' : 'False' }}
    </button>
    <h3>
      {{ Switch ? 'Fish' : 'PufferFish' }}</h3>
  </div>
</template>

<style scoped>
.switch-container {
  display: flex;
  flex-direction: column;
  width: 100px;
}

.switch-btn {
  color: var(--text-color);
}

.true {
  background-color: var(--green);
}

.true:hover {
  background-color: var(--dark-green);
}

.false {
  background-color: var(--red);
}

.false:hover {
  background-color: var(--dark-red);
}
</style>