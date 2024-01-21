<template>
  <h1>Create New Post :</h1>
  <form @submit.prevent="validate">
    <div class="mb-3">
      <label for="exampleFormControlInput1" class="form-label"
        >Post Title</label
      >
      <input
        type="text"
        class="form-control"
        id="exampleFormControlInput1"
        v-model.lazy.trim="form.title"
      />
      <div class="form-text text-danger">
        {{ form.titleErrorText }}
      </div>
    </div>
    <div class="mb-3">
      <label for="exampleFormControlTextarea1" class="form-label"
        >Post Body</label
      >
      <textarea
        class="form-control"
        id="exampleFormControlTextarea1"
        rows="3"
        v-model.lazy.trim="form.body"
      ></textarea>
      <div class="form-text text-danger">
        {{ form.bodyErrorText }}
      </div>
      <button type="submit" class="btn btn-light m-3" :disabled="loading">
        <div
          v-if="loading"
          class="spinner-border spinner-border-sm"
          role="status"
        ></div>
        Create Post
      </button>
      <RouterLink :to="{ name: 'PostIndex' }" class="btn btn-danger"
        >Back to Posts</RouterLink
      >
    </div>
  </form>
</template>

<script setup>
import axios from "axios";
import { reactive, ref } from "vue";
import Swal from "sweetalert2";

const form = reactive({
  title: "",
  titleErrorText: "",
  body: "",
  bodyErrorText: "",
});
const loading = ref(false);

function validate() {
  if (form.title === "") {
    form.titleErrorText = "Title is required.";
  } else {
    form.titleErrorText = "";
  }
  if (form.body === "") {
    form.bodyErrorText = "Body is required.";
  } else {
    form.bodyErrorText = "";
  }

  if (form.title !== "" && form.body !== "") {
    loading.value = true;
    createPost();
  }
}

function createPost() {
  axios
    .post("https://jsonplaceholder.typicode.com/posts", {
      title: form.title,
      body: form.body,
      userId: 1,
    })
    .then(function () {
      form.title="";
      form.body="";
      loading.value = false;
      Swal.fire({
        title: "Thanks!",
        text: "Post created successfully.",
        icon: "success",
        confirmButtonText: "Ok",
      });
    })
    .catch(function (error) {
      console.log(error);
    });
}
</script>

<style></style>
