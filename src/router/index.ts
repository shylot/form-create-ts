import Vue from 'vue';
import VueRouter, {RouteConfig} from 'vue-router';
import Home from '../views/Home.vue';

Vue.use(VueRouter);

const routes: RouteConfig[] = [
    {
        path: '/',
        name: 'Home',
        component: Home,
    },
    {
        path: '/about',
        name: 'About',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import(/* webpackChunkName: "about" */ '../views/About.vue'),
    },
    {
        path: '/formCreate',
        name: 'DynamicTable',
        component: () => import(/* webpackChunkName: "about" */ '../views/DynamicTable.vue'),
    },
    {
        path: '/pureTable',
        name: 'PureTable',
        component: () => import(/* webpackChunkName: "about" */ '../views/PureTable.vue'),
    },
    {
        path: '/eLDTable',
        name: 'ELDTable',
        component: () => import(/* webpackChunkName: "about" */ '../views/ELDTable.vue'),
    },
];

const router = new VueRouter({
    routes,
});

export default router;
