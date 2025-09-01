<script setup>
import { ref, onMounted } from 'vue'

const percentages = ref({})

onMounted(async () => {
  const response = await fetch('https://api.github.com/repos/ikanop/my-vue-app/languages')
  const data = await response.json()

  const total = Object.values(data).reduce((sum, bytes) => sum + bytes, 0)
  const result = {}

  for (const [lang, bytes] of Object.entries(data)) {
    result[lang] = ((bytes / total) * 100).toFixed(1)
  }

  percentages.value = result
})
</script>

<template>
  <div v-for="(percent, lang) in percentages" :key="lang" class="language">
    <p>{{ lang }} - {{ percent }}%</p>
    <div class="bar">
      <div class="fill" :style="{ width: percent + '%' }"></div>
    </div>
  </div>
</template>

<style scoped>
.language {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}

.bar {
  width: 30%;
  height: 10px;
  background: #eee;
  border-radius: 5px;
  overflow: hidden;
}
.fill {
  height: 100%;
  background: linear-gradient(to right, var(--blue), var(--light-blue));
}
</style>