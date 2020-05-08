import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

import app from './modules/app';
import permission from './modules/permission';
import user from './modules/user';
import tagsView from './modules/tagsView';
import test from './modules/test';
import getters from './getters';

const store = new Vuex.Store({
    modules: {
        app,
        permission,
        user,
        tagsView,
        test
    },
    getters,
    strict: false
});

export default store;
