export const state = {
    totalStatus: ['Not Started', 'Pending', 'Completed'],
    tasks:  JSON.parse(localStorage.getItem('allTasks') || "[]")
}

export const mutations = {
    addTask(state, task) {
        state.tasks.push(task)
        localStorage.setItem('allTasks', JSON.stringify(state.tasks))
    },
    removeTask(state, id) {
        let idx = state.tasks.findIndex(task => task.id == id)
        state.tasks.splice(idx, 1);
        localStorage.setItem('allTasks', JSON.stringify(state.tasks))
    },
    editTask(state, newTask) {
        let idx = state.tasks.findIndex(task => task.id == newTask.id)
        state.tasks[idx] = newTask
        localStorage.setItem('allTasks', JSON.stringify(state.tasks))
    }
}

export const getters = {
    getTaskByStatus: (state) => (status) => {
        if (!state.tasks){
            return []
        }
        return state.tasks.filter(task => task.status === status)
    },
    getTaskById: (state) => (id) => {
        return state.tasks.find(task => task.id == id)
    }
}