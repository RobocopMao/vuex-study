<template>
    <div id="counter">
        <p>{{ count }}</p>
        <p>button click times: {{ clickTimes }}</p>
        <p>
            <button @click="increment">+</button>
            <button @click="decrement">-</button>
        </p>
    </div>
</template>

<script>
    import { mapActions, mapGetters } from 'vuex'
    import * as types from '../store/mutation-types'
    export default {
        name: 'counter',
        computed: {
            ...mapGetters([
                'count',
                'clickTimes'
            ])
        },
        methods: {
            ...mapActions({
                'increment': types.INCREMENT,
                'decrement': types.DECREMENT,
            })
        }
    }
</script>

<style lang="scss">
    $len10: 10px;
    $len25: 25px;
    #counter {
        button {
            padding: $len10 $len25;
            border: 1px solid #666;
            border-radius: 4px;
            background-color: #fff;
            box-shadow: none;
            cursor: pointer;
            &:active {
                background-color: #eee;
             }
        }
    }
</style>