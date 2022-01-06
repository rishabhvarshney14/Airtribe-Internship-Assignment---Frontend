<template>
    <div>
        <NuxtLink to="/">Go Back</NuxtLink>
        <h2>Add a Task</h2>
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
                <option value="status" >Status</option>
            </select>
            <br/>

            <button @click="() => {
                addTask({
                    task: task_name,
                    description: task_description,
                    status: status,
                    id: Math.floor((Math.random() * 100) + 1)
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
    export default {
        props: ['status'],
        data() {
            return {
                task_name: "",
                task_description: ""
            }
        },
        methods: {
            ...mapMutations(['addTask'])
        }
    }
</script>

<style scoped>
</style>