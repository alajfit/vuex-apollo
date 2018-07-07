import { version } from '../../package.json'
import apolloGqlPlugin from './plugins/apollo-gql-plugin'

export default (Vuex, { apollo, gql }) => {
    const store = new Vuex.Store({
        state: { version },
        plugins: [apolloGqlPlugin]
    })
    store.$apollo = apollo
    store.$gql = gql

    return store
}
