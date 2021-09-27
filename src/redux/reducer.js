import * as actions from './actionTypes'

const reducer = (state = [], action) => {
    switch (action.type) {
        case actions.AUTHENTICATE:
            return {
                ...state,
                username: action.payload.username
            }
        default:
            return state
    }
}

export default reducer
