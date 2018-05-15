import * as types from './mutation-type.js';

export default {
    updateUserInfo({commit}, {login, name}) {
        commit(types.SET_USERNAME, name);
        commit(types.SET_LOGIN, login);
    }
};