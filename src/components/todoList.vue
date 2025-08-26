<script setup>
import { ref } from 'vue'

let id = 0

const newTodo = ref('')
const todos = ref([])

function addTodo() {
  todos.value.push({ id: id++, text: newTodo.value, done: false })
  newTodo.value = ''
}

function removeTodo(todo) {
  todos.value = todos.value.filter((t) => t !== todo)
}
</script>

<template>
  <form @submit.prevent="addTodo">
    <input v-model="newTodo" required placeholder="New todo" />
    <button style="cursor: pointer;">Add</button>
  </form>
  <ul>
    <li v-for="todo in todos" :key="todo.id">
      {{ todo.id }} {{ todo.text }}
      <button @click="removeTodo(todo)" style="background-color: transparent; border-color: transparent; color: red; cursor: pointer;">X</button>
    </li>
  </ul>
</template>