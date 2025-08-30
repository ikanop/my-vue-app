<template>
  <header class="topbar">
    <img src="../assets/spinner.svg">
    <h1>{{ title }}</h1>
    <nav>
      <RouterLink to ="/"
      :class="{ active: '/'===$route.path}"
      >
        Main
      </RouterLink>

      <RouterLink
          to="/secondary"
          :class="{ active: '/secondary'===$route.path }"
      >
        Secondary
      </RouterLink>
    </nav>
  </header>
</template>

<style scoped>
/* {
  border: 1px white solid;
}*/

.topbar {
  display: flex;
  flex-direction: row;
  align-items: center;
  background: var(--secondary-background-color);
  margin: 0;
  padding: 0;
  width: 100vw;
}

nav {
  position: absolute;
  top: 1rem;
  right: 1rem;
  display: flex;
  gap: 1rem;
}

nav a {
  color: #f2f2f2;
  text-align: center;
  padding: 14px 16px;
  text-decoration: none;
  font-size: 17px;
  display: inline-block;
  border-radius: 15px;
}

nav a.active {
  background-color: var(--button-bg);
  color: var(--text-color);
}

nav a:hover {
  background-color: var(--button-hover-bg);
  color: var(--button-hover-text);
}
</style>

<script setup>
import {computed, ref} from 'vue';
import {useRoute} from "vue-router";

const route = useRoute();

const title = computed(() => {
  switch (route.path) {
    case '/':
      return 'Home';
    case '/secondary':
      return 'Second Page';
    default:
      return 'My App';
  }
});
</script>