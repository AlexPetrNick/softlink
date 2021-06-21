export const AUTHORIZATION = 'AUTHORIZATION'
export const SET_ERROR = 'SET-ERROR'
export const LOG_OUT = 'LOG-OUT'
export const IS_VALID_TOKEN = 'IS_VALID_TOKEN'


let initState = {
    isAuthorization: false,
    isTokenValid: false,
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
            return {
                ...state,
                error: action.err,
            }
        case LOG_OUT:
            return {
                ...state,
                isAuthorization: false
            }
        case IS_VALID_TOKEN:
            return {
                ...state,
                isTokenValid: action.valid
            }
        default:
            return state
    }
}


export const authorization = (toggle) => ({ type: AUTHORIZATION, toggle })
export const setError = (err) => ({ type: SET_ERROR, err })
export const logOut = () => ({ type: LOG_OUT })
export const isValidToken = (valid) => ({ type: IS_VALID_TOKEN, valid })