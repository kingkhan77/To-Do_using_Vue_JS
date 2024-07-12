<script setup>
import { useFlash } from '../composables/useFlash.js'
import { useTodoStore } from '@/stores/useTodoStore.js';

const todoStore = useTodoStore()
const{toggleDone, removeTask} = todoStore;
let { flash } = useFlash()

defineProps(['todo'])
// const emit = defineEmits(['toggle', 'remove'])

const done = (id) => {
  // emit('toggle', id)
  toggleDone(id)
  const task = todoStore.todos.find((todo) => todo.id === id)
  if (task.is_marked_done) {
    flash('Task Completed!!!')
  }
}
</script>

<template>
  <li
    :id="todo.id"
    class="ml-[-30px] text-left p-[10px] bg-white text-[5.5mm] font-sans w-[auto] h-[auto] rounded-[10px] mb-[40px] flex flex-wrap hover:no-underline relative shadow-custom items-center pr-[20%] text-red-700"
    :style="{
      textDecoration: todo.is_marked_done ? 'line-through' : 'none',
      color: todo.is_marked_done ? 'gray' : 'black'
    }"
  >
    {{ todo.task }}
    <button
      class="mark_as_done mt-0 ml-[20px] w-[7.5mm] h-[7.5mm] border-[1px] border-[#47C5DC] bg-white rounded-[5px] text-[3.7mm] text-[#47C5DC] absolute right-[60px] hover:border-2 hover:border-blue-400"
      @click="done(todo.id)"
    >
      ✔
    </button>
    <button
      class="delete mt-0 ml-[20px] w-[7.5mm] h-[7.5mm] border-[1px] text-red-700 border-[#47C5DC] bg-white rounded-[5px] text-[3.7mm] font-bold absolute right-[15px] hover:border-2 hover:border-blue-400"
      @click="removeTask(todo.id)"
    >
      ✘
    </button>
  </li>
</template>
