import Vuex, { mapActions as mA, mapGetters as mG, mapState as mS, createNamespacedHelpers as cNH } from 'vuex'
import gql from 'graphql-tag'
import createStore from './store'
import createApollo from './apollo'

const VuexApollo = {
    install (Vue, options) {
        Vue.use(Vuex)
        const apollo = createApollo(options)
        const store = createStore(Vuex, { apollo, gql })

        options.modules.forEach(module => store.registerModule(module.name, module.store))

        Vue.prototype.$store = store
    }
}

export const mapActions = mA
export const mapGetters = mG
export const mapState = mS
export const createNamespacedHelpers = cNH

export default VuexApollo
