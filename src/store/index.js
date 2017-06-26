/**
 * Created by Administrator on 2017/6/23.
 */
import Vue from 'vue'
import Vuex from 'vuex'
import * as modules from './modules'
Vue.use(Vuex)

export default new Vuex.Store({
    strict: process.env.NODE_ENV !== 'production',
    state: {},
    mutations: {},
    actions: {},
    modules: modules
})