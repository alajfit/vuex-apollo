# Vuex Apollo (Bringing the best of both worlds together)
> Currently a WIP, star us and keep an eye

[![npm](https://img.shields.io/npm/v/vuex-apollo.svg) ![npm](https://img.shields.io/npm/dm/vuex-apollo.svg)](https://www.npmjs.com/package/vuex-apollo)

<p align="center">
  <img width="200" height="200" src="./docs/assets/vuex-apollo.png">
</p>

## Install

```
npm install vuex-apollo --save
```

## Import
- vuexApollo can be imported as a normal vue plugin
- You can pass the plugin 2 options
  - The *uri* of the graphql server
  - An Array of objects with the *module name (name)* and the *ram module (module)*

```js
import Vue from 'vue'
import App from './App.vue'
import vuexApollo from '../../../src'
import user from './modules/user'

Vue.use(vuexApollo, {
    uri: 'https://fakerql.com/graphql',
    modules: [{
      name: 'user',
      store: user
    }]
})

new Vue({
  el: '#app',
  render: h => h(App)
})

```

## Usage
- Along with the export for vuexApollo you can also get some of the Vuex map functions from this package
- So you can do the following within your application when bootstrapped with vuexApollo

```html
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
```

## Building a Module
- Modules are built in a standard fashion to how you would nomally scaffold a module
- The Action is now passed two new properties in the context
  - apollo (This is an instance of Apollo Client)
  - gql (This )
- You can also init a module from actions by declaring an INIT action

[You Can See An Example Module Here](https://github.com/alajfit/vuex-apollo/tree/master/tests/demo/app/modules/user)

```js
import * as types from './types'

export const actions = {
    INIT ({ commit }) {
        console.log(`I'm called on init`)
    },
    [types.GET_USER_INFO] ({ commit, apollo, gql }) {
        apollo.query({
            query: gql`
            query UserInfo {
                User(id:21) {
                    id
                    firstName
                    lastName
                    email
                    avatar 
                }
            }
            `
        }).then(response => {
            commit(types.GET_USER_INFO, response.data.User)
        })
    }
}
```

## Features
- Vuex
- Apollo (GraphQL)
- Seamless Integration

## ToDo
- Add Error Logging through an error link
- Look at making the bundle smaller
- Add Unit Testing
- Add E2E Testing

## Feedback
- Please raise any issues you find
- This is still a work in progress and I'll update as and when I have free time

<p>
  <a href="https://www.patreon.com/staratarms" target="_blank">
    <h3>If I've helped you out in any way why not: :blush:</h3>
    <img src="./docs/assets/patreon.png" alt="Become a Patreon">
  </a>
</p>


---

## License

[MIT](http://opensource.org/licenses/MIT)