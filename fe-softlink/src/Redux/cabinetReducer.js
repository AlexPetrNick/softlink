import {apiCabinet} from '../apiDAL/DAL'

export const GET_ITEM_IN_BUG = "GET-ITEM-IN-BUG"
export const GET_ITEM_IN_BUG_MOTHER = "GET-ITEM-IN-BUG-MOTHER"
export const GET_ITEM_IN_BUG_CPU = "GET-ITEM-IN-BUG-CPU"
export const ERASE_ITEM_IN_BUG_CPU = "ERASE-ITEM-IN-BUG-CPU"
export const ERASE_ITEM_IN_BUG_MOTHER = "ERASE-ITEM-IN-BUG-MOTHER"
export const GET_STATE_CABINET = "GET-STATE-CABINET"
export const UPDATE_CABINET = "UPDATE_CABINET"

let initState = {
    updateCabinet: true,
    bag: {
        cpu: [
        ],
        video: [
        ],
        mother: [
        ],
        hdd: [
        ],
        ssd: [
        ],
        powersupply: [
        ],
        ram: [
        ]
    }

}

const CabinetReducer = (state=initState, action) => {
    switch(action.type){
        case GET_ITEM_IN_BUG_MOTHER:
            return {
                ...state,
                itemIdBugMother: [...state.itemIdBugMother, action.item.id],
                bag: {
                    ...state.bag,
                    mother: [ ...state.bag.mother, {
                        id: action.item.id,
                        model: action.item.model,
                        brand: action.item.brand
                    } ]
                }
            }
        case GET_ITEM_IN_BUG_CPU:
            return {
                ...state,
                itemIdBugCpu: [...state.itemIdBugCpu, action.item.id],
                bag: {
                    ...state.bag,
                    cpu: [ ...state.bag.cpu, {
                        id: action.item.id,
                        model: action.item.model,
                        brand: action.item.brand
                    } ]
                }
            }
        case ERASE_ITEM_IN_BUG_MOTHER:
            return {
                ...state,
                itemIdBugMother: [...state.itemIdBugMother.filter(id => id != action.id)],
                bag: {
                    ...state.bag,
                    mother: [...state.bag.mother.filter(item => item.id != action.id)] 
                }
            }
        case ERASE_ITEM_IN_BUG_CPU:
            return {
                ...state,
                itemIdBugCpu: [...state.itemIdBugCpu.filter(id => id != action.id)],
                bag: {
                    ...state.bag,
                    cpu: [...state.bag.cpu.filter(item => item.id != action.id)] 
                }
            }
        case GET_STATE_CABINET:
            return {
                ...state,
                bag: {
                    cpu: action.data.bag_cpu,
                    video: action.data.bag_video,
                    ram: action.data.bag_ram,
                    powersupply: action.data.bag_powersup,
                    ssd: action.data.bag_ssd,
                    mother: action.data.bag_mother,
                    hdd: action.data.bag_hdd,
                }
            }
        case UPDATE_CABINET:
            return {
                ...state,
                updateCabinet: action.bol,
            }    
        default:
            return state
    }
}

export default CabinetReducer

export const getItemInBugHard = (item, bugName) => ({ type: GET_ITEM_IN_BUG, item, bugName })
export const getItemInBugHardMother = (item) => ({ type: GET_ITEM_IN_BUG_MOTHER, item })
export const getItemInBugHardCPU = (item) => ({ type: GET_ITEM_IN_BUG_CPU, item })
export const eraseItemInBugHardCPU = (id) => ({ type: ERASE_ITEM_IN_BUG_CPU, id })
export const eraseItemInBugHardMother = (id) => ({ type: ERASE_ITEM_IN_BUG_MOTHER, id })
export const getStateCabinetAC = (data) => ({ type: GET_STATE_CABINET, data })
export const updateCabinetAC = (bol) => ({ type: UPDATE_CABINET, bol })


/* THUNK */

export const getCabinetThunkCreator = () => {
    return (dispatch) => {
        let stateCabinet = apiCabinet.getStateCabinet()
        .then(response => response)
        Promise.all([stateCabinet])
            .then(value => {
                dispatch(getStateCabinetAC(value[0]))
            }
        )
    }
}
export const cabinetIsUpdateThunkCreator = () => {
    return (dispatch) => {
        let stateCabinet = apiCabinet.getStateCabinet()
        .then(response => response)
        Promise.all([stateCabinet])
            .then(value => {
                dispatch(getStateCabinetAC(value[0]))
                dispatch(updateCabinetAC(false))
            }
        )
    }
}