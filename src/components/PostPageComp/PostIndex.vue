<template>
  <router-link class="btn btn-light create-btn" :to="{name:'PostCreate'}"><span>Create Post</span><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-file-earmark-plus" viewBox="0 0 16 16">
  <path d="M8 6.5a.5.5 0 0 1 .5.5v1.5H10a.5.5 0 0 1 0 1H8.5V11a.5.5 0 0 1-1 0V9.5H6a.5.5 0 0 1 0-1h1.5V7a.5.5 0 0 1 .5-.5"/>
  <path d="M14 4.5V14a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2h5.5zm-3 0A1.5 1.5 0 0 1 9.5 3V1H4a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V4.5z"/>
</svg></router-link>
  <div class="postIndexShow">
    <div v-if="loading" class="spinner-border" role="status">
    <span class="visually-hidden">Loading...</span>
    </div>

    <div v-else v-for="post in posts" :key="post.id" class="card">
        <h5 class="card-header">post {{ post.id }}</h5>
        <div class="card-body">
            <h5 class="card-title">{{post.title}}</h5>
            <p class="card-text">{{post.body}}...</p>
            <router-link :to="{name:'PostSingle' , params:{id:post.id}}" class="btn btn-primary">Open Post</router-link>
        </div>
    </div>
  </div>

</template>

<script setup>
    import axios from "axios";
    import { ref } from "vue";

    const posts = ref([])
    const loading = ref(true)


    function getPosts(){
        axios
        .get('https://jsonplaceholder.typicode.com/posts')
        .then(function (response) {
            posts.value = response.data;
            loading.value = false            
        })
        .catch(function (error) {
            console.log(error);
        }); 
    }
    getPosts()
</script>

<style scoped>
    .postIndexShow{
        display: flex;
        flex-wrap: wrap;
        width: 100%;
        justify-content: space-around;
    }
    .card{
        margin-top: 1rem;
        margin-bottom: 1rem;
        width: 45%;
    }
    .create-btn{
        display: flex;
        align-items: center;
        width: 9rem;
        justify-content: space-around;
    }
</style>