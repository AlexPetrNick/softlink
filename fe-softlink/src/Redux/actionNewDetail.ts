export const SET_STATE_NEW = 'SET-STATE-NEW'
export const TOGGLE_LOAD = 'TOGGLE_LOAD'

export type ActionNewsType =  SetStateNewType | ToggleLoadType
export type SetStateNewType = {
    type: typeof SET_STATE_NEW
    title: string
    content: string
}
export const setStateNew = (title:string, content:string):SetStateNewType => ({ type: SET_STATE_NEW, title, content })
export type ToggleLoadType = {
    type: typeof TOGGLE_LOAD,
    isLoad: boolean
}
export const toggleLoad = (isLoad:boolean):ToggleLoadType => ({ type: TOGGLE_LOAD, isLoad })