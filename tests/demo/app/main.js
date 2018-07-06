import Vue from 'vue'
import App from './App.vue'
import vuexApollo from '../../../src'
import movies from './modules/movies'

Vue.use(vuexApollo, {
    uri: 'http://www.testing.com',
    modules: [{
      name: 'movies',
      store: movies
    }]
})

new Vue({
  el: '#app',
  render: h => h(App)
})
