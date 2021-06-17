import {SET_STATE_TEXT_TITLE_NEWS, SET_STATE_TEXT_CONTENT_NEWS, ADD_POST, SET_NEWS_LIST, SET_CATCH} from './actionsNews'
import {SET_COUNT_NEWS, SET_PER_PAGE, SET_CURRENT_PAGE, SET_INIT_COMP_REQUEST, TOGGLE_LOAD} from './actionsNews'
import {SET_COMP_REQUEST_CHANGE_PAGE} from './actionsNews'


export const TEST = "TEST"


let initState = {
    textNewNews: {
        titleNews: '',
        contentNews: ''
    },
    allNews: [],
    catchError: '',
    countNews: 0,
    currentPage: 1,
    perPage: 1,
    isLoading: true,
}

const pageNewsReducer = (state=initState, action) => {
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
                allNews: [...state.allNews, {
                    "title": state.textNewNews.titleNews,
                    "content": state.textNewNews.contentNews
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
                allNews: [action.allNews]
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
                allNews: [action.allNews]
            }
        case TEST:
            return state
        default:
            return state
    }
}


export const testAC = () => ({ type: TEST})


export default pageNewsReducer



