<template>
  <form
    @submit.prevent="submitForm"
    class="flex justify-center items-center absolute bottom-[25px] w-full m-auto"
  >
    <input
      type="text"
      v-model="newTask"
      placeholder="+ Add a Task"
      class="h-[12mm] w-[70%] pl-[15px] border-[1px] border-[#D9D9D9] rounded-[10px] font-sans text-[5mm] bg-white focus:outline-blue-500 ml-[40px]"
    />
    <button
      type="submit"
      class="text-white font-mono text-[8mm] ml-[20px] bg-[#47C5DC] border-none rounded-[10px] h-[12mm] w-[12mm] cursor-pointer mr-[40px] hover:bg-[#2e9fb4]"
    >
      +
    </button>
  </form>
</template>

<script setup>
import { ref } from 'vue';

const newTask = ref('')

const emit=defineEmits(['formSubmit'])

const submitForm = () => {
  emit('formSubmit',newTask.value)
  newTask.value=''
}
</script>
