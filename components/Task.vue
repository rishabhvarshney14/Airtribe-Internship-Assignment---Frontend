<template>
    <NuxtLink :to="`/${task.id}`" class='container'>
        <p>{{task.task}}</p>
        <button v-on:click.prevent @click="() => {removeTask(task.id)}" >Delete</button>
    </NuxtLink>
</template>

<script>
    import {mapMutations} from 'vuex'
    export default {
        props: ['task'],
        methods: {
            ...mapMutations(['removeTask'])
        }
    }
</script>

<style scoped>
    .container {
        display: flex;
        justify-content: space-between;
        padding-top: 5px;
        padding-bottom: 5px;
        text-decoration: none;
        color: black;
    }
</style>