<script setup lang="ts">
import TodoList from "../components/todoList.vue";
</script>

<template>
  <div class="container">
    <TodoList/>
  </div>
</template>

<style scoped>
.container {
  display: flex;
  gap: 3rem;
}
</style>