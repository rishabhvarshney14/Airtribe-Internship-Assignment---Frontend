<template>
    <div class="status-container">
        {{status}} - {{length}}
        <Container @drop="onDrop">
            <Draggable v-for="task in tasks" :key="task.id">
                <Task :task="task"/>
            </Draggable>
        </Container>
        <NuxtLink :to="`/${status}/add`" ><button >Add Task</button></NuxtLink>
        
    </div>
</template>

<script>
    import { Container, Draggable } from "vue-smooth-dnd";
    export default {
        props: ['status'],
        components: { Container, Draggable },
        computed: {
            tasks() {
                return this.$store.getters.getTaskByStatus(this.status)
            }, 
            length() {
                return this.$store.getters.getTaskLengthByStatus(this.status)
            }
        },
        methods: {  
            onDrop(dropResult) {
                console.log(dropResult)
            }
        }
    }
</script>

<style scoped>
.status-container {
    display: flex;
    flex-direction: column;
    width: 200px;
    padding-left: 20px;
}
</style>