import {ActionNewsType, SET_STATE_NEW, TOGGLE_LOAD} from './actionNewDetail'


let initState = {
    title: '' as string,
    content: '' as string,
    isLoading: true as boolean,
}

type InitStateType = typeof initState

const newDetailReducer = (state:InitStateType=initState, action:ActionNewsType):InitStateType => {
    switch(action.type) {
    case SET_STATE_NEW:
        return {
            ...state,
            title: action.title,
            content: action.content
        }
    case TOGGLE_LOAD:
        return {
            ...state,
            isLoading: action.isLoad
        }
        default:
            return state
    }
}

export default newDetailReducer



