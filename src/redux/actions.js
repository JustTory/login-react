export const signIn = (username, gender) => ({
    type: "SIGN_IN",
    user: {
        username: username,
        gender: gender
    }

})

export const signOut = () => ({
    type: "SIGN_OUT"
})