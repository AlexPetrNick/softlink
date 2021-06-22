import {apiCabinet} from '../apiDAL/DAL'

export const GET_ITEM_IN_BUG = "GET-ITEM-IN-BUG"
export const GET_ITEM_IN_BUG_MOTHER = "GET-ITEM-IN-BUG-MOTHER"
export const GET_ITEM_IN_BUG_HDD = "GET-ITEM-IN-BUG-HDD"
export const GET_ITEM_IN_BUG_CPU = "GET-ITEM-IN-BUG-CPU"
export const ERASE_ITEM_IN_BUG_HDD = "ERASE-ITEM-IN-BUG-HDD"
export const ERASE_ITEM_IN_BUG_CPU = "ERASE-ITEM-IN-BUG-CPU"
export const ERASE_ITEM_IN_BUG_MOTHER = "ERASE-ITEM-IN-BUG-MOTHER"
export const GET_STATE_CABINET = "GET-STATE-CABINET"
export const UPDATE_CABINET = "UPDATE_CABINET"

let initState = {
    itemIdBugHdd: [],
    itemIdBugCpu: [],
    itemIdBugMother: [],
    updateCabinet: true,
    personalComputer: {
        name: "MyFirstComputer",
        cpu: "Intel",
        mother: "MSI",
        video: "NVideo"
    },
    bag: {
        cpu: [
        ],
        video: [
        ],
        mother: [
        ],
        hdd: [
        ]

    }

}

const CabinetReducer = (state=initState, action) => {
    let bugName;

    if (action.bugName) {

    }

    switch(action.type){
        case GET_ITEM_IN_BUG_HDD:
            return {
                ...state,
                itemIdBugHdd: [...state.itemIdBugHdd, action.item.id],
                bag: {
                    ...state.bag,
                    hdd: [ ...state.bag.hdd, {
                        id: action.item.id,
                        model: action.item.model,
                        brand: action.item.brand
                    } ]
                }
            }
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
        case ERASE_ITEM_IN_BUG_HDD:
            return {
                ...state,
                itemIdBugHdd: [...state.itemIdBugHdd.filter(id => id != action.id)],
                bag: {
                    ...state.bag,
                    hdd: [...state.bag.hdd.filter(item => item.id != action.id)] 
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
                //itemIdBugHdd: [],
                //itemIdBugCpu: [],   
                //itemIdBugMother: [],
                bag: {
                    cpu: [...state.bag.cpu, action.data.bug_cpu],
                    video: [...state.bag.video, action.data.bug_video],
                    mother: [...state.bag.mother, action.data.bug_mother],
                    hdd: [...state.bag.hdd, action.data.bug_hdd]
                }
            }
        case UPDATE_CABINET:
            return {
                ...state,
                updateCabinet: action.toggle,
            }    
        default:
            return state
    }
}

export default CabinetReducer

export const getItemInBugHard = (item, bugName) => ({ type: GET_ITEM_IN_BUG, item, bugName })
export const getItemInBugHardHDD = (item) => ({ type: GET_ITEM_IN_BUG_HDD, item })
export const getItemInBugHardMother = (item) => ({ type: GET_ITEM_IN_BUG_MOTHER, item })
export const getItemInBugHardCPU = (item) => ({ type: GET_ITEM_IN_BUG_CPU, item })
export const eraseItemInBugHardHDD = (id) => ({ type: ERASE_ITEM_IN_BUG_HDD, id })
export const eraseItemInBugHardCPU = (id) => ({ type: ERASE_ITEM_IN_BUG_CPU, id })
export const eraseItemInBugHardMother = (id) => ({ type: ERASE_ITEM_IN_BUG_MOTHER, id })
export const getStateCabinetAC = (data) => ({ type: GET_STATE_CABINET, data })
export const updateCabinetAC = (toggle) => ({ type: UPDATE_CABINET, toggle })


/* THUNK */

export const getCabinetThunkCreator = (id) => {
    return (dispatch) => {
        console.log(id)
        apiCabinet.getStateCabinet(id)
        .then(response => {
            dispatch(getStateCabinetAC(response))
        })
    }
}