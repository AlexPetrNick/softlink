
import { apiComputer } from "../apiDAL/DAL"
import exp from "constants";
import {GenStatCompArrayType, GenStatCompType, RealStatComp} from "../contentWrapper/Cabinet/Cabinet";
import {useEffect} from "react";

export const ADD_ITEM_IN_COMPUTER = 'ADD-ITEM-IN-COMPUTER'
export const ERASE_ITEM_ON_COMPUTER = 'ERASE-ITEM-ON-COMPUTER'
export const TOGGLE_CORRECT = 'TOGGLE-CORRECT'
export const TOGGLE_ERROR = 'TOGGLE_ERROR'
export const CHANGE_NAME = 'CHANGE_NAME'
export const MOUNT_COMPUTER = 'MOUNT_COMPUTER'
export const SET_DATA_COMPUTER = 'SET-DATA'
export const TEST_ALL = 'TEST-ALL'
export const IS_SAVE_BUTTON_PRESS = 'IS_SAVE-BUTTON-PRESS'
export const SET_CNT_ERR_COMP = 'SET-CNT-ERR-COMP'
export const SET_REMAIN_POWER_COMPUTER = 'SET_REMAIN_POWER_COMPUTER'
export const SET_GENERAL_AND_REAL_CNT = 'SET_GENERAL_AND_REAL_CNT'

let typeItem = {
    0: "Не определен" as string,
    1: "Материнка" as string,
    2: "Процессор" as string,
    3: "Оперативная память" as string,
    4: "Видеокарта" as string,
    5: "Блок питания" as string,
    6: "SSD" as string,
    7: "HDD" as string
}
type TypeItemType = typeof typeItem

let typeRam = {
    ddr3: "DDR3"  as string,
    ddr3L: "DDR3L" as string,
    ddr4: "DDR4" as string,
}

let typeSsd = {
    m2: "M2" as string,
    pcie: "PCI-E 3.0 x4" as string,
    sata: "SATA-III" as string,
    msata: "mSATA"  as string
}

let nullMother = {
    id: 0 as number,
    cpu: 0 as number,
    ddr3: 0 as number,
    ddr3L: 0 as number,
    ddr4: 0 as number,
    pcie16: 0 as number,
    pcie4: 0 as number,
    pcie2: 0 as number,
    sata_cnt: 0 as number,
    msata_cnt: 0 as number,
    m2_cnt: 0 as number
}
type ActionType = AddItemInComputerType | EraseItemInComputerType | ToggleErrorType | ChangeNameType | MountComputerType | SetDataType
| TIsSaveButtonPress | TsetRemainPowerComputer | TSetGeneralAndRealCnt

let computerReducer = (state:StateComputer=initState, action:ActionType):StateComputer => {

    switch(action.type) {
        case ADD_ITEM_IN_COMPUTER:
            if (action.data.type_item == 1) {
                return {
                    ...state,
                    mother: [action.data]
                }
            } else if (action.data.type_item === 2) {
                return {
                    ...state,
                    cpu: [action.data]
                }
            } else if (action.data.type_item === 3) {
                return {
                    ...state,
                    ram: [...state.ram, action.data]
                }
            } else if (action.data.type_item === 4) {
                return {
                    ...state,
                    video: [...state.video, action.data]
                }
            } else if (action.data.type_item === 5) {
                return {
                    ...state,
                    power: [...state.power, action.data]
                }
            } else if (action.data.type_item === 6) {
                return {
                    ...state,
                    ssd: [...state.ssd, action.data]
                }
            } else if (action.data.type_item === 7) {
                return {
                    ...state,
                    hdd: [...state.hdd, action.data]
                }
            } else {
                return {
                    ...state
                }
            }
        case ERASE_ITEM_ON_COMPUTER:
            if (action.data.type_item == 1) {
                return {
                    ...state,
                    mother: []
                }
            } else if (action.data.type_item == 2) {
                return {
                    ...state,
                    cpu: []
                }
            } else if (action.data.type_item == 3) {
                let removeItem = state.ram.filter((data) => action.data.id != data.id)
                return {
                    ...state,
                    ram: [...removeItem]
                }
            } else if (action.data.type_item == 4) {
                let removeItem = state.video.filter((data) => action.data.id != data.id)
                return {
                    ...state,
                    video: [...removeItem]
                }
            } else if (action.data.type_item == 5) {
                return {
                    ...state,
                    power: []
                }
            } else if (action.data.type_item == 6) {
                let removeItem = state.ssd.filter((data) => action.data.id != data.id)
                return {
                    ...state,
                    ssd: [...removeItem]
                }
            } else if (action.data.type_item == 7) {
                let removeItem = state.hdd.filter((data) => action.data.id != data.id)
                return {
                    ...state,
                    hdd: [...removeItem]
                }
            } else {
                return {
                ...state
            }
            }
        case MOUNT_COMPUTER:
            return {
                ...state,
                name: action.data.name,
                cpu: action.data.cpu,
                mother: action.data.mother,
                hdd: action.data.hdd,
                ssd: action.data.ssd,
                video: action.data.video,
                power: action.data.power,
                ram: action.data.ram
            }
        case TOGGLE_ERROR:
            return {
                ...state,
                haveError: action.truth
            }
        case SET_DATA_COMPUTER:
            return {
                ...state,
                mother: action.data.mother,
                video: action.data.video,
                ssd: action.data.ssd,
                cpu: action.data.cpu,
                ram: action.data.ram,
                power: action.data.power,
                hdd: action.data.hdd
            }
        case IS_SAVE_BUTTON_PRESS:
            return {
                ...state,
                isSaveButtonPress: action.press
            }
        case SET_REMAIN_POWER_COMPUTER:
            let allPower:number = state.power.length ? state.power[0].power_all : 0
            let allPowerVideo = correctGetSumm(state.video)
            let allPowerRam = correctGetSumm(state.ram)
            let allPowerHdd = correctGetSumm(state.hdd)
            let allPowerSsd = correctGetSumm(state.ssd)
            let allPowerCpu = correctGetSumm(state.cpu)
            let allPowerMother = correctGetSumm(state.mother)
            let remainPower:number = allPower - (allPowerVideo + allPowerRam + allPowerHdd + allPowerSsd + allPowerCpu + allPowerMother)
            /*console.log(allPower)
            console.log(allPowerVideo)
            console.log(allPowerRam)
            console.log(allPowerHdd)
            console.log(allPowerSsd)
            console.log(allPowerCpu)
            console.log(allPowerMother)
            console.log(remainPower)*/
            return {
                ...state,
                remainPower: remainPower
            }
        case SET_GENERAL_AND_REAL_CNT:
            let CntSataHdd = state.hdd.length ? state.hdd.length : 0
            let CntSataSsd = state.ssd.length ? state.ssd.filter(a => a.interface = 'SATA-III').length : 0
            let dataMother = state.mother
            let generalCntCpu = dataMother.length ? dataMother[0].cpu : 0
            let generalCntVideo = dataMother.length ? dataMother[0].pcie16 : 0
            let generalCntDdr3 = dataMother.length ? dataMother[0].ddr3 : 0
            let generalCntDdr3L = dataMother.length ? dataMother[0].ddr3L : 0
            let generalCntDdr4 = dataMother.length ? dataMother[0].ddr4 : 0
            let generalCntSata = dataMother.length ? dataMother[0].sata_cnt : 0
            let generalCntPcie = dataMother.length ? dataMother[0].pcie4 : 0
            let generalCntM2 = dataMother.length ? dataMother[0].m2_cnt : 0
            let generalCntMSata = dataMother.length ? dataMother[0].msata_cnt : 0
            let generalCntSsd = generalCntM2 + generalCntSata + generalCntPcie
                    + generalCntMSata
            let generalCntRam = generalCntDdr3 + generalCntDdr3L + generalCntDdr4
            let dataSsd = state.ssd
            let dataRam = state.ram
            let realCntM2 = dataSsd.length ? dataSsd.filter(a => a.interface == 'M2').length : 0
            let realCntMSata = dataSsd.length ? dataSsd.filter(a => a.interface == 'mSATA').length : 0
            let realCntSata = CntSataSsd + CntSataHdd
            console.log("CntSataHdd")
            console.log(CntSataHdd)
            let realCntPcie4 = dataSsd.length ? dataSsd.filter(a => a.interface == 'PCI-E 3.0 x4').length : 0
            let realCntMother = dataMother.length ? 1 : 0
            let realCntCpu = state.cpu.length ? state.cpu.length : 0
            let realCntVideo = state.video.length ? state.video.length : 0
            let realCntPower = state.power.length ? state.power.length : 0
            let realCntDdr3 = dataRam.length ? dataRam.filter(a => a.type_memory == 'DDR3').length : 0
            let realCntDdr3L = dataRam.length ? dataRam.filter(a => a.type_memory == 'DDR3L').length : 0
            let realCntDdr4 = dataRam.length ? dataRam.filter(a => a.type_memory == 'DDR4').length : 0
            let realCntHdd = CntSataHdd
            let realCntSsd: number = realCntM2 + realCntMSata + realCntSata + realCntPcie4
            let realCntRam: number = realCntDdr3 + realCntDdr3L + realCntDdr4
            return {
                ...state,
                generalCntCpu: generalCntCpu,
                generalCntVideo: generalCntVideo,
                generalCntDdr3: generalCntDdr3,
                generalCntDdr3L: generalCntDdr3L,
                generalCntDdr4: generalCntDdr4,
                generalCntM2: generalCntM2,
                generalCntSata: generalCntSata,
                generalCntPcie: generalCntPcie,
                generalCntMSata: generalCntMSata,
                generalCntSsd: generalCntSsd,
                generalCntRam: generalCntRam,
                realCntM2: realCntM2,
                realCntMSata: realCntMSata,
                realCntSata: realCntSata,
                realCntPcie4: realCntPcie4,
                realCntMother: realCntMother,
                realCntCpu: realCntCpu,
                realCntVideo: realCntVideo,
                realCntPower: realCntPower,
                realCntDdr3: realCntDdr3,
                realCntDdr3L: dataRam.length ? dataRam.filter(a => a.type_memory == 'DDR3L').length : 0 as number,
                realCntDdr4: dataRam.length ? dataRam.filter(a => a.type_memory == 'DDR4').length : 0 as number,
                realCntHdd: realCntHdd,
                realCntSsd: realCntSsd,
                realCntRam: realCntRam
            }
        default:
            return state
    }
}
export default computerReducer


const correctGetSumm = (mass:Array<DataTypeWithoutPower>):number => {
    let a = 0;
    let res = mass.length ? mass.map((d)=>a+=Number(d.power), a=0).reverse()[0] : 0
    return res
}


export type DataType = ItemCpuType | ItemMotherType | ItemHddType | ItemRamType | ItemPowerType | ItemVideoType | ItemSsdType
export type DataTypeWithoutPower = ItemCpuType | ItemMotherType | ItemHddType | ItemRamType  | ItemVideoType | ItemSsdType
type AddItemInComputerType = {
    type: typeof ADD_ITEM_IN_COMPUTER,
    data: DataType
}
export const addItemInComputer = (data:DataType):AddItemInComputerType => ({ type: ADD_ITEM_IN_COMPUTER, data })
type EraseItemInComputerType = {
    type: typeof ERASE_ITEM_ON_COMPUTER,
    data: DataType
}
export const eraseItemInComputer = (data:DataType):EraseItemInComputerType => ({ type: ERASE_ITEM_ON_COMPUTER, data })
type ToggleErrorType = {
    type: typeof TOGGLE_ERROR,
    truth: boolean
}
export const toggleError = (truth:boolean):ToggleErrorType => ({ type:TOGGLE_ERROR, truth })
type ChangeNameType = {
    type: typeof CHANGE_NAME,
    name: string
}
export const changeName = (name:string):ChangeNameType => ({ type: CHANGE_NAME, name})
type MountComputerType = {
    type: typeof MOUNT_COMPUTER,
    data: TReturnTypeFetch
}
export const mountComputer = (data:TReturnTypeFetch):MountComputerType => ({ type: MOUNT_COMPUTER, data })
type SetDataType = {
    type: typeof SET_DATA_COMPUTER
    data: TAllArrayItems
}
export const setDataComputer = (data:TAllArrayItems):SetDataType => ({
    type: SET_DATA_COMPUTER,
    data
})
export type TSetDataComputer = typeof setDataComputer
type TIsSaveButtonPress = {
    type: typeof IS_SAVE_BUTTON_PRESS,
    press: boolean
}
export const isSaveButtonPress = (press:boolean):TIsSaveButtonPress => ({type:IS_SAVE_BUTTON_PRESS, press})
type TsetRemainPowerComputer = {
    type: typeof SET_REMAIN_POWER_COMPUTER
}
export const setRemainPowerComputer = ():TsetRemainPowerComputer => ({type:SET_REMAIN_POWER_COMPUTER})
type TSetGeneralAndRealCnt = {
    type: typeof SET_GENERAL_AND_REAL_CNT
}
export const setGeneralAndRealCnt = ():TSetGeneralAndRealCnt => ({type:SET_GENERAL_AND_REAL_CNT})


/* THUNK */
export const fetchComputerThunkCreator = () => {
    return (dispatch: any) => {
        apiComputer.fetchComputer()
            .then(data => {
                console.log(data)
                dispatch(mountComputer(data))
            })
    }
}

export type TReturnTypeFetch = {
    name: string,
    cpu: Array<ItemCpuType>,
    mother: Array<ItemMotherType>,
    hdd: Array<ItemHddType>,
    ssd: Array<ItemSsdType>,
    video: Array<ItemVideoType>,
    power: Array<ItemPowerType>,
    ram: Array<ItemRamType>
}

export type TAllArrayItems = {
    mother: Array<ItemMotherType>,
    video: Array<ItemVideoType>,
    ssd: Array<ItemSsdType>,
    cpu: Array<ItemCpuType>,
    ram: Array<ItemRamType>,
    power: Array<ItemPowerType>,
    hdd: Array<ItemHddType>
}

export type ItemCpuType = {
    id: number,
    brand: string,
    socket: string,
    core_int: string,
    core_amd: string,
    series: string,
    model: string,
    freq: string,
    tech_proc: string,
    num_core: string,
    cache1: number,
    cache2: number,
    tdp: string,
    has_graph: boolean,
    image: null | string,
    power: number,
    type_item: 2
}
export type ItemMotherType = {
    id: number,
    brand: string,
    socket: string,
    chipsetI: string,
    chipsetA: string,
    form_fact: string,
    model: string,
    work_freq: string,
    cpu: number,
    ddr3: number,
    ddr3L: number,
    ddr4: number,
    pcie16: number,
    pcie4: number,
    pcie2: number,
    sata_cnt: number,
    msata_cnt: number,
    m2_cnt: number,
    has_NVMe: boolean,
    port: string,
    bios: string,
    power: number,
    type_item: 1
}
export type ItemHddType = {
    id: 1,
    brand: string,
    model: string,
    form_factor: string,
    memory: string,
    buffer: string,
    freq: string,
    propusk_sposob: string,
    power: number,
    type_item: 7
}
export type ItemRamType = {
    id: number,
    brand: string,
    model: string,
    type_memory: string,
    memory: string,
    work_freq: string,
    timing: string,
    latency: string,
    form_factor: number,
    power: number,
    type_item: 3
}
export type ItemPowerType = {
    id: number,
    brand: string,
    model: string,
    power_all: number,
    PFC: string,
    int_for_mother: string,
    molex: string,
    sata: string,
    fdd: string,
    form_factor: number,
    type_item: 5
}
export type ItemVideoType = {
    id: number,
    brand: string,
    model: string,
    tech_proc: string,
    series: string,
    graph_proc: string,
    freq_proc: string,
    threading: string,
    type_memory: string,
    size_shina_video: string,
    freq_videomemory: string,
    api: string,
    connector: string,
    port: string,
    added_power: string,
    power: number,
    type_item: 4
}
export type ItemSsdType = {
    id: number,
    brand: string,
    form_factor: string,
    model: string,
    type_mem: string,
    memory: string,
    speed_read: string,
    speed_write: string,
    interface: string,
    propusk_sposob: string,
    power_in: string,
    power: number,
    type_item: 6
}

let initState = {
    name: 'ComputerOne' as string,
    haveError: false as boolean,
    isCorrect: true as boolean,
    cntError: 0 as number,
    remainPower: 0 as number,
    isSaveButtonPress: false as boolean,
    cpu: [] as Array<ItemCpuType>,
    mother: [] as Array<ItemMotherType>,
    hdd: [] as Array<ItemHddType>,
    ram: [] as Array<ItemRamType>,
    power: [] as Array<ItemPowerType>,
    video: [] as Array<ItemVideoType>,
    ssd: [] as Array<ItemSsdType>,
    generalCntPower: 1  as number,
    generalCntMother: 1 as number,
    generalCntCpu: 0  as number,
    generalCntVideo: 0 as number,
    generalCntDdr3: 0 as number,
    generalCntDdr3L: 0 as number,
    generalCntDdr4:  0 as number,
    generalCntM2:  0 as number,
    generalCntSata:  0 as number,
    generalCntPcie:  0 as number,
    generalCntMSata:  0 as number,
    generalCntSsd: 0 as number,
    generalCntRam: 0 as number,
    realCntM2: 0 as number,
    realCntMSata: 0 as number,
    realCntSata: 0 as number,
    realCntPcie4: 0 as number,
    realCntMother: 0 as number,
    realCntCpu: 0 as number,
    realCntVideo: 0 as number,
    realCntPower: 0 as number,
    realCntDdr3: 0 as number,
    realCntDdr3L: 0 as number,
    realCntDdr4: 0 as number,
    realCntHdd: 0 as number,
    realCntSsd: 0 as number,
    realCntRam: 0 as number
}

export type StateComputer = typeof initState