import * as types from './mutation-type.js';

export default {
    updateUserInfo({commit}, obj) {
        commit(types.SET_USERNAME, obj.name);
        commit(types.SET_LOGIN, obj.login);
    }
};