import { createRouter, createWebHistory } from "vue-router";
import PhoneList from "../views/PhoneList.vue";
import PhoneDetails from "../views/PhoneDetails.vue";
import PhoneOrder from "../views/PhoneOrder.vue";
import About from "../views/About.vue";

const routes = [{
        path: "/",
        name: "PhoneList",
        component: PhoneList,
    },
    {
        path: "/phone/:id",
        name: "PhoneDetails",
        props: true,
        component: PhoneDetails
    },
    {
        path: "/phoneorder/:id",
        name: "PhoneOrder",
        props: true,
        component: PhoneOrder
    },
    {
        path: "/about",
        name: "About",
        component: About
    },
];

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes,
});

export default router;