import ApolloClient from 'apollo-boost'

export default apollo = options => 
    new ApolloClient({
        uri: options.uri
    })
