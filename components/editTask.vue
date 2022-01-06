<template>
     <div>
        <NuxtLink to="/">Go Back</NuxtLink>
        <h2>Edit Task</h2>
        <form class='form'>
            <label>Task Name:</label>
            <input type="text" v-model="task_name" required />
            <br/>

            <label>Task Description:</label>
            <textarea v-model="task_description"></textarea>
            <br/>

            <label>Task Status:</label>
            <label v-if="status">{{status}}</label> 
            <select v-else v-model="task_status">
                <option v-for="status, i in totalStatus" :key="i" :value="status" >{{status}}</option>
            </select>
            <br/>

            <button @click="() => {
                let newTask = {
                    task: task_name, 
                    description: task_description,
                    status: task_status, 
                    id: id,
                }
                editTask({
                    task: task_name,
                    description: task_description,
                    status: task_status,
                    id: id
                })
                this.$nuxt.$options.router.push(`/`);
            }" >
                Submit
            </button>
        </form>
    </div>
</template>

<script>
    import {mapMutations} from 'vuex'
    import {mapState} from 'vuex'

    export default {
        props: ['id'],
        methods: {
            ...mapMutations(['editTask'])
        },
        computed: {
            task() {
                return this.$store.getters.getTaskById(this.id)
            },
            ...mapState(['totalStatus'])
        },
        
        data() {
            let temp = JSON.parse(localStorage.getItem('allTasks') || "[]").find(task => task.id == this.id)
            return {
                task_name: temp.task,
                task_description: temp?.description,
                task_status: temp.status,
            }
        },
    }
</script>

<style  scoped>

</style>