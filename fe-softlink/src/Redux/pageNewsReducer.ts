import {
    SET_STATE_TEXT_TITLE_NEWS,
    SET_STATE_TEXT_CONTENT_NEWS,
    ADD_POST,
    SET_NEWS_LIST,
    SET_CATCH,
    taskActionTypes
} from './actionsNews'
import {SET_CURRENT_PAGE, SET_INIT_COMP_REQUEST, TOGGLE_LOAD} from './actionsNews'
import {SET_COMP_REQUEST_CHANGE_PAGE} from './actionsNews'


export const TEST = "TEST"

export type TextNewNewsType = {
    titleNews: string,
    contentNews: string
}

export type NewsStructType = {
    id: number
    title: string
    content: string
}

let initState = {
    textNewNews: {
        titleNews: '',
        contentNews: ''
    } as TextNewNewsType,
    allNews: [] as Array<NewsStructType>,
    catchError: '' as string,
    countNews: 0 as number,
    currentPage: 1 as number,
    perPage: 1 as number,
    isLoading: true as boolean,
    idSet: 3 as number
}

export type InitStateNews = typeof initState

const pageNewsReducer = (state:InitStateNews=initState, action:taskActionTypes):InitStateNews => {
    switch(action.type) {
        case SET_STATE_TEXT_TITLE_NEWS:
            return {
                ...state,
                textNewNews: {
                    ...state.textNewNews,
                    titleNews: action.word
                }
            }
        case SET_STATE_TEXT_CONTENT_NEWS:
            return {
                ...state,
                textNewNews: { 
                    ...state.textNewNews,
                    contentNews: action.word 
                }
            }
        case ADD_POST:
            return {
                ...state,
                textNewNews: {
                    ...state.textNewNews,
                    titleNews: "",
                    contentNews: ""
                },
                allNews: [ ...state.allNews, {
                    id: state.idSet++,
                    title: state.textNewNews.titleNews,
                    content: state.textNewNews.contentNews
                }],
            }    
        case SET_CATCH:
            return {
                ...state,
                catchError: action.error
            }
        case SET_CURRENT_PAGE:
            return {
                ...state,
                currentPage: action.current
            }
        case SET_INIT_COMP_REQUEST:
            return {
                ...state,
                countNews: action.count,
                currentPage: action.current,
                perPage: action.perpage,
                allNews: action.allNews
            }
        case TOGGLE_LOAD:
            return{
                ...state,
                isLoading: action.isLoading
            }
        case SET_COMP_REQUEST_CHANGE_PAGE:
            return{
                ...state,
                currentPage: action.current,
                allNews: action.allNews
            }
        default:
            return state
    }
}


export const testAC = () => ({ type: TEST})


export default pageNewsReducer



