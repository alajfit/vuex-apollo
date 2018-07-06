const { version } = require('../package.json')

const VuexApollo = {
    install(Vue, options) {
        Vue.$va = {
            version
        }
    }
}

export default VuexApollo
