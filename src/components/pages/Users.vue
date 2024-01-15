<template>
    <div class="users-screen">
     
    <div v-if="loading" class="spinner-border" role="status">
        <span class="visually-hidden">Loading...</span>
    </div>

    <userCardView v-else v-for="user in users" :key="users.id" :user="user" />

    </div>
</template>
<script setup>
    import axios from 'axios';
    import { ref } from 'vue';
    import userCardView from '../UsersPageComp/userCardView.vue';


    const users = ref([])
    const loading = ref(true)


    function getUsers(){
        axios
        .get('https://jsonplaceholder.typicode.com/users')
        .then(function (response) {
            users.value = response.data;
            loading.value = false
        })
        .catch(function (error) {
            console.log(error);
        });  
    };

    getUsers()
</script>

<style>
    .users-screen{
        display: flex;
        flex-wrap: wrap;
        justify-content: space-around;
    }
</style>