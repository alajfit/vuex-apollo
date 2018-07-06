import ApolloClient from 'apollo-boost'

export default options => {
    return new ApolloClient({
        uri: options.uri
    })
}
