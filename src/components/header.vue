<template>
  <header>
    <nav>
      <RouterLink to="/" :class="{ active: '/' === $route.path }">
        Home
      </RouterLink>

      <RouterLink to="/about" :class="{ active: '/about' === $route.path }">
        About
      </RouterLink>

      <RouterLink to="/todo" :class="{ active: '/todo' === $route.path }">
        Todo
      </RouterLink>

      <RouterLink to="/switch" :class="{ active: '/switch' === $route.path }">
        Switch
      </RouterLink>
    </nav>
  </header>
</template>

<style scoped>
header {
  position: absolute;
  top: 0;
  left: 0;
  display: flex;
  flex-direction: row;
  align-items: center;
  background: var(--background-color);
  margin: 0;
  padding: 0.75rem 0 0.75rem 0;
  width: 100vw;
  box-shadow: 0 2px 4px 0 var(--blue);
}

nav a {
  color: var(--text-color);
  font-weight: bold;
  text-align: center;
  padding: 14px 16px;
  text-decoration: none;
  font-size: 17px;
  display: inline-block;
  border-radius: 15px;
}

nav a.active {
  color: #218cff;
}

nav a:not(.active):hover {
  background-color: rgba(33, 140, 255, 0.2);
}
</style>

<script setup>
import { useRoute } from "vue-router";

const route = useRoute();
</script>
