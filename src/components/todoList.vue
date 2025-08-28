<script setup>
import { ref, computed } from 'vue'

let id = 0

const newTodo = ref('')
const hideCompleted = ref(false)
const todos = ref([
  { id: id++, text: 'Learn HTML', done: true },
  { id: id++, text: 'Learn CSS', done: true },
  { id: id++, text: 'Learn BASH', done: true },
  { id: id++, text: 'Learn JavaScript', done: false },
  { id: id++, text: 'Learn Vue', done: false }
])

const filterTodos = computed(() => {
  if (hideCompleted.value) {
    return todos.value.filter((t) => !t.done)
  } else {
    return todos.value
  }
})

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
    <input v-model="newTodo" required placeholder="new todo">
    <button>Add Todo</button>
  </form>
  <p v-for="todo in filterTodos" :key="todo.id">
    <input type="checkbox" v-model="todo.done"
           style="
           cursor: pointer"
    />
    <span :class="{ done: todo.done }" class="todo-text">{{ todo.text }}</span>
    <button @click="removeTodo(todo)"
            style="
            color: red;
            background-color: transparent;
            border: none;
            cursor: pointer;"
    >
      X
    </button>
  </p>
  <button @click="hideCompleted = !hideCompleted"
          style="
          margin-top: 20px;"
  >
    {{ hideCompleted ? 'Show all' : 'Hide completed' }}
  </button>
</template>

<style>
.done {
  text-decoration: line-through;
}

.todo-text {
  display: inline-block;
  width: 200px;
}
</style>