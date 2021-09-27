const authReducer = (state = [], action) => {
    switch (action.type) {
        case "SIGN_IN":
            return {
                user: {
                    username: action.user.username,
                    gender: action.user.gender
                }
            }
        case "SIGN_OUT":
            return {
                user: null
            }
        default:
            return state
    }
}

export default authReducer
