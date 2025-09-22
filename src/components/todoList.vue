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
    <form @submit.prevent="addTodo">
      <input v-model="newTodo" maxlength="20" placeholder="new todo" required/>
      <button>Add Todo</button>
    </form>
    <div>
      <p v-for="todo in filterTodos" :key="todo.id">
        <input v-model="todo.done" type="checkbox"/>
        <span :class="{ done: todo.done }">{{
            todo.text
          }}</span>
        <button @click="removeTodo(todo)">X</button>
      </p>
    </div>
    <button @click="hideCompleted = !hideCompleted">
      {{ hideCompleted ? "Show all" : "Hide completed" }}
    </button>
  </div>
</template>

<style>

</style>
