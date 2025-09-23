<script setup>
import {onMounted, ref} from "vue";

const percentages = ref({});

onMounted(async () => {
  const response = await fetch(
    "https://api.github.com/repos/ikanop/my-vue-app/languages",
  );
  const data = await response.json();

  const total = Object.values(data).reduce((sum, bytes) => sum + bytes, 0);
  const result = {};

  for (const [lang, bytes] of Object.entries(data)) {
    result[lang] = ((bytes / total) * 100).toFixed(1);
  }

  percentages.value = result;
});
</script>

<template>
  <h1>Languages used</h1>
  <div class="languages">
    <div v-for="(percent, lang) in percentages" :key="lang">
      <p>{{ lang }} - {{ percent }}%</p>
      <div class="bar">
        <div :style="{ width: percent + '%' }" class="fill"></div>
      </div>
    </div>
  </div>
</template>

<style scoped>
h1 {
  color: var(--blue);
  margin-bottom: 1rem;
  transform: rotate(2deg);
}

.languages {
  display: flex;
  flex-direction: column;
  gap: 2rem;
  font-weight: bold;
}

.bar {
  width: 30vw;
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
