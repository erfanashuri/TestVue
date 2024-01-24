import { createRouter, createWebHistory } from 'vue-router';
import Home from "../components/pages/home.vue";
import Users from "../components/pages/Users.vue";
import Posts from "../components/pages/Posts.vue";
import UserShow from "../components/pages/UserShow.vue";
import PostIndexVue from "../components/PostPageComp/PostIndex.vue";
import PostSingleVue from "../components/PostPageComp/PostSingle.vue";
import PostCreateVue from "../components/PostPageComp/PostCreate.vue";
import PostEditVue from "../components/PostPageComp/PostEdit.vue";


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path:"/" , name:"Home" , component:Home },
    { path:"/Users" , name:"Users" , component:Users , children:[
      { path:":id" , name:"UserId" , component:UserShow }
      ] },
    { path:"/Posts" , name:"Posts" , component:Posts , children:[
      {path:"" , name:"PostIndex" , component:PostIndexVue},
      {path:":id" , name:"PostSingle" , component:PostSingleVue},
      {path:"create" , name:"PostCreate" , component:PostCreateVue},
      {path:"edit/:id" , name:"PostEdit" , component:PostEditVue}
    ] },
    ]
});

export default router;
