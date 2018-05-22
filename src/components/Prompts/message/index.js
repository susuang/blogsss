import Vue from 'vue'
import Message from './main.vue'

Vue.prototype.$shiMessage = (type, opt) => {
	var data = {btnText: 'ok'}, method = {};
	const doms = document.getElementsByClassName('shishan-message');
	if(type == 'error') {
		data['msg'] = opt.msg || '操作错误'
	}else if (type == 'success') {
		data['msg'] = opt.msg || '操作成功'
	}else {
		data['msg'] = opt.msg || '警告'
	}
	
	const messageComponent = Vue.extend(Message);
	const message = new messageComponent({
		data() {
			return data
		},
		methods: {
			okFunc() {
				var _self = this;
				if(opt.callback && (typeof opt.callback === 'function')) {
					opt.callback()
				}
				if (doms.length > 0) {
					document.body.removeChild(this.$el)
				}
			}
		}
	}).$mount();
	document.body.appendChild(message.$el)
}
['error', 'success', 'warn', 'info'].forEach((type, opt)=>{
	Vue.prototype.$shiMessage[type] = (opt) => {
		return Vue.prototype.$shiMessage(type,opt)
	}
})
export default Message;