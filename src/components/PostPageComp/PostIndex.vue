<template>
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
</style>