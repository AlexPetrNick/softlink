import {apiHdd} from '../apiDAL/DAL'

export const SET_PAGE_META = 'SET_PAGE_META'
export const SET_DATA = 'SET-DATA'
export const SET_META_REPEAT = 'SET-META-REPEAT'
export const TOGGLE_FETCH = 'TOGGLE-FETCH'
export const PAGE_UPDATE = 'PAGE-UPDATE'
export const SET_PAGES_ON_PAGE = 'SET_PAGES_ON_PAGE'
export const SET_PARAMS_JSON = 'SET-PARAMS-JSON'
export const SET_PARAMS = 'SET-PARAMS'
export const ADD_DICT_PARAMS = 'ADD-DICT-PARAMS'
export const ERASE_DICT_PARAMS = 'ERASE-DICT-PARAMS'

export const filterFieldSsd = {
    form_factor: ['Форм-фактор', 'form_factor', '123', '124', '125', '126', '127', '128' ],
    type_mem: ['Тип памяти', 'type_mem', '3D MLC', '3D NAND', '3D NAND TLC', '3D QLC NAND', '3D XPoint', 'MLC', 'TLC' ],
    memory: [ 'Память', 'memory','1 Tb', '120 Gb', '128 Gb', '2 Tb', '240 Gb', '256 Gb', '3.2 Tb', '3.84 Tb', '375 Gb','4 Tb', '480 Gb', '500 Gb', '512 Gb', '6.4 Tb', '7.68 Tb', '960 Gb'],
    interface: ['Подлюкчение', 'interface','M2','PCI-E 3.0 x4','SATA-III','mSATA']
}

export const filterFieldPower = {
    power_all: ['Общее питание', 'power_all', '160','200','250','300','350','400','430','450','500','550','600','650','700','750','800'],
    PFC: ['Коррекция фактора мощности', 'PFC', 'Активный','Пассивный','н/д','нет']
}


let initState = {
    countOnPage: 1,
    perPage: 1,
    urlNextPage: "",
    urlPrevPage: "",
    currentPage: 1,
    data: [],
    isFetching: false,
    pageUpdate: false,
    paramsJson: {},
    params: ''
}

let keyInDict = (dict) => {
    let listKey = ''
    for (let word in dict) {
        listKey += word
    }
    return listKey
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
        case SET_PARAMS: {
            return {
                ...state,
                params: action.params
            }
        }
        case SET_PARAMS_JSON: {
            let json = {}
            for (let key in action.json) {
                json[key] = []
            }
            console.log(json)
            return {
                ...state,
                paramsJson: {...json}
            }
        }
        case ADD_DICT_PARAMS: {
            let tag = action.tag
            let arrayWord = keyInDict(state.paramsJson)
            if (arrayWord.indexOf(tag) >= 0) {
                state.paramsJson[tag].push(action.value)
            } else {
                state.paramsJson[action.tag] = [action.value]
            }
            return {
                ...state,
            }
        }
        case ERASE_DICT_PARAMS: {
            let tag = action.tag
            let corrFilter = state.paramsJson[tag].filter(i => i != action.value)
            state.paramsJson[tag] = [...corrFilter]
            return {
                ...state
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
export const setParams = (params) => ({ type: SET_PARAMS, params })
export const setParamsJson = (json) => ({ type: SET_PARAMS_JSON, json })
export const addDictParams = (tag, value) => ({ type: ADD_DICT_PARAMS, tag, value })
export const eraseDictParams = (tag, value) => ({ type: ERASE_DICT_PARAMS, tag, value })

/* THUNK */

export const getHardPageThunkCreator = (page=0, hard=apiHdd, params) => {
    return (dispatch) => {
        console.log("fetching hardpage")
        dispatch(toggleFetch(true))
        if (page) {
            hard.fetchOnClick(page, params)
            .then(data => {
                console.log(data)
                dispatch(setPageMeta(data.count, data.per_page, data.links.next, data.links.previous, data.current_page))
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