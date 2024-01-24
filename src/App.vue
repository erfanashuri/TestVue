<script setup>
import { ref } from 'vue';
import { RouterLink, RouterView } from 'vue-router'
import Header from './components/header.vue';
import Sidenav from './components/Sidenav.vue';

const sideNavRight=ref("-18rem")
const sideNavBg=ref("none")
function openSidenav() {
  sideNavRight.value="0rem"
  sideNavBg.value="block"
}
function closeSidenav(){
    sideNavBg.value="none"
    sideNavRight.value="-18rem"
}
</script>

<template>
  <Header @open-sidenav="openSidenav" />
  <Sidenav :sideNavRight="sideNavRight" :sideNavBg="sideNavBg" @close-sidenav="closeSidenav" />
  <div class="screen-show container pt-2">
  <RouterView></RouterView>
  </div>
</template>

<style scoped>
  .screen-show{
    
  }
</style>
