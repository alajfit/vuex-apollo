import * as types from './types'

export const mutations = {
    [types.GET_USER_INFO] (state, data) {
        state.avatar = data.avatar
        state.email = data.email
        state.firstName = data.firstName
        state.id = data.id
        state.lastName = data.lastName
    }
}
