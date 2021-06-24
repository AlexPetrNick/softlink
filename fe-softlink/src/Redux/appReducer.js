import { apiUser } from "../apiDAL/DAL"
import {infoUserThunkCreator} from '../Redux/userControlReducer'

export const IS_INIT = 'IS-INIT'
export const NOT_INIT = 'NOT-INIT'

let initState = {
    isInit: false
}


const appReducer = (state=initState, action) => {
    switch (action.type) {
        case IS_INIT:
            return {
                ...state,
                isInit:true,
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


export const isInit = () => ({ type:IS_INIT })
export const notInit = () => ({ type:NOT_INIT })


/* THUNK */
export const initThunkCreator = () => (dispatch) => {
    let getDataUser = dispatch(infoUserThunkCreator())
    Promise.all([getDataUser])
        .then(() => {
            dispatch(isInit())
        })
}
