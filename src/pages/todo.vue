<script setup lang="ts">
import TodoList from "../components/todoList.vue";
import MountedStatus from "../components/mountedStatus.vue";
</script>

<template>
  <div class="container">
    <TodoList/>
    <MountedStatus class="mounted-status"/>
  </div>
</template>

<style scoped>
.container {
  display: flex;
  gap: 3rem;
}

.mounted-status {
  margin: 0 0 0 auto;
}
</style>