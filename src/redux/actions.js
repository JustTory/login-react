import * as actions from './actionTypes'

export const authenticate = name => ({
    type: actions.AUTHENTICATE,
    payload: {
        username: name
    }
})