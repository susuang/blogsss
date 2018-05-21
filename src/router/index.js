import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Login from '@/login'
import {delCookie,getCookie} from '@/util/cookie'

Vue.use(Router)

const router = new Router({
	mode: 'history',
  routes: [
    {
      path: '/',
      redirect: '/home'   //重定向
    },
    {
      path: '/home',
      name: 'HelloWorld',
      component: HelloWorld,
      meta:{requireAuth: true }
    },
    {
    	path: '/login', 
    	name: 'login',
    	component: Login
    }
  ]
});
router.beforeEach((to, from, next)=> {
	if(to.meta.requireAuth) {
		if(getCookie('session')) {
			next();
		}else {
			next({ path: '/login' });
		}
	}
	next();
})
export default router;
