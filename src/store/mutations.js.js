/*提交状态修改。也就是set、get中的set，这是vuex中唯一修改state的方式*/
import * as types from './mutation-type.js';

export default {
    [types.SET_USERNAME](state, name) {
        state.userName = name;
    },
    [types.SET_LOGIN](state, login) {
        state.isLogin = login;
    }
};