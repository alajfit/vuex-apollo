import * as types from './types'

export const actions = {
    [types.GET_USER_INFO] ({ commit, apollo, gql }) {
        apollo.query({
            query: gql`
            query UserInfo {
                User(id:21) {
                    id
                    firstName
                    lastName
                    email
                    avatar 
                }
            }
            `
        }).then(response => {
            commit(types.GET_USER_INFO, response.data.User)
        })
    }
}
