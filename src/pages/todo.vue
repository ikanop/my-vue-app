<script setup lang="ts">
import TodoList from "../components/todoList.vue";
import MountedStatus from "../components/mountedStatus.vue";
</script>

<template>
  <div class="container">
    <TodoList/>
    <MountedStatus
        style="
        margin: 0 0 0 auto;"
    />
  </div>
</template>

<style scoped>
.container {
  display: flex;
  gap: 3rem;
}
</style>