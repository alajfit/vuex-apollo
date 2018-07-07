<template>
    <div id="app">
        <h1>Testing Vuex Apollo</h1>
        <div class="user">
            <img
                class="user-avatar" 
                :src="avatar" />
            <h3>Name: {{ name }}</h3>
            <h3>Email: {{ email }}</h3>
        </div>
        <p>
            <button @click="newUser">Get New User</button>
        </p>
    </div>
</template>

<script>
    import { mapActions, mapGetters, mapState } from '../../../src'

    export default {
        name: 'app',
        computed: {
            ...mapState('user', {
                avatar: 'avatar',
                email: 'email'
            }),
            ...mapGetters({
                name: 'user/fullName'
            })
        },
        methods: {
            ...mapActions({
                newUser: 'user/GET_USER_INFO'
            })
        }
    }
</script>

<style lang="scss">
    #app {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        color: #56b983;

        .user {

            .user-avatar {
                width: 200px;
                height: 200px;
            }
        }
    }
</style>