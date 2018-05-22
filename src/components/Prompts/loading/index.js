import Vue from 'vue'
import Loading from './main.vue'

Vue.prototype.$shiLoading = (type) => {
	let loadComponent = Vue.extend(Loading);
	const load = new loadComponent().$mount();
	const doms = document.getElementsByClassName('shishan-loading');
	
	if(type === 'close' && doms.length>0) {//当为close
		document.body.removeChild(load.$el)
		return ;
	}
	//当为open
	if(doms.length > 0){//当页面中已经存在则不执行
		return ;
	}
	document.body.appendChild(load.$el)	
}

['open', 'close'].forEach((type) => {
	Vue.prototype.$shiLoading[type] = () => {
		return Vue.prototype.$shiLoading(type)
	}
})

export default Loading;