import * as types from './types'

export const actions = {
    [types.GET_LATEST_LISTINGS] ({ commit, apollo, gql }) {
        apollo.query({
            query: gql`
            query newListings {
                graphQLHub
                reddit {
                    subreddit(name: "movies"){
                        newListings(limit: 20) {
                            title
                            comments {
                                body
                                author { 
                                    username
                                    commentKarma
                                }
                            }
                        }
                    }
                }
            }
            `
        }).then(response => {
            console.log(response.data)
        })
    }
}
