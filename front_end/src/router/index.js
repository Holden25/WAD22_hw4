import { createRouter, createWebHashHistory } from 'vue-router'
import HomePage from '../views/HomePage.vue';
import AddPost from "../views/AddPost.vue";
import APost from "../views/APost.vue";
import LogIn from "../views/LogIn.vue";
import SignUp from "../views/SignUp.vue";
import auth from "../auth.js";

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomePage,
    beforeEnter: async(to, from, next) => {
      let authResult = await auth.authenticated();
      if(!authResult){
        next("/login")
      }else{
        next();
      }
    }
  },

  {
    path: "/signup",
    name: "SignUp",
    component: SignUp,
  },

  {
    path: "/login",
    name: "LogIn",
    component: LogIn,
  },

  {
    path: "/api/allposts",
    name: "AllPosts",
    component: HomePage,
  },
  {
      path: "/api/apost/:id",
      name: "APost",
      component: APost,
  },
  {
      path: "/api/addpost",
      name: "AddPost",
      component: AddPost,
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/ContactUs.vue')
  },
  { //will route to login view if none of the previous routes apply
    path: "/:catchAll(.*)",
    name: "Login",
    component: LogIn,
}
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
