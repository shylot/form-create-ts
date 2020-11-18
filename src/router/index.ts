import Vue from 'vue';
import VueRouter, {RouteConfig} from 'vue-router';
import Home from '../views/Home.vue';
import Dcms from '../views/Dcms.vue';
import GvComp from '../views/GvComp.vue';
import TreeSelect from '../views/TreeSelect.vue';

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
    // {
    //     path: '/dcms',
    //     name: 'Dcms',
    //     component: Dcms,
    // },
    {
        path: '/gvComp',
        name: 'GvComp',
        component: GvComp,
    },
    {
        path: '/treeSelect',
        name: 'TreeSelect',
        component: TreeSelect,
    },
];
const router = new VueRouter({
    routes,
});

export default router;
