import { version } from '../package.json'
import Vuex from 'vuex'

const VuexApollo = {
    install(Vue, options) {
        Vue.use(Vuex)

        Vue.$va = {
            version
        }
    }
}

export default VuexApollo
