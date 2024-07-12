import { defineStore } from 'pinia'

export const useTodoStore = defineStore('todos', {
  state: () => ({
    todos: JSON.parse(localStorage.getItem('todos')) || []
  }),
  actions: {
    saveTodos() {
      localStorage.setItem('todos', JSON.stringify(this.todos))
    },
    addTask(newTask) {
      if (newTask.trim()) {
        this.todos.push({ id: Date.now(), task: newTask.trim(), is_marked_done: false })
        this.saveTodos()
      }
    },
    toggleDone(taskId) {
      const task = this.todos.find((todo) => todo.id === taskId)
      if (task) {
        task.is_marked_done = !task.is_marked_done
        this.saveTodos()
      }
    },
    removeTask(taskId) {
      this.todos = this.todos.filter((todo) => todo.id !== taskId)
      this.saveTodos()
    }
  }
})
