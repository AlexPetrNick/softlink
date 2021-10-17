
import { apiComputer } from "../apiDAL/DAL"
import exp from "constants";

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
| TIsSaveButtonPress | TsetRemainPowerComputer

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
            console.log(allPower)
            console.log(allPowerVideo)
            console.log(allPowerRam)
            console.log(allPowerHdd)
            console.log(allPowerSsd)
            console.log(allPowerCpu)
            console.log(allPowerMother)
            console.log(remainPower)

            return {
                ...state,
                remainPower: remainPower
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
    cpu: [{
        id: 8,
        brand: "AMD",
        socket: "AM4",
        core_int: "No",
        core_amd: "Matisse",
        series: "AMD Ryzen",
        model: "5 3600X",
        freq: "3800 Мгц",
        tech_proc: "7 нм",
        num_core: "6",
        cache1: 64,
        cache2: 1024,
        tdp: "95 Вт",
        has_graph: false,
        image: null,
        power: 75,
        type_item: 2
    }] as Array<ItemCpuType>,
    mother: [{
        "id": 7,
        "brand": "ASUS",
        "socket": "AM4",
        "chipsetI": "H310",
        "chipsetA": "AMD A520",
        "form_fact": "mATX",
        "model": "TUF GAMING A520M-PLUS",
        "work_freq": "2133 - 4800 МГц",
        "cpu": 1,
        "ddr3": 0,
        "ddr3L": 0,
        "ddr4": 4,
        "pcie16": 1,
        "pcie4": 3,
        "pcie2": 0,
        "sata_cnt": 6,
        "msata_cnt": 1,
        "m2_cnt": 1,
        "has_NVMe": true,
        "port": "1x PS/22x USB 2.01x RJ-451x HDMI1x DVI-D1x VGA (D-Sub)3x Audio jack4 x USB 3.2 Gen 11 x USB 3.2 Gen 2",
        "bios": "UEFI AMI BIOS, 256 Мбит",
        "power": 25,
        type_item: 1
    }] as Array<ItemMotherType>,
    hdd: [{
        "id": 1,
        "brand": "Seagate",
        "model": "ST1000DM010",
        "form_factor": "3.5",
        "memory": "1 Tb",
        "buffer": "64",
        "freq": "7200",
        "propusk_sposob": "6 Гбит/сек",
        "power": 30,
        "type_item": 7
    }] as Array<ItemHddType>,
    ram: [{
        id: 3,
        brand: "Kingston",
        model: "HX424C15FB3/8",
        type_memory: "DDR4",
        memory: "8Gb",
        work_freq: "2400",
        timing: "15-15-15",
        latency: "CL15",
        form_factor: 115,
        power: 3,
        type_item: 3
    },
    {
        "id": 4,
        "brand": "Crucial",
        "model": "CT4G4DFS8266",
        "type_memory": "DDR4",
        "memory": "4Gb",
        "work_freq": "2666",
        "timing": "19",
        "latency": "CL19",
        "form_factor": 115,
        "power": 5,
        "item_type": 3
    }] as Array<ItemRamType>,
    power: [{
        id: 2,
        brand: "FSP",
        model: "QD500 85+",
        power_all: 500,
        PFC: "Активный",
        int_for_mother: "24+4+4 pin",
        molex: "2 шт",
        sata: "4 шт",
        fdd: "2 шт",
        form_factor: 118,
        type_item: 5
    }] as Array<ItemPowerType>,
    video: [{
        id: 1,
        brand: "Palit",
        model: "StormX",
        tech_proc: "14 нм",
        series: "GeForce GTX 1xx0",
        graph_proc: "GeForce GTX 1050 Ti",
        freq_proc: "1290",
        threading: "768",
        type_memory: "GDDR5",
        size_shina_video: "128 Bit",
        freq_videomemory: "7000",
        api: "DirectX 12, OpenGL 4.5",
        connector: "PCI-E 16x 3.0",
        port: "HDMIDisplayPortDVI-D",
        added_power: "0 (нет)",
        power: 150,
        type_item: 4
    }] as Array<ItemVideoType>,
    ssd: [{
        id: 3,
        brand: "Intel",
        form_factor: "M.2",
        model: "SSDSCKKW128G8X1959549",
        type_mem: "TLC",
        memory: "128 Gb",
        speed_read: "550",
        speed_write: "440",
        interface: "SATA-III",
        propusk_sposob: "6 Гбит/с",
        power_in: "От M.2 PCI-Express Gen3 x4",
        power: 15,
        type_item: 6
    }] as Array<ItemSsdType>,
    remainMother: 0 as number,
    remainVideo: 0 as number,
    remainCpu: 0 as number,
    remainDdr3: 0 as number,
    remainDdr3L: 0 as number,
    remainDdr4: 2 as number,
    remainPcie2: 0 as number,
    remainPcie4: 3 as number,
    remainPcie16: 0 as number,
    remainM2: 1 as number,
    remainSata: 4 as number,
    remainMSata: 1 as number,
}

export type StateComputer = typeof initState