<script setup>
import { RouterLink, RouterView } from 'vue-router'
import Header from './components/header.vue';

</script>

<template>
  <Header />
  <div class="screen-show">
  <RouterView></RouterView>
  </div>

</template>

<style scoped>
  .screen-show{
    padding: 1rem;
  }
</style>
