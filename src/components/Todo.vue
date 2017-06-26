<template>
    <div>
        <input type="text" :value="todoVal" @change="addTodo">
        <button @click="addTodo">ADD</button>
        <ul class="todo-list">
            <li v-for="(todo, index) in todos">
                <span>{{todo}}</span>
                <a href="javascript:;" @click="delTodo(index)">X</a>
            </li>
        </ul>
    </div>
</template>

<script>
    import { mapActions, mapGetters } from 'vuex'
    import * as types from '../store/mutation-types'
    export default {
        name: 'todo',
        computed: {
            ...mapGetters({
                todos: 'todos',
                todoVal: 'todoVal',
            })
        },
        methods: {
            ...mapActions({
                'addTodo': types.ADD_TODO,
                'delTodo': types.DEL_TODO
            }),
        }
    }
</script>

<style lang="scss">
    .todo-list {
        li {
            text-align: left;
            a {
                margin-left: 20px;
            }
        }
    }
</style>