import Vue from 'vue'
import VueRouter from 'vue-router'
import index from "./components/index";
import NetInfo  from "./components/NetInfo";
import order from './components/order'
import routes from "./components/routes";
import developed from "./components/developed";
import message from "./components/message";
import myReply from "@/components/myReply";
import developSite from "@/components/developsite";
import developNew from "@/components/developNew";
Vue.use(VueRouter)
export default new VueRouter({
    routes:[
        {
            path:'/index',
            component:index
        },
        {
            path: '/routeManage',
            component: order
        },
        {
            path:'/',
            component:NetInfo
        },
        {
            path:"/routes",
            component:routes
        },
        {
            path:"/developSite",
            component:developSite,
            children:[
                {
                    path:"/developSite",
                    component:developed
                },
                {
                    path:"/developSite/developed",
                    component:developed
                },
                {
                    path: "/developSite/developNew",
                    component:developNew
                }
            ]
        },
        {
            path:"/message",
            component:message
        },
        {
            path:"/myReply",
            component:myReply
        }
    ]
})