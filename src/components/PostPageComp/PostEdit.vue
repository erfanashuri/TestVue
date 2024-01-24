<template>
  <h1>Edit Post {{ route.params.id }} :</h1>
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
        rows="6"
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
        Confirm
      </button>
      <RouterLink :to="{ name: 'PostSingle',params:{id:route.params.id} }" class="btn btn-danger"
        >Cancel</RouterLink
      >
    </div>
  </form>
</template>

<script setup>
import axios from "axios";
import { reactive, ref } from "vue";
import Swal from "sweetalert2";
import { useRoute, useRouter } from "vue-router";

const router= useRouter()
const route = useRoute()
const form = reactive({
  title: "",
  titleErrorText: "",
  body: "",
  bodyErrorText: "",
});
const loading = ref(false);

function getPost(){
        axios
        .get(`https://jsonplaceholder.typicode.com/posts/${route.params.id}`)
        .then(function (response) {
             form.title=response.data.title
             form.body=response.data.body                     
        })
        .catch(function (error) {
            console.log(error);
        }); 
    }
    getPost()
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
    editPost();
  }
}

function editPost() {
  axios
    .put(`https://jsonplaceholder.typicode.com/posts/${route.params.id}`, {
      id:route.params.id,
      title: form.title,
      body: form.body,
      userId: 1,
    })
    .then(function () {
      loading.value = false;
      Swal.fire({
        title: "Thanks!",
        text: "Post updated successfully.",
        icon: "success",
        confirmButtonText: "Ok",
      });
      router.push(`/Posts/${route.params.id}`)
    })
    .catch(function (error) {
      console.log(error);
    });
}
</script>

<style></style>
