<template>
    <div id="app">
        <h1>{{ msg }}</h1>
        <button @click="$store.dispatch('movies/GET_LATEST_LISTINGS')">Get Listings</button>
    </div>
</template>

<script>
    export default {
        name: 'app',
        data () {
            return {
                msg: 'Welcome to Your Vue.js App!'
            }
        },
        mounted() {
            console.log(this.$store)
        }
    }
</script>

<style lang="css">
    #app {
        color: #56b983;
    }
</style>