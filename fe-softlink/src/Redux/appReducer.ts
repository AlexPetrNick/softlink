import {infoUserThunkCreator} from './userControlReducer'
import {idCabinetThunkCreator} from './userControlReducer'
import {getCabinetThunkCreator} from './cabinetReducer'
import {Dispatch} from "redux";
import exp from "constants";

export const IS_INIT: string = 'IS-INIT'
export const NOT_INIT: string = 'NOT-INIT'

export type initStateType = {
    isInit: boolean
}

export type actionType = {
    type: typeof IS_INIT | typeof NOT_INIT,
    logic: boolean
}

let initState:initStateType = {
    isInit: false
}

const appReducer = (state:initStateType=initState, action: actionType):initStateType => {
    switch (action.type) {
        case IS_INIT:
            return {
                ...state,
                isInit:true
            }
        case NOT_INIT:
            return {
                ...state,
                isInit:false,
            }
        default:
            return state
    }
}


export default appReducer

type isInitType = {
    type: string
}
type notInitType = {
    type: string
}
type returnedTypes = notInitType | isInitType

export type IsInitType = {
    type: typeof IS_INIT
}
export const isInit = ():IsInitType => ({ type: IS_INIT })
export type NotInitType = {
    type: typeof NOT_INIT
}
export const notInit = ():returnedTypes => ({ type: NOT_INIT })

let a = typeof isInit
console.log(a)


/* THUNK */
export const initThunkCreator = () => (dispatch: any) => {
    let getDataUser = dispatch(infoUserThunkCreator())
    let getCabinetId = dispatch(idCabinetThunkCreator())
    let getCabinetState = dispatch(getCabinetThunkCreator())
    Promise.all([getDataUser, getCabinetId, getCabinetState ])
        .then(() => {
            dispatch(isInit())
        })
}
