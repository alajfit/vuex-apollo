import Vuex from 'vuex'
import gql from 'graphql-tag'
import store from './store'
import apollo from './apollo'

const VuexApollo = {
    install(Vue, options) {
        Vue.use(Vuex)
        const newStore = store(Vuex)
        newStore._modules.root.context.apollo = apollo(options)
        newStore._modules.root.context.gql = gql
        options.modules.forEach(module => {
            newStore.registerModule(module.name, module.store)
        })
        Vue.prototype.$store = newStore
    }
}

export default VuexApollo
