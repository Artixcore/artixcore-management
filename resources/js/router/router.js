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
        meta: { title: 'Dashboard' }
    },

    // Product
    {
        path: "/Product",
        // name:'api/Product',
        component: Product,
        meta: { title: 'Product List' }
    },

    {
        path: "/Product/Create",
        component: CreatePro,
        meta: { title: 'Create Product' }
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
    base: '/',
    routes,
});

router.beforeEach((to, from, next) => {
    if (to.meta.title) {
        document.title = to.meta.title;
    }
    next();
})

export default router;
