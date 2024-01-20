<template>
  <div class="postSingleShow">
    <div v-if="loading" class="spinner-border" role="status">
    <span class="visually-hidden">Loading...</span>
    </div>

    <div v-else class="card">
        <h5 class="card-header">post {{ post.id }}</h5>
        <div class="card-body">
            <h5 class="card-title">{{post.title}}</h5>
            <p class="card-text">{{post.body}}...</p>
            <button type="button" class="btn btn-danger">Delete</button>
            <button type="button" class="btn btn-dark ms-2">Edit</button>
        </div>
    </div>
    <router-link :to="{name:'PostIndex'}" class="btn btn-primary mt-3 ms-3">Posts</router-link>
  </div>
</template>

<script setup>
    import axios from "axios";
    import { ref } from "vue";
    import { useRoute } from "vue-router";

    const post = ref(null)
    const loading = ref(true)
    const route = useRoute()


    function getPost(){
        axios
        .get(`https://jsonplaceholder.typicode.com/posts/${route.params.id}`)
        .then(function (response) {
            post.value = response.data;
            loading.value = false            
        })
        .catch(function (error) {
            console.log(error);
        }); 
    }
    getPost()
</script>

<style>

</style>