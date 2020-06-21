import Vue from 'vue'
import VueRouter from 'vue-router'
import index from "@/components/index";
export default new VueRouter({
    routes:[
        {
            path:'/index',
            component:index
        }
    ]
})