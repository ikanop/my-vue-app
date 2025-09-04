<script setup>
import Header from "./components/header.vue";
import MountedStatus from "./components/mountedStatus.vue";
</script>

<template>
  <Header/>
  <main>
    <RouterView/>
    <MountedStatus/>
  </main>
</template>

<style scoped>
</style>