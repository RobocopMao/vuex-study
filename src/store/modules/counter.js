/**
 * Created by Administrator on 2017/6/23.
 */
import { INCREMENT, DECREMENT } from '../mutation-types'
// import Vue from 'vue'
// import Vuex from 'vuex'
// Vue.use(Vuex)

export default {
    state: {
        count: 0,
        clickTimes: 0
    },
    getters: {
        count: state => state.count,
        clickTimes: state => state.clickTimes
    },
    mutations: {
        [INCREMENT] (state) {
            state.count++;
            state.clickTimes++
            return state
        },
        [DECREMENT] (state) {
            if (state.count <= 0) {
                state.clickTimes++
                return;
            }
            state.count--
            state.clickTimes++
            return state
        },
    },
    actions: {
        [INCREMENT] ({ commit }) {
            commit(INCREMENT)
        },
        [DECREMENT] ({ commit }) {
            commit(DECREMENT)
        },
    },
}