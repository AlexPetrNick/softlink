import {apiNews} from '../apiDAL/DAL'
import {Dispatch} from "redux";
import {NewsStructType} from "./pageNewsReducer";

export const SET_STATE_TEXT_TITLE_NEWS = 'SET-STATE-TEXT-TITLE-NEWS'
export const SET_STATE_TEXT_CONTENT_NEWS = 'SET-STATE-TEXT-CONTENT-NEWS'
export const ADD_POST = 'ADD-POST'
export const SET_NEWS_LIST = 'SET-NEWS-LIST'
export const SET_CATCH = 'SET-CATCH'
export const SET_COUNT_NEWS = 'SET-COUNT-NEWS'
export const SET_CURRENT_PAGE = 'SET-CURRENT-PAGE'
export const SET_PER_PAGE = 'SET-PER-PAGE'
export const SET_INIT_COMP_REQUEST = 'SET-INIT-COMP-REQUEST'
export const TOGGLE_LOAD = 'TOGGLE-LOAD'
export const SET_COMP_REQUEST_CHANGE_PAGE = 'SET_COMP_REQUEST_CHANGE_PAGE'

type SetStateTextTitleNewsType = {
    type: typeof SET_STATE_TEXT_TITLE_NEWS,
    word: string
}
type SetStateTextContentNewsType = {
    type: typeof SET_STATE_TEXT_CONTENT_NEWS,
    word: string
}
type AddNewsType = {
    type: typeof ADD_POST,
}
type SetNewsListACType = {
    type: typeof SET_NEWS_LIST,
    listNews: string
}
type SetCatchType = {
    type: typeof SET_CATCH,
    error: string
}
type SetCountNewsType = {
    type: typeof SET_COUNT_NEWS,
    count: string
}
type SetCurrentPageType = {
    type: typeof SET_CURRENT_PAGE,
    current: number
}
type SetPerPageType = {
    type: typeof SET_PER_PAGE,
    perpage: string
}
type ToggleLoadType = {
    type: typeof TOGGLE_LOAD,
    isLoading: boolean
}
type SetInitCopmRequestType = {
    type: typeof SET_INIT_COMP_REQUEST,
    count: number,
    current: number,
    perpage: number,
    allNews: Array<NewsStructType>
}
type SetCopmRequestChangePageType = {
    type: typeof SET_COMP_REQUEST_CHANGE_PAGE,
    current: number,
    allNews: Array<NewsStructType>
}

export type taskActionTypes = SetStateTextTitleNewsType | SetStateTextContentNewsType | AddNewsType | SetNewsListACType | SetCatchType | SetCountNewsType
| SetCurrentPageType | SetPerPageType | ToggleLoadType | SetInitCopmRequestType | SetCopmRequestChangePageType

export const setStateTextTitleNews = (word:string):SetStateTextTitleNewsType => ({ type: SET_STATE_TEXT_TITLE_NEWS, word})
export const setStateTextContentNews = (word:string):SetStateTextContentNewsType => ({ type: SET_STATE_TEXT_CONTENT_NEWS, word})
export const addNews = ():AddNewsType => ({ type: ADD_POST })
export const setNewsListAC = (listNews: string):SetNewsListACType => ({ type: SET_NEWS_LIST, listNews })
export const setCatch = (error: string): SetCatchType => ({ type: SET_CATCH, error })
export const setCountNews = (count: string):SetCountNewsType => ({ type: SET_COUNT_NEWS, count })
export const setCurrentPage = (current: number):SetCurrentPageType => ({ type: SET_CURRENT_PAGE, current })
export const setPerPage = (perpage: string):SetPerPageType => ({ type: SET_PER_PAGE, perpage })
export const toggleLoad = (isLoading: boolean):ToggleLoadType => ({ type: TOGGLE_LOAD, isLoading })
export const setInitCopmRequest = (count: number, current: number, perpage: number, allNews: Array<NewsStructType>):SetInitCopmRequestType => ({ type: SET_INIT_COMP_REQUEST, count, current, perpage, allNews })
export const setCopmRequestChangePage = (current: number, allNews: Array<NewsStructType>):SetCopmRequestChangePageType => ({ type: SET_COMP_REQUEST_CHANGE_PAGE, current, allNews })

/*THUNK */
export const getNewsThunkCreator = (page=0) => { 
    return (dispatch: Dispatch) => {
    
    dispatch(toggleLoad(true))
    if (page) {
        dispatch(setCurrentPage(page))
        apiNews.fetchOnClick(page)
            .then(data => {
                dispatch(setCopmRequestChangePage( data.current_page, data.results))
                dispatch(toggleLoad(false))
            })
            .catch(data => dispatch(setCatch(String(data))))

    } else {
        apiNews.fetchOnMount()
            .then(data => {
                dispatch(setInitCopmRequest(data.count, data.current_page, data.per_page, data.results))
                dispatch(toggleLoad(false))  
            })
        }
    }
}