export const AUTHORIZATION = 'AUTHORIZATION'
export const SET_ERROR = 'SET-ERROR'


let initState = {
    isAuthorization: false,
    error: "",
}

export const authReducer = (state=initState, action) => {
    switch(action.type) {
        case AUTHORIZATION: 
            return {
                ...state,
                isAuthorization: action.toggle
            }
        case SET_ERROR:
            console.log('asdf')
            return {
                ...state,
                error: action.err,
            }
        default:
            return state
    }
}


export const authorization = (toggle) => ({ type: AUTHORIZATION, toggle })
export const setError = (err) => ({ type: SET_ERROR, err })