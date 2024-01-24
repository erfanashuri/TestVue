<template>
  <div class="mySidebar-bg" @click="$emit('closeSidenav')"></div>
  <div
    class="d-flex flex-column flex-shrink-0 p-3 text-white mySidebar"
    style="width: 280px"
  >
    <a
      href="/"
      class="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-white text-decoration-none"
    >
      <svg class="bi me-2" width="40" height="32">
        <use xlink:href="#bootstrap"></use>
      </svg>
      <span class="fs-4">Sidebar</span>
    </a>
    <hr />
    <ul class="nav nav-pills flex-column mb-auto mt-2">
      <li class="nav-item">
        <a href="#" class="nav-link active" aria-current="page">
          <svg class="bi me-2" width="16" height="16">
            <use xlink:href="#home"></use>
          </svg>
          Home
        </a>
      </li>
      <li>
        <a href="#" class="nav-link text-white">
          <svg class="bi me-2" width="16" height="16">
            <use xlink:href="#speedometer2"></use>
          </svg>
          Dashboard
        </a>
      </li>
      <li>
        <a href="#" class="nav-link text-white">
          <svg class="bi me-2" width="16" height="16">
            <use xlink:href="#table"></use>
          </svg>
          Orders
        </a>
      </li>
      <li>
        <a href="#" class="nav-link text-white">
          <svg class="bi me-2" width="16" height="16">
            <use xlink:href="#grid"></use>
          </svg>
          Products
        </a>
      </li>
      <li>
        <a href="#" class="nav-link text-white">
          <svg class="bi me-2" width="16" height="16">
            <use xlink:href="#people-circle"></use>
          </svg>
          Customers
        </a>
      </li>
    </ul>
    <hr />
    <userdropdown></userdropdown>
  </div>
</template>

<script setup>
import Userdropdown from "./Userdropdown.vue";
import { defineProps,defineEmits } from "vue";
const props = defineProps(["sideNavRight","sideNavBg"]);
const emits = defineEmits(["closeSidenav"])
</script>

<style scoped>
.mySidebar-bg{
    display: v-bind(props.sideNavBg);
    position: fixed;
    width: 100vw;
    height:100vh;
    background-color: rgba(66, 66, 66,0.8);
    z-index: 9999;
    top:0px;
    right:0px;
    transition: all 500ms ease-in-out;
}
.mySidebar {
  position: fixed;
  right: v-bind(props.sideNavRight);
  top: 0;
  height: 100vh;
  z-index: 10000;
  background-color: var(--color-background);
  transition: all 500ms ease-in-out;
}
</style>
