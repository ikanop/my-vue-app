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
  <div class="todo-container">
    <form @submit.prevent="addTodo">
      <input v-model="newTodo" required placeholder="new todo" maxlength="20">
      <button>Add Todo</button>
    </form>
      <div class="todo-list-container">
        <p v-for="todo in filterTodos" :key="todo.id">
          <input type="checkbox" v-model="todo.done"
                 style="
                 cursor: pointer"
          />
          <span :class="{ done: todo.done }" class="todo-text">{{ todo.text }}</span>
          <button @click="removeTodo(todo)" class="remove-button">X</button>
        </p>
    </div>
    <button @click="hideCompleted = !hideCompleted"
            style="
              margin-top: 20px;"
    >
      {{ hideCompleted ? 'Show all' : 'Hide completed' }}
    </button>
  </div>
</template>

<style>
.todo-container {
  display: flex;
  flex-direction: column;
}

.todo-list-container {
  max-height: 200px;
  width: fit-content;
  overflow-y: auto;
}

.todo-list-container::-webkit-scrollbar{
  background: transparent;
  width: 10px;
}

.todo-list-container::-webkit-scrollbar-thumb{
  background-color: var(--scrollbar-thumb);
  border-radius: 10px;
}

.todo-text {
  display: inline-block;
  width: 200px;
}

.remove-button {
  color: red;
  background-color: transparent;
  border: none;
  cursor: pointer;
}

.done {
  text-decoration: line-through;
}
</style>