import {apiUser} from '../apiDAL/DAL'
import { apiCabinet } from '../apiDAL/DAL'
import {Dispatch} from "redux";

export const SET_CORR_LOGIN = "SET-CORR-LOGIN"
export const SET_CORR_PASSWORD = "SET-CORR-PASSWORD"
export const SET_DATA_USER = "SET-DATA-USER"
export const SET_ID_CABINET = "SET-ID-CABINET"


export type initStateTypeUserControl = typeof initState

const initState = {
    id: 0 as number,
    username: "" as string,
    password: "" as string,
    first_name: "" as string,
    last_name: "" as string,
    email: "" as string,
    secondName: "" as string,
    about: "" as string,
    correctLogin: "" as string,
    correctPassword: "" as string,
    cabinet: 0 as number,
    computer: "" as string
}




export type actionType = actionTypesCorrLogin | actionTypesCorrPass | actionTypesData | actionTypesCabId

let userControlReducer = (state:initStateTypeUserControl=initState, action:actionType ):initStateTypeUserControl => {
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
                id: action.id,
                username: action.username,
                first_name: action.first_name,
                last_name: action.last_name,
                email: action.email,
                about: action.about,
                cabinet: action.cabinet,
                computer: action.computer
            }
        }
        case SET_ID_CABINET: {
            return {
                ...state,
                cabinet: action.cabId
            }
        }
        default:
            return state
    }
}


//TODO: Когда получим пользователя от сервера, добавить объекта дата
export type actionTypesCorrLogin = { type: typeof SET_CORR_LOGIN, correctLogin: string}
export type actionTypesCorrPass = { type: typeof SET_CORR_PASSWORD, correctPassword: string}
export type actionTypesData =
    {
        type: typeof SET_DATA_USER,
        id: number,
        username: string,
        first_name: string,
        last_name: string,
        email: string,
        about: string,
        cabinet: number,
        computer: string
    }
export type actionTypesCabId = { type: typeof SET_ID_CABINET, cabId: number }
export const setCorrLogin = (correctLogin:string):actionTypesCorrLogin => ({ type:SET_CORR_LOGIN, correctLogin })
export const setCorrPassword = (correctPassword:string):actionTypesCorrPass => ({ type:SET_CORR_PASSWORD, correctPassword })
export const setDataUser = (
    id: number,
    username: string,
    first_name: string,
    last_name: string,
    email: string,
    about: string,
    cabinet: number,
    computer: string
):actionTypesData => ({type: SET_DATA_USER, id, username,first_name, last_name, email, about, cabinet, computer})
export const setCabinetId = (cabId:number):actionTypesCabId => ({ type:SET_ID_CABINET, cabId })


export default userControlReducer

/* THUNK */

export const infoUserThunkCreator = () => (dispatch:any) => {
    return apiUser.getDataUser()
        .then(resp => {
            console.log(resp)
            dispatch(setDataUser(
                resp.id,
                resp.username,
                resp.first_name,
                resp.last_name,
                resp.email,
                resp.about,
                resp.cabinet,
                resp.computer
            ))
        })

}
