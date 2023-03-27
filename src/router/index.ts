import { createRouter, createWebHashHistory, RouteRecordRaw } from "vue-router";
 import HomeView from '../views/HomeView.vue';

 const routes: Array<RouteRecordRaw> = [
    {
      path: "/",
      name: "home",
      component: HomeView,
   
    },
     { 
        path: "/repo",
        component: () =>
            import(/* webpackChunkName: "menu" */ "../components/SingleView.vue"),
      },
      { path: '/:pathMatch(.*)*',
      component: () =>
            import(/* webpackChunkName: "menu" */ "../components/ErrorView.vue"),
    },
    // {
    //   path: "/about",
    //   name: "About",
    //   // route level code-splitting
    //   // this generates a separate chunk (menu.[hash].js) for this route
    //   // which is lazy-loaded when the route is visited.
    //   component: () =>
    //     import(/* webpackChunkName: "menu" */ "../views/AboutView.vue"),
    // },
    
  ];
  
  const router = createRouter({
    history: createWebHashHistory(),
    routes,
  });
  
  
  export default router;