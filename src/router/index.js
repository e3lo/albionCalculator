import { createRouter, createWebHistory } from "vue-router"

import HomePage from "../views/HomePage.vue"

const routes = [
    {
        path: "/",
        name: "HomePage",
        component: HomePage,
    },
    {
        path: "/cooking",
        name: "CookingPage",
        // something comment

        component: () =>
            import("../views/CookingPage.vue")
    },
];

const router = createRouter({
    history: createWebHistory(process.env.Basu_URL),
    routes
});

export default router;