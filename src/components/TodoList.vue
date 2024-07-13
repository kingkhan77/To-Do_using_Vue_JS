<script setup>
import { ref, nextTick } from 'vue'
import TodoItem from './TodoItem.vue'
import DayAndDate from './DayAndDate.vue'
import HeadingTitle from'./HeadingTitle.vue'
import TodoAddTaskForm from './TodoAddTaskForm.vue'
import { useTodoStore } from '@/stores/useTodoStore';

const todoStore = useTodoStore()

const {addTask} = todoStore

const listRef = ref(null)

const scrollToLastTask = async() => {
  await nextTick()
  if (listRef.value) {
    listRef.value.lastElementChild.scrollIntoView({ behavior: 'smooth' })
  }
}

const handleFormSubmit = (task) => {
  addTask(task)
  scrollToLastTask()
}

</script>

<template>
  <DayAndDate></DayAndDate>
  <HeadingTitle></HeadingTitle>
  <ol ref="listRef" id="list" class="list-none text-center p-[10px] pl-[40px] max-h-[73%] overflow-y-auto">
    <TodoItem
      v-for="todo in todoStore.todos"
      :key="todo.id"
      :todo="todo"
    />
  </ol>
  <TodoAddTaskForm  @formSubmit="handleFormSubmit"></TodoAddTaskForm>
</template>
