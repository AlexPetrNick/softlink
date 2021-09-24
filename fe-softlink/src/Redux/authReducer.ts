export const AUTHORIZATION = 'AUTHORIZATION'
export const SET_ERROR = 'SET-ERROR'
export const LOG_OUT = 'LOG-OUT'
export const IS_VALID_TOKEN = 'IS_VALID_TOKEN'


let initState = {
    isAuthorization: false as boolean, 
    isTokenValid: false as boolean,
    error: "" as string,
}

export type InisStateAuthType = typeof initState

export const authReducer = (state:InisStateAuthType=initState, action:ActionType):InisStateAuthType => {
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
        default:
            return state
    }
}

type ActionType = AuthorizationType | SetErrorType | LogOutType
type AuthorizationType = {
    type: typeof AUTHORIZATION
    toggle: boolean
}
export const authorization = (toggle:boolean):AuthorizationType => ({ type: AUTHORIZATION, toggle })
type SetErrorType = {
    type: typeof SET_ERROR
    err: string
}
export const setError = (err:string):SetErrorType => ({ type: SET_ERROR, err })
type LogOutType = {
    type: typeof LOG_OUT
}
export const logOut = ():LogOutType => ({ type: LOG_OUT })
