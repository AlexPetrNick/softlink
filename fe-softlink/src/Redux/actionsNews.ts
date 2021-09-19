import {apiNews} from '../apiDAL/DAL'

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

export const setStateTextTitleNews = (titleNews:string):object => ({ type: SET_STATE_TEXT_TITLE_NEWS, word: titleNews})
export const setStateTextContentNews = (contentNews:string):object => ({ type: SET_STATE_TEXT_CONTENT_NEWS, word: contentNews})
export const addNews = () => ({ type: ADD_POST })
export const setNewsListAC = (listNews) => ({ type: SET_NEWS_LIST, listNews })
export const setCatch = (error) => ({ type: SET_CATCH, error })
export const setCountNews = (count) => ({ type: SET_COUNT_NEWS, count })
export const setCurrentPage = (current) => ({ type: SET_CURRENT_PAGE, current })
export const setPerPage = (perpage) => ({ type: SET_PER_PAGE, perpage })
export const toggleLoad = (isLoading) => ({ type: TOGGLE_LOAD, isLoading })
export const setInitCopmRequest = (count, current, perpage, allNews) => ({ type: SET_INIT_COMP_REQUEST, count, current, perpage, allNews })
export const setCopmRequestChangePage = (current, allNews) => ({ type: SET_COMP_REQUEST_CHANGE_PAGE, current, allNews })

/*THUNK */
export const getNewsThunkCreator = (page=0) => { 
    return (dispatch) => {
    
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