const GithubReducer = (state, action) => {
    switch(action.type) {
        case "GET_USERS":
        return {
            ...state,
            user: action.payload,
            loading: false,
        }
        default: 
        return state
    }
}

export default GithubReducer