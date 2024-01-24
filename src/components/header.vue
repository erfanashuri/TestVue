<template>
  <div class="myHeader">
    <div class="container-lg myHeader-container">
      <div class="myLogo">
        <img src="../assets/images/logo.png" alt="logo" class="logo-img" />
        <h3 class="logo-text">TESTVUE</h3>
      </div>
      <div class="header-button__container">
        <Themebutton />
      <i class="d-md-none sidenav-button bi bi-justify" @click="$emit('openSidenav')"></i>
      <div class="d-none d-md-flex header-buttons__container">
        <router-link to="/Users"> Users </router-link>
        <router-link to="/Posts"> Posts </router-link>
        <router-link to="/">Home</router-link>
        <userdropdown></userdropdown>
      </div>
      </div>
    </div>
  </div>

</template>

<script setup>
import Themebutton from "./Themebutton.vue";
import Userdropdown from "./Userdropdown.vue";
</script>

<style scoped>

.myHeader {
  height: 4rem;
  background-color: rgb(189, 189, 189);
  padding-top: 0.5rem;
  padding-bottom: 0.5rem;
}
.myHeader-container{
    display: flex;
    justify-content: space-between;
    align-items: center;
}
.myLogo {
  display: flex;
  align-items: center;
  width: 9.7rem;
  justify-content: space-between;
  margin-right: 0.5rem;
  /* background-color: aqua; */
}
.logo-img {
  width: 3rem;
}
.logo-text {
  font-weight: 600;
  color: rgb(46, 125, 50) !important;
  margin-bottom:0 ;
}
.header-button__container{
  display: flex;
  align-items: center;
  gap: 1rem;
}
.header-buttons__container{
  gap:0.5rem;
  padding: 0.5rem;
  transition: all 400ms ease-in-out;
  align-items: center;
}
.header-buttons__container a{
  font-weight: 600;
  color:rgb(46, 125, 50) !important;
}
.sidenav-button{
    font-size: 1.7rem;
    color:#2f7f33 !important;
    margin-right: 0.5rem;
    margin-left: 0.5rem;
    transition: all 400ms ease-in-out;
    
}
</style>
