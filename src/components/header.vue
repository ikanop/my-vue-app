<template>
  <header>
    <nav>
      <RouterLink :class="{ active: '/' === $route.path }" class="nav-home" to="/">
        Home
      </RouterLink>

      <RouterLink :class="{ active: '/about' === $route.path }" class="nav-about" to="/about">
        About
      </RouterLink>

      <RouterLink :class="{ active: '/languages' === $route.path }" class="nav-languages" to="/languages">
        Languages
      </RouterLink>

      <RouterLink :class="{ active: '/todo' === $route.path }" class="nav-todo" to="/todo">
        Todo
      </RouterLink>

      <RouterLink :class="{ active: '/switch' === $route.path }" class="nav-switch" to="/switch">
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
  padding: 14px 16px;
  text-decoration: none;
  font-size: 17px;
  display: inline-block;
  border-radius: 5px;
}

nav a.active {
  color: var(--blue);
}

nav a:not(.active):hover {
  background-color: rgba(33, 140, 255, 0.2);
}

.nav-home {
  transform: rotate(2deg);
}

.nav-about {
  transform: rotate(-2deg);
}

.nav-languages {
  transform: rotate(2deg);
}

.nav-todo {
  transform: rotate(-2deg);
}

.nav-switch {
  transform: rotate(2deg);
}
</style>

<script setup>
import {useRoute} from "vue-router";

const route = useRoute();
</script>
