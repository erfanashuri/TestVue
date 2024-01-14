import { createRouter, createWebHistory } from 'vue-router';
import Home from "../components/pages/home.vue";
import Users from "../components/pages/Users.vue";
import Posts from "../components/pages/Posts.vue";



const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path:"/" , name:"Home" , component:Home },
    { path:"/Users" , name:"Users" , component:Users },
    { path:"/Posts" , name:"Posts" , component:Posts },
  ]
});

export default router;
