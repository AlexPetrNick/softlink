import React from 'react'

export const LOG_IN = "LOG-IN"
export const LOG_OUT = "LOG-OUT"
export const SET_CORR_LOGIN = "SET-CORR-LOGIN"
export const SET_CORR_PASSWORD = "SET-CORR-PASSWORD"

const initState = {
    login: "",
    username: "",
    password: "",
    firstName: "",
    secondName: "",
    token: "",
    isAuth: false,
    cabinetId: 0,
    correctLogin: "",
    correctPassword: ""
}

let userControlReducer = (state=initState, action) => {
    switch(action.type) {
        case LOG_IN: {
            return {
                ...state,
                token: action.token,
                password: state.correctPassword,
                login: state.correctLogin,
                correctLogin: "22",
                correctPassword: "22"
            }
        }
        case LOG_OUT: {
            return {
                ...state,
                token: null
            }
        }
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
        default:
            return state
    }
}

//Передаем токен TODO: убрать, передаем логин и пароль с state
export const logIn = (token) => ({ type:LOG_IN, token })

export const logOut = () => ({ type:LOG_OUT })
export const setCorrLogin = (correctLogin) => ({ type:SET_CORR_LOGIN, correctLogin })
export const setCorrPassword = (correctPassword) => ({ type:SET_CORR_PASSWORD, correctPassword })


export default userControlReducer