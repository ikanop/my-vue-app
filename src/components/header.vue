<template>
  <header>
    <nav>
      <RouterLink :class="{ active: '/' === $route.path }" to="/">
        Home
      </RouterLink>

      <RouterLink :class="{ active: '/about' === $route.path }" to="/about">
        About
      </RouterLink>

      <RouterLink
        :class="{ active: '/languages' === $route.path }"
        to="/languages"
      >
        Languages
      </RouterLink>

      <RouterLink :class="{ active: '/todo' === $route.path }" to="/todo">
        Todo
      </RouterLink>

      <RouterLink :class="{ active: '/switch' === $route.path }" to="/switch">
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
  color: var(--blue);
}

nav a:not(.active):hover {
  background-color: rgba(33, 140, 255, 0.2);
}
</style>

<script setup>
import {useRoute} from "vue-router";

const route = useRoute();
</script>
