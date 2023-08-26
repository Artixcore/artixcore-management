import { createRouter, createWebHistory } from "vue-router";

// import Index from "../components/";

import Dashboard from "../components/Admin/dashboard/Master.vue";
import Product from "../components/Admin/Products/CRUD/view.vue";
import CreatePro from "../components/Admin/Products/CRUD/create.vue";
// import Login from "../components/Auth/Login.vue";
// import Register from "../components/Auth/Register.vue";
// import Index from "../components/frontend/index.vue";

const routes = [
    {
        path: "/",
        component: Dashboard,
    },

    // Product
    {
        path: "/Product",
        component: Product,
    },

    {
        path: "/Product/Create",
        component: CreatePro,
    },

    // {
    //     path: "/Login",
    //     component: Login,
    // },
    // {
    //     path: "/Register",
    //     component: Register,
    // },
    // {
    //     path: "/:pathMatch(.*)*",
    //     component: NotFound,
    // },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;
