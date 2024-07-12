<script setup>
    const today = new Date()
const date = today.getDate()
const monthNames = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December'
]
const dayNames = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
const month = monthNames[today.getMonth()].toUpperCase()
const year = today.getFullYear()
const day = dayNames[today.getDay()].toUpperCase()

</script>

<template>
    <div id="dayAndDate" class="flex flex-row justify-between ml-5 mr-5">
    <div id="fullDate" class="flex flex-row">
      <div id="date" class="font-bold font-sans text-[10mm]">{{ date }}</div>
      <div id="monthAndYear" class="ml-[7px] flex flex-col justify-center content-center font-sans">
        <div id="month" class="font-bold text-[4mm]">{{ month }}</div>
        <div id="year" class="text-[4mm]">{{ year }}</div>
      </div>
    </div>
    <div id="day" class="font-sans text-[4mm] font-bold flex items-center mr-0">{{ day }}</div>
  </div>
</template>