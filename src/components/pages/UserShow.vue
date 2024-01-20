<template>
    <div class="user-screen">
     
    <div v-if="loading" class="spinner-border" role="status">
        <span class="visually-hidden">Loading...</span>
    </div>

    <userCardView v-else :user="users" />
    <RouterLink :to="{ name:'Users' }" type="button" class="btn btn-light">Users</RouterLink>
    </div>
</template>
<script setup>
    import axios from 'axios';
    import { ref } from 'vue';
    import userCardView from '../UsersPageComp/userCardView.vue';
    import { RouterLink, useRoute } from 'vue-router';

    const users = ref([])
    const loading = ref(true)
    const route = useRoute();

    function getUser(){
        axios
        .get(`https://jsonplaceholder.typicode.com/users/${route.params.id}`)
        .then(function (response) {
            users.value = response.data;
            loading.value = false
        })
        .catch(function (error) {
            console.log(error);
        });  
    };

    getUser()
</script>

<style scoped>

</style>