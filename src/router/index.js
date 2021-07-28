import Vue from 'vue';
import vueRouter from './vue-router';

Vue.use(vueRouter);

const routes = [
    {
        path:'/',
        name:'Page',
        component:() => import('../views/Page')
    },
    {
        path:'/List',
        name:'List',
        component:() => import('../views/List')
    }
]

export default new vueRouter({
    mode:'history',
    routes,
})
