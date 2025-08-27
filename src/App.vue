<script setup>

</script>

<template>
  <h1>Hello World!</h1>
  <nav>
    <RouterLink to ="/">Main</RouterLink>
    <RouterLink to ="/Secondary">Secondary</RouterLink>
  </nav>
  <main>
    <RouterView/>
  </main>
</template>

<style scoped>
nav {
  position: absolute;
  top: 1rem;
  right: 1rem;
  display: flex;
  gap: 1rem;
}
</style>