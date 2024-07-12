<script setup>
// import { ref } from 'vue'
import TodoItem from './TodoItem.vue'
import DayAndDate from './DayAndDate.vue'
import HeadingTitle from'./HeadingTitle.vue'
import AddForm from './AddForm.vue'
import { useTodoStore } from '@/stores/useTodoStore';

const todoStore = useTodoStore()

const {addTask} = todoStore

</script>

<template>
  <DayAndDate></DayAndDate>
  <HeadingTitle></HeadingTitle>
  <ol id="list" class="list-none text-center p-[10px] pl-[40px] max-h-[73%] overflow-y-auto">
    <TodoItem
      v-for="todo in todoStore.todos"
      :key="todo.id"
      :todo="todo"
    />
  </ol>
  <AddForm  @formSubmit="addTask"></AddForm>
</template>
