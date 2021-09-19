import {apiNews} from '../apiDAL/DAL'
import {Dispatch} from "redux";

export const SET_STATE_TEXT_TITLE_NEWS:string = 'SET-STATE-TEXT-TITLE-NEWS'
export const SET_STATE_TEXT_CONTENT_NEWS:string = 'SET-STATE-TEXT-CONTENT-NEWS'
export const ADD_POST:string = 'ADD-POST'
export const SET_NEWS_LIST:string = 'SET-NEWS-LIST'
export const SET_CATCH:string = 'SET-CATCH'
export const SET_COUNT_NEWS:string = 'SET-COUNT-NEWS'
export const SET_CURRENT_PAGE:string = 'SET-CURRENT-PAGE'
export const SET_PER_PAGE:string = 'SET-PER-PAGE'
export const SET_INIT_COMP_REQUEST:string = 'SET-INIT-COMP-REQUEST'
export const TOGGLE_LOAD:string = 'TOGGLE-LOAD'
export const SET_COMP_REQUEST_CHANGE_PAGE:string = 'SET_COMP_REQUEST_CHANGE_PAGE'

interface IsetStateTextTitleNews {
    type: typeof SET_STATE_TEXT_TITLE_NEWS,
    word: string
}
interface IsetStateTextContentNews{
    type: typeof SET_STATE_TEXT_CONTENT_NEWS,
    word: string
}
interface IaddNews {
    type: typeof ADD_POST,
}
interface IsetNewsListAC {
    type: typeof SET_NEWS_LIST,
    listNews: string
}
interface IsetCatch {
    type: typeof SET_CATCH,
    error: string
}
interface IsetCountNews {
    type: typeof SET_COUNT_NEWS,
    count: string
}
interface IsetCurrentPage {
    type: typeof SET_CURRENT_PAGE,
    current: number
}
interface IsetPerPage {
    type: typeof SET_PER_PAGE,
    perpage: string
}
interface ItoggleLoad {
    type: typeof TOGGLE_LOAD,
    isLoading: boolean
}
interface IsetInitCopmRequest {
    type: typeof SET_INIT_COMP_REQUEST,
    count: string,
    current: string,
    perpage: string,
    allNews: string
}
interface IsetCopmRequestChangePage {
    type: typeof SET_COMP_REQUEST_CHANGE_PAGE,
    current: string,
    allNews: string
}

export type taskActionTypes = IsetStateTextTitleNews | IsetStateTextContentNews | IaddNews | IsetNewsListAC | IsetCatch | IsetCountNews | IsetCountNews
| IsetCurrentPage | IsetPerPage | ItoggleLoad | IsetInitCopmRequest | IsetCopmRequestChangePage

export const setStateTextTitleNews = (titleNews:string):taskActionTypes => ({ type: SET_STATE_TEXT_TITLE_NEWS, word: titleNews})
export const setStateTextContentNews = (contentNews:string):taskActionTypes => ({ type: SET_STATE_TEXT_CONTENT_NEWS, word: contentNews})
export const addNews = ():taskActionTypes => ({ type: ADD_POST })
export const setNewsListAC = (listNews: string):taskActionTypes => ({ type: SET_NEWS_LIST, listNews })
export const setCatch = (error: string): taskActionTypes => ({ type: SET_CATCH, error })
export const setCountNews = (count: string):taskActionTypes => ({ type: SET_COUNT_NEWS, count })
export const setCurrentPage = (current: number):IsetCurrentPage => ({ type: SET_CURRENT_PAGE, current })
export const setPerPage = (perpage: string):taskActionTypes => ({ type: SET_PER_PAGE, perpage })
export const toggleLoad = (isLoading: boolean):taskActionTypes => ({ type: TOGGLE_LOAD, isLoading })
export const setInitCopmRequest = (count: string, current: string, perpage: string, allNews: string):taskActionTypes => ({ type: SET_INIT_COMP_REQUEST, count, current, perpage, allNews })
export const setCopmRequestChangePage = (current: string, allNews: string) => ({ type: SET_COMP_REQUEST_CHANGE_PAGE, current, allNews })

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