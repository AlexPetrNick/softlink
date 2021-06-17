import {SET_STATE_NEW, TOGGLE_LOAD} from './actionNewDetail'


let initState = {
    title: '',
    content: '',
    isLoading: true,
}

const newDetailReducer = (state=initState, action) => {
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



