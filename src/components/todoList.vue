<script setup>
import {computed, ref} from "vue";

let id = 0;

const newTodo = ref("");
const hideCompleted = ref(false);
const todos = ref([
  {id: id++, text: "Learn HTML", done: true},
  {id: id++, text: "Learn CSS", done: true},
  {id: id++, text: "Learn BASH", done: true},
  {id: id++, text: "Learn JavaScript", done: false},
  {id: id++, text: "Learn Vue", done: false},
]);

const filterTodos = computed(() => {
  if (hideCompleted.value) {
    return todos.value.filter((t) => !t.done);
  } else {
    return todos.value;
  }
});

function addTodo() {
  todos.value.push({id: id++, text: newTodo.value, done: false});
  newTodo.value = "";
}

function removeTodo(todo) {
  todos.value = todos.value.filter((t) => t !== todo);
}
</script>

<template>
  <div>
    <form class="todo-form" @submit.prevent="addTodo">
      <input v-model="newTodo" class="todo-input" maxlength="20" placeholder="new todo" required/>
      <button class="add-btn">Add Todo</button>
    </form>
    <div class="todo-list-container">
      <p v-for="todo in filterTodos" :key="todo.id" class="todo-item">
        <input v-model="todo.done" class="todo-checkbox" type="checkbox"/>
        <span :class="{ 'todo-text': true, done: todo.done }">{{
            todo.text
          }}</span>
        <button class="remove-btn" @click="removeTodo(todo)">X</button>
      </p>
    </div>
    <button class="toggle-btn" @click="hideCompleted = !hideCompleted">
      {{ hideCompleted ? "Show all" : "Hide completed" }}
    </button>
  </div>
</template>

<style scoped>
/* {
  border: 1px solid white;
}*/

.todo-form {
  display: flex;
  gap: 10px;
  margin-bottom: 20px;
}

.todo-input {
  flex: 1;
  padding: 10px;
  font-size: 16px;
  border-radius: 5px;
  border: 1px solid var(--border-color);
}

.todo-input:focus {
  outline: solid 1px var(--light-blue);
}

.add-btn:hover {
  background-color: var(--light-blue);
}

.todo-list-container {
  height: 300px;
  overflow-y: auto;
  border: 1px solid var(--border-color);
  padding: 10px;
  border-radius: 5px;
}

.todo-item {
  display: flex;
  align-items: center;
  margin-bottom: 10px;
}

.todo-checkbox {
  margin-right: 10px;
  width: 20px;
  height: 20px;
  cursor: pointer;
}

.todo-text {
  flex: 1;
  font-size: 18px;
}

.todo-text.done {
  text-decoration: line-through;
  color: #888;
}

.remove-btn {
  background-color: var(--red);
}

.remove-btn:hover {
  background-color: var(--dark-red);
}

.toggle-btn {
  margin-top: 20px;
}

.toggle-btn:hover {
  background-color: var(--light-blue);
}
</style>
