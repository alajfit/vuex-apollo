# Vuex Apollo (Bringing the best of both worlds together)
[![Build Status](https://travis-ci.org/alajfit/vuex-apollo.svg?branch=master)](https://travis-ci.org/alajfit/vuex-apollo)
[![codecov](https://codecov.io/gh/alajfit/vuex-apollo/branch/master/graph/badge.svg)](https://codecov.io/gh/alajfit/vuex-apollo)
[![npm](https://img.shields.io/npm/v/vuex-apollo.svg) ![npm](https://img.shields.io/npm/dm/vuex-apollo.svg)](https://www.npmjs.com/package/vuex-apollo)

<p align="center">
  <img width="200" height="200" src="./docs/assets/vuex-apollo.png" />
</p>
<p align="center">
  <a href="https://travis-ci.org/alajfit/vuex-apollo">
    <img src="https://travis-ci.org/alajfit/vuex-apollo.svg?branch=master" alt="Build Status" />
  </a>
</p>

## Install

```
npm install vuex-apollo --save
```

## Import
- vuexApollo can be imported as a normal vue plugin
- You can pass the plugin 2 options
  - The *uri* of the graphql server
  - An Array of objects with the *module name* _(name)_ and the *raw module* _(module)_

```js
import Vue from 'vue'
import vuexApollo from 'vuex-apollo'
import user from './modules/user'
import App from './App.vue'

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
    import { mapActions, mapGetters, mapState } from 'vuex-apollo'

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

> This is an Example of actions using the INIT self called action and destructing the apollo and gql properties
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
- Integrate Vuex with apollo-link-state
- When major Vuex changes affect this plugin adapt the plugin - [Vue Roadmap](https://github.com/vuejs/roadmap#vuex-4x)

## Feedback
- Please raise any issues you find
- This is still a work in progress and I'll update as and when I have free time


---

## License

[MIT](http://opensource.org/licenses/MIT)
