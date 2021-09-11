import {apiHdd} from '../apiDAL/DAL'

export const SET_PAGE_META = 'SET_PAGE_META'
export const SET_DATA = 'SET-DATA'
export const SET_META_REPEAT = 'SET-META-REPEAT'
export const TOGGLE_FETCH = 'TOGGLE-FETCH'
export const PAGE_UPDATE = 'PAGE-UPDATE'

export const filterFieldSsd = {
    form_factor: ['Форм-фактор', 'form_factor', '123', '124', '125', '126', '127', '128' ],
    type_mem: ['Тип памяти', 'type_mem', '3D MLC', '3D NAND', '3D NAND TLC', '3D QLC NAND', '3D XPoint', 'MLC', 'TLC' ],
    memory: [ 'Память', 'memory','1 Tb', '120 Gb', '128 Gb', '2 Tb', '240 Gb', '256 Gb', '3.2 Tb', '3.84 Tb', '375 Gb','4 Tb', '480 Gb', '500 Gb', '512 Gb', '6.4 Tb', '7.68 Tb', '960 Gb'],
    interface: ['Подлюкчение', 'interface','M2','PCI-E 3.0 x4','SATA-III','mSATA']
}


let initState = {
    countOnPage: 1,
    perPage: 1,
    urlNextPage: "",
    urlPrevPage: "",
    currentPage: 1,
    data: [],
    isFetching: false,
    pageUpdate: false

}

const hardPageReducer = (state=initState, action) => {
    switch(action.type){
        case SET_PAGE_META:
            return{
                ...state,
                countOnPage: action.count,
                perPage: action.perPage,
                urlNextPage: action.urlNextPage,
                urlPrevPage: action.urlPrevPage,
                currentPage: action.currentPage
            }
        case SET_DATA: 
            return {
                ...state,
                data: [ action.data]
            }
        case SET_META_REPEAT: 
            return {
                ...state,
                urlNextPage: action.next,
                urlPrevPage: action.prev,
                currentPage: action.current
            }
        case TOGGLE_FETCH: {
            return{
                ...state,
                isFetching: action.isLoad
            }
        }
        case PAGE_UPDATE: {
            return{
                ...state,
                pageUpdate: action.update
            }
        }
        default:
            return state
    }
}

export default hardPageReducer
 
export const setMetaRepeat = (next, prev, current) => ({ type: SET_META_REPEAT, next, prev, current })
export const setPageMeta = (count, perPage, urlNextPage, urlPrevPage, currentPage) => ({ type:SET_PAGE_META, count, perPage, urlNextPage, urlPrevPage, currentPage })
export const setData = (data) => ({ type: SET_DATA, data })
export const toggleFetch = (isLoad) => ({ type: TOGGLE_FETCH, isLoad })
export const pageUpdate = (update) => ({ type: PAGE_UPDATE, update })

/* THUNK */

export const getHardPageThunkCreator = (page=0, hard=apiHdd, params) => {
    console.log(params)
    return (dispatch) => {
        console.log("fetching hardpage")
        dispatch(toggleFetch(true))
        if (page) {
            hard.fetchOnClick(page, params)
            .then(data => {
                console.log(data)
                dispatch(setMetaRepeat(data.links.next, data.links.previous, data.current_page))
                dispatch(setData(data.results))
                dispatch(toggleFetch(false))
            })
        } else {
            hard.fetchOnMount()
            .then(data => {
                dispatch(setPageMeta(data.count, data.per_page, data.links.next, data.links.previous, data.current_page))
                dispatch(setData(data.results))
                dispatch(toggleFetch(false))
            })
        }
    }
}