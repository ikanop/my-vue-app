<script setup>
import { ref } from 'vue'

const Switch = ref(false)

function toggle() {
  Switch.value = !Switch.value
}
</script>

<template>
  <div class="switch-container">
    <button @click="toggle" :class="Switch ? 'green' : 'red'"

            style="
            cursor: pointer;"
    >
      {{Switch ? 'True' : 'False'}}
    </button>
    <h3 :class="Switch ? 'green' : 'red'">
      {{Switch ? 'Fish' : 'PufferFish'}}</h3>
  </div>
</template>

<style scoped>
.switch-container {
  display: flex;
  flex-direction: column;
  width: 100px;
}

.green {
  color: var(--green);
}

.red {
  color: var(--red);
}
</style>