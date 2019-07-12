import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'
import { routes } from './routes'



Vue.use(VueRouter)



const router = new VueRouter({
    routes,
    mode: 'history',
    scrollBehavior(to, from, savedPosition) {
        // return { x: 0, y: 100 }
        // return { selector: '.btn' }

        if (savedPosition) {
            return savedPosition
        } else {
            return { x: 0, y: 0 }
        }
    }
})

//全局守卫 -- 以下代码块实现的功能：当在非登录状态下时，除了登录和注册路径，其余路径都跳转登录页面
/*
router.beforeEach((to, from, next) => {
    // alert("还没有登录，请先登录！");
    // next();
    // console.log(to);

    //判断store.gettes.isLogin===false
    if (to.path == '/login' || to.path == '/register') {
        next();
    } else {
        alert("还没有登录，请先登录！");
        next('/login');
    }
})
*/

//后置钩子
/*
router.afterEach((to, from) => {
    alert("after each");
})
*/

//



new Vue({
    el: '#app',
    router,
    render: h => h(App)
})