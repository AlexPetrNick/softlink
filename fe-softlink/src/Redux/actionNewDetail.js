export const SET_STATE_NEW = 'SET-STATE-NEW'
export const TOGGLE_LOAD = 'TOGGLE_LOAD'

export const setStateNew = (title, content) => ({ type: SET_STATE_NEW, title, content })
export const toggleLoad = (isLoad) => ({ type: TOGGLE_LOAD, isLoad })