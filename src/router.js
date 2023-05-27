import { createRouter,createWebHashHistory } from "vue-router";
import App from './App.vue'
import Contact from './components/MyContact.vue'
import Work from './components/MyMoreWorks.vue'
const router=createRouter({
    history:createWebHashHistory(),
    routes:[
        {path:'/',redirect:'/home'},
        {path:'/home',component:App},
        {path:'/contact',component:Contact},
        {path:'/works',component:Work},
    ]
})
router.beforeEach((to,from,next)=>{next()})
export default router