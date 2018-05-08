import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Login from '@/login'

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
      component: HelloWorld
    },
    {
    	path: '/login', 
    	name: 'login',
    	component: Login
    }
  ]
});
router.beforeEach((to, from, next)=> {
	const nextRouter = ['HelloWorld'];
	if(nextRouter.indexOf(to.name)>=0) {
		next({ path: '/login' });
	}else {
		next();
	}
})
export default router;
