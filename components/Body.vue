<template>
    <div class="body">
        <Status 
            v-for="status, i in totalStatus" 
            :key="i" 
            :status="status" 
        />
    </div>
</template>

<script>
    import {mapState} from 'vuex'

    export default {
        computed: {
            ...mapState(['totalStatus'])
        }
    }
</script>

<style scoped>
.body{
    display: flex;
}
</style>