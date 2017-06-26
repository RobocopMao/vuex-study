/**
 * Created by Administrator on 2017/6/26.
 */
import { ADD_TODO, DEL_TODO } from '../mutation-types'
// import Vue from 'vue'
// import Vuex from 'vuex'
// Vue.use(Vuex)

export default {
    state: {
        todos: [],
        todoVal: '',
    },
    getters: {
        todos: state => state.todos,
        todoVal: state => state.todoVal,
    },
    mutations: {
        [ADD_TODO] (state, todoVal) {
            if (!todoVal) {
                return state
            }
            state.todos.push(todoVal)
            state.todoVal = ''
            return state
        },
        [DEL_TODO] (state, delIndex) {
            state.todos.splice(delIndex, delIndex + 1)
            return state
        },
    },
    actions: {
        [ADD_TODO] ({ commit }, e) {
            commit(ADD_TODO, e.target.value)
        },
        [DEL_TODO] ({ commit }, delIndex) {
            commit(DEL_TODO, delIndex)
        },
    }
}