export const SET_CORR_LOGIN = "SET-CORR-LOGIN"
export const SET_CORR_PASSWORD = "SET-CORR-PASSWORD"
export const SET_DATA_USER = "SET-DATA-USER"

const initState = {
    id: "",
    username: "",
    password: "",
    firstName: "",
    secondName: "",
    correctLogin: "",
    correctPassword: ""
}

let userControlReducer = (state=initState, action) => {
    switch(action.type) {
        case SET_CORR_LOGIN: {
            return {
                ...state,
                correctLogin: action.correctLogin
            }
        }
        case SET_CORR_PASSWORD: {
            return {
                ...state,
                correctPassword: action.correctPassword
            }
        }
        case SET_DATA_USER: {
            return {
                ...state,
                id: action.data.id,
                username: action.data.username,
            }
        }
        default:
            return state
    }
}


export const setCorrLogin = (correctLogin) => ({ type:SET_CORR_LOGIN, correctLogin })
export const setCorrPassword = (correctPassword) => ({ type:SET_CORR_PASSWORD, correctPassword })
export const setDataUser = (data) => ({ type:SET_DATA_USER, data })


export default userControlReducer