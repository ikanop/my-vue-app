<script setup>
import { ref, computed } from 'vue'

let id = 0

const newTodo = ref('')
const hideCompleted = ref(false)
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
    <input v-model="newTodo" required placeholder="New todo">
    <button
        style="
        cursor: pointer;"
    >
      Add
    </button>
  </form>
  <p v-for="todo in todos" :key="todo.id">
    {{ todo.id }} {{ todo.text }}
    <button
        @click="removeTodo(todo)"
        style="
          background-color: transparent;
          border-color: transparent;
          color: red;
          cursor: pointer;"
    >
      X
    </button>
  </p>
  <button @click="hideCompleted = !hideCompleted"
          style="
          cursor: pointer;
          margin-top: 20px;"
  >
    {{ hideCompleted ? 'Show all' : 'Hide all' }}
  </button>
</template>