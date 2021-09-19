import {apiUser} from '../apiDAL/DAL'
import { apiCabinet } from '../apiDAL/DAL'
import {Dispatch} from "redux";

export const SET_CORR_LOGIN = "SET-CORR-LOGIN"
export const SET_CORR_PASSWORD = "SET-CORR-PASSWORD"
export const SET_DATA_USER = "SET-DATA-USER"
export const SET_ID_CABINET = "SET-ID-CABINET"

export type initStateType = {
    id: number,
    username: string,
    password: string,
    firstName: string,
    secondName: string,
    correctLogin: string | undefined | null,
    correctPassword: string | undefined | null,
    cabinet_id: number
}

const initState:initStateType = {
    id: 0,
    username: "",
    password: "",
    firstName: "",
    secondName: "",
    correctLogin: "",
    correctPassword: "",
    cabinet_id: 0,
}


export type actionTypesCorrLogin = { type: typeof SET_CORR_LOGIN, correctLogin: string}
export type actionTypesCorrPass = { type: typeof SET_CORR_PASSWORD, correctPassword: string}
export type actionTypesData = { type: typeof SET_DATA_USER, data: { id: number, username: string }}
export type actionTypesCabId = { type: typeof SET_ID_CABINET, cabId: number }

export type actionType = actionTypesCorrLogin | actionTypesCorrPass | actionTypesData | actionTypesCabId

let userControlReducer = (state=initState, action:actionType ):initStateType => {
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


//TODO: Когда получим пользователя от сервера, добавить объекта дата

export const setCorrLogin = (correctLogin:string):actionTypesCorrLogin => ({ type:SET_CORR_LOGIN, correctLogin })
export const setCorrPassword = (correctPassword:string):actionTypesCorrPass => ({ type:SET_CORR_PASSWORD, correctPassword })
export const setDataUser = (data:object):actionTypesData => <actionTypesData>({type: SET_DATA_USER, data})
export const setCabinetId = (cabId:number):actionTypesCabId => ({ type:SET_ID_CABINET, cabId })


export default userControlReducer

/* THUNK */

export const idCabinetThunkCreator = () => (dispatch:any) => {
    return apiCabinet.getStateCabinet()
        .then(response => {
            if (response.id){
                dispatch(setCabinetId(response.id))   
            } else {
                dispatch(setCabinetId(0))
            }
        })

}

export const infoUserThunkCreator = () => (dispatch:any) => {
    return apiUser.getDataUser()
        .then(resp => {
            console.log(resp)
            dispatch(setDataUser(resp))
        })

}
