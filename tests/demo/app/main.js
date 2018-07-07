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
