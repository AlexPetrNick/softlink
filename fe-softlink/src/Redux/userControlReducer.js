import {apiUser} from '../apiDAL/DAL'
import { apiCabinet } from '../apiDAL/DAL'


export const SET_CORR_LOGIN = "SET-CORR-LOGIN"
export const SET_CORR_PASSWORD = "SET-CORR-PASSWORD"
export const SET_DATA_USER = "SET-DATA-USER"
export const SET_ID_CABINET = "SET-ID-CABINET"

const initState = {
    id: "",
    username: "",
    password: "",
    firstName: "",
    secondName: "",
    correctLogin: "",
    correctPassword: "",
    cabinet_id: 0,
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
                username: action.data.username
            }
        }
        case SET_ID_CABINET: {
            return {
                ...state,
                cabinet_id: action.cabId
            }
        }
        default:
            return state
    }
}


export const setCorrLogin = (correctLogin) => ({ type:SET_CORR_LOGIN, correctLogin })
export const setCorrPassword = (correctPassword) => ({ type:SET_CORR_PASSWORD, correctPassword })
export const setDataUser = (data) => ({ type:SET_DATA_USER, data })
export const setCabinetId = (cabId) => ({ type:SET_ID_CABINET, cabId })


export default userControlReducer

/* THUNK */

export const idCabinetThunkCreator = () => (dispatch) => {
    return apiCabinet.getStateCabinet()
        .then(response => {
            if (response.id){
                dispatch(setCabinetId(response.id))   
            } else {
                dispatch(setCabinetId(0))
            }
        })

}

export const infoUserThunkCreator = () => (dispatch) => {
    return apiUser.getDataUser()
        .then(resp => {
            console.log(resp)
            dispatch(setDataUser(resp))
        })

}
