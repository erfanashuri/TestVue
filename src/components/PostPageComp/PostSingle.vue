<template>
  <div class="postSingleShow">
    <div v-if="loading" class="spinner-border" role="status">
      <span class="visually-hidden">Loading...</span>
    </div>

    <div v-else class="card">
      <h5 class="card-header">post {{ post.id }}</h5>
      <div class="card-body">
        <h5 class="card-title">{{ post.title }}</h5>
        <p class="card-text">{{ post.body }}...</p>
        <button @click="deletePost" type="button" class="btn btn-danger">
          <div
            v-if="delBtnLoading"
            class="spinner-border spinner-border-sm"
            role="status"
          ></div>
          Delete
        </button>
        <router-link
          :to="{ name: 'PostEdit', params: { id: post.id } }"
          type="button"
          class="btn btn-dark ms-2"
          >Edit</router-link
        >
      </div>
    </div>
    <router-link :to="{ name: 'PostIndex' }" class="btn btn-primary mt-3 ms-3"
      >Posts</router-link
    >
  </div>
</template>

<script setup>
import axios from "axios";
import { ref } from "vue";
import { useRoute, useRouter } from "vue-router";
import Swal from "sweetalert2";

const post = ref(null);
const loading = ref(true);
const route = useRoute();
const router = useRouter();
const delBtnLoading = ref(false);

function getPost() {
  axios
    .get(`https://jsonplaceholder.typicode.com/posts/${route.params.id}`)
    .then(function (response) {
      post.value = response.data;
      loading.value = false;
    })
    .catch(function (error) {
      console.log(error);
    });
}
getPost();

function deletePost() {
    delBtnLoading.value=true;
  axios
    .delete(`https://jsonplaceholder.typicode.com/posts/${route.params.id}`)
    .then(function () {
      Swal.fire({
        title: "Done!",
        text: "Post deleted successfully.",
        icon: "success",
        confirmButtonText: "Ok",
      });
      delBtnLoading.value=false
      router.push("/Posts");
    })
    .catch(function (error) {
      console.log(error);
    });
}
</script>

<style></style>
