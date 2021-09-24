import {apiCabinet, apiMother} from '../apiDAL/DAL'
import {
    ItemCpuType,
    ItemHddType,
    ItemMotherType,
    ItemPowerType,
    ItemRamType,
    ItemSsdType,
    ItemVideoType
} from "./computerReducer";
import exp from "constants";
import {lookupService} from "dns";

export const GET_STATE_CABINET = "GET-STATE-CABINET"
export const UPDATE_CABINET = "UPDATE_CABINET"

export type BagType = {
    cpu: Array<ItemCpuType>,
    video: Array<ItemVideoType>,
    mother: Array<ItemMotherType>,
    hdd: Array<ItemHddType>,
    ssd: Array<ItemSsdType>,
    powersupply: Array<ItemPowerType>,
    ram: Array<ItemRamType>
}

let initState = {
    updateCabinet: true as boolean,
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
    } as BagType

}

export type InitTypeCabinet = typeof initState

type ActionType = GetStateCabinetACType | UpdateCabinetACType

const CabinetReducer = (state:InitTypeCabinet=initState, action:ActionType):InitTypeCabinet => {
    switch(action.type){
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

export type DataFromServerType = {
    id: number,
    bag_cpu: Array<ItemCpuType>,
    bag_video: Array<ItemVideoType>,
    bag_mother: Array<ItemMotherType>,
    bag_hdd: Array<ItemHddType>,
    bag_ssd: Array<ItemSsdType>,
    bag_powersup: Array<ItemPowerType>,
    bag_ram: Array<ItemRamType>
}

type GetStateCabinetACType = {
    type: typeof GET_STATE_CABINET,
    data: DataFromServerType
}
export const getStateCabinetAC = (data:DataFromServerType):GetStateCabinetACType => ({ type: GET_STATE_CABINET, data })
type UpdateCabinetACType = {
    type: typeof UPDATE_CABINET,
    bol: boolean
}
export const updateCabinetAC = (bol:boolean):UpdateCabinetACType => ({ type: UPDATE_CABINET, bol })


/* THUNK */

export const getCabinetThunkCreator = () => {
    return (dispatch:any) => {
        let stateCabinet = apiCabinet.getStateCabinet()
        .then(response => response)
        Promise.all([stateCabinet])
            .then(value => {
                console.log(value)
                dispatch(getStateCabinetAC(value[0]))
            }
        )
    }
}

export const cabinetIsUpdateThunkCreator = (isUpdate:boolean) => {
    return (dispatch:any) => {
        let stateCabinet = apiCabinet.getStateCabinet()
        Promise.all([stateCabinet])
            .then(value => {
                dispatch(getStateCabinetAC(value[0]))
            }
        )
    }
}

export const cabinetEraseItem = (idItem:number, itemType:number) => {
    return (dispatch:any):any => {
        let addtem;
        let stateCabinet;
        if (itemType === 1) {
            addtem = apiCabinet.eraseItemMother(idItem)
        } else if (itemType === 3) {
            addtem = apiCabinet.eraseItemRam(idItem)
        } else if (itemType === 4) {
            addtem = apiCabinet.eraseItemVideo(idItem)
        } else if (itemType === 5) {
            addtem = apiCabinet.eraseItemPower(idItem)
        } else if (itemType === 6) {
            addtem = apiCabinet.eraseItemSsd(idItem)
        } else if (itemType === 7) {
            addtem = apiCabinet.eraseItemHdd(idItem)
        } else {
            addtem = apiCabinet.eraseItemCpu(idItem)
        }
        addtem
            .then(resp => {
                stateCabinet = apiCabinet.getStateCabinet()
                return stateCabinet
            }).then(value => {
                console.log(value)
                dispatch(getStateCabinetAC(value))
            })
    }
}

export type CabinetEraseItemType = typeof cabinetEraseItem
export const cabinetAddItem = ( idItem:number, itemType:number) => {
    return (dispatch:any):any => {
        let addtem;
        let stateCabinet;
        if (itemType === 1) {
            addtem = apiCabinet.addItemMother(idItem)
        } else if (itemType === 3) {
            addtem = apiCabinet.addItemRam(idItem)
        } else if (itemType === 4) {
            addtem = apiCabinet.addItemVideo(idItem)
        } else if (itemType === 5) {
            addtem = apiCabinet.addItemPower(idItem)
        } else if (itemType === 6) {
            addtem = apiCabinet.addItemSsd(idItem)
        } else if (itemType === 7) {
            addtem = apiCabinet.addItemHdd(idItem)
        } else {
            addtem = apiCabinet.addItemCpu(idItem)
        }
        addtem
            .then(resp => {
                stateCabinet = apiCabinet.getStateCabinet()
                return stateCabinet
            }).then(value => {
                console.log(value)
                dispatch(getStateCabinetAC(value))
            })
    }
}

export type CabinetAddItemType = typeof cabinetAddItem