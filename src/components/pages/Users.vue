<template>
    <div v-if="route.params.id===undefined" class="users-screen">
     
    <div v-if="loading" class="spinner-border" role="status">
        <span class="visually-hidden">Loading...</span>
    </div>

    <userCardView v-else v-for="user in users" :key="user.id" :user="user" >
    </userCardView>

    </div>
    <RouterView  v-else></RouterView>
</template>
<script setup>
    import axios from 'axios';
    import { ref } from 'vue';
    import userCardView from '../UsersPageComp/userCardView.vue';
    import { useRoute } from 'vue-router';


    const users = ref([])
    const loading = ref(true)
    const route = useRoute();
    console.log();

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

<style scoped>
    .users-screen{
        display: flex;
        flex-wrap: wrap;
        justify-content: space-around;
    }
</style>