
import { apiComputer } from "../apiDAL/DAL"

export const ADD_ITEM_IN_COMPUTER = 'ADD-ITEM-IN-COMPUTER'
export const ERASE_ITEM_ON_COMPUTER = 'ERASE-ITEM-ON-COMPUTER'
export const MOTHER = 'MOTHER'
export const CPU = 'CPU'
export const HDD = 'MOTHER'
export const SSD = 'SSD'
export const RAM = 'RAM'
export const POWER = 'POWER'
export const VIDEO = 'VIDEO'
export const TOGGLE_CORRECT = 'TOGGLE-CORRECT'
export const TOGGLE_ERROR = 'TOGGLE_ERROR'
export const CHANGE_NAME = 'CHANGE_NAME'
export const MOUNT_COMPUTER = 'MOUNT_COMPUTER'
let ramCnt = 0;
let cnt;

let typeItem = {
    0: "Не определен",
    1: "Материнка",
    2: "Процессор",
    3: "Оперативная память",
    4: "Видеокарта",
    5: "Блок питания",
    6: "SSD",
    7: "HDD",
}

let typeRam = {
    ddr3: "DDR3",
    ddr3L: "DDR3L",
    ddr4: "DDR4",
}

let typeSsd = {
    m2: "M2",
    pcie: "PCI-E 3.0 x4",
    sata: "SATA-III",
    msata: "mSATA"
}

let nullMother = {
    "id": 0,
    "cpu": 0,
    "ddr3": 0,
    "ddr3L": 0,
    "ddr4": 0,
    "pcie16": 0,
    "pcie4": 0,
    "pcie2": 0,
    "sata_cnt": 0,
    "msata_cnt": 0,
    "m2_cnt": 0,
}

const computerReducer = (state=initState, action) => {
    switch(action.type) {
        case ADD_ITEM_IN_COMPUTER:
            if (action.data.type_item == 1) {
                let moth = action.data
                return {
                    ...state,
                    remainMother: 0,
                    mother: [moth]
                }
            } else if (action.data.type_item == 3) {
                if (action.data.type_memory == typeRam.ddr3) {
                    ramCnt = state.remainDdr3 - 1 
                    return {
                        ...state,
                        remainDdr3: ramCnt,
                        ram: [...state.ram, action.data]
                    }
                } else if (action.data.type_memory == typeRam.ddr3L) {
                    ramCnt = state.remainDdr3L - 1 
                    return {
                        ...state,
                        remainDdr3L: ramCnt,
                        ram: [...state.ram, action.data]
                    }
                } else { 
                    ramCnt = state.remainDdr4 - 1 
                    return {
                        ...state,
                        remainDdr4: ramCnt,
                        ram: [...state.ram, action.data]
                    }
                }
            }
            else if (action.data.type_item == 6) {
                if (action.data.interface == typeSsd.m2) {
                    cnt = state.remainM2 - 1
                    return {
                        ...state,
                        remainM2: cnt,
                        ssd: [...state.ssd, action.data]
                    }
                } else if (action.data.interface == typeSsd.pcie) {
                    cnt = state.remainPcie4 - 1
                    return {
                        ...state,
                        remainPcie4: cnt,
                        ssd: [...state.ssd, action.data]
                    }
                } else if (action.data.interface == typeSsd.sata) {
                    cnt = state.remainSata - 1
                    return {
                        ...state,
                        remainSata: cnt,
                        ssd: [...state.ssd, action.data]
                    }
                } else {
                    cnt = state.remainMSata - 1
                    return {
                        ...state,
                        remainMSata: cnt,
                        ssd: [...state.ssd, action.data]
                    }
                }
            }
        case ERASE_ITEM_ON_COMPUTER:
            if (action.data.type_item == 1) {
                return {
                    ...state,
                    remainMother: 1,
                    mother: [nullMother]
                }
            } else {
                return {
                ...state
            }
            }
        case TOGGLE_CORRECT:
            return {
                ...state,
                isCorrect: action.truth
        }
        case TOGGLE_ERROR:
            return {
                ...state,
                haveError: action.truth
            }
        default:
            return state
    }
}
export default computerReducer

export const addItemInComputer = (data) => ({ type: ADD_ITEM_IN_COMPUTER, data })
export const eraseItemInComputer = (data) => ({ type: ERASE_ITEM_ON_COMPUTER, data })
export const toggleCorrect = (truth) => ({ type:TOGGLE_CORRECT, truth })
export const toggleError = (truth) => ({ type:TOGGLE_ERROR, truth })
export const changeName = (name) => ({ type: CHANGE_NAME, name})
export const mountComputer = (data) => ({ type: MOUNT_COMPUTER, data })

/* THUNK */
export const fetchComputerThunkCreator = () => {
    return (dispatch) => {
        apiComputer.fetchComputer()
            .then(data => {
                console.log(data)
                dispatch(mountComputer(data))
            })
    }
}

let initState = {
    name: 'ComputerOne',
    isCorrect: true,
    haveError: 0,
    cpu: [{
        "id": 8,
        "brand": "AMD",
        "socket": "AMD AM4",
        "core_int": "No",
        "core_amd": "Matisse",
        "series": "AMD Ryzen",
        "model": "5 3600X",
        "freq": "3800 Мгц",
        "tech_proc": "7 нм",
        "num_core": "6",
        "cache1": 64,
        "cache2": 1024,
        "tdp": "95 Вт",
        "has_graph": false,
        "image": null
    }],
    mother: [{
        "id": 7,
        "brand": "ASUS",
        "socket": "Socket AM4",
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
        "pcie4": 0,
        "pcie2": "",
        "sata_cnt": 6,
        "msata_cnt": 1,
        "m2_cnt": 1,
        "has_NVMe": true,
        "port": "1x PS/22x USB 2.01x RJ-451x HDMI1x DVI-D1x VGA (D-Sub)3x Audio jack4 x USB 3.2 Gen 11 x USB 3.2 Gen 2",
        "bios": "UEFI AMI BIOS, 256 Мбит"
    }],
    hdd: [{
        "id": 1,
        "brand": "Seagate",
        "model": "ST1000DM010",
        "form_factor": "3.5",
        "memory": "1 Tb",
        "buffer": "64",
        "freq": "7200",
        "propusk_sposob": "6 Гбит/сек",
        "power": "SATA"
    }],
    ram: [{
        "id": 3,
        "brand": "Kingston",
        "model": "HX424C15FB3/8",
        "type_memory": "DDR4",
        "memory": "8Gb",
        "work_freq": "2400",
        "timing": "15-15-15",
        "latency": "CL15",
        "form_factor": 115
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
        "form_factor": 115
    }],
    power: [{
        "id": 2,
        "brand": "FSP",
        "model": "QD500 85+",
        "power_all": "500 Вт",
        "PFC": "Активный",
        "int_for_mother": "24+4+4 pin",
        "molex": "2 шт",
        "sata": "4 шт",
        "fdd": "2 шт",
        "form_factor": 118
    }],
    video: [{
        "id": 1,
        "brand": "Palit",
        "model": "StormX",
        "tech_proc": "14 нм",
        "series": "GeForce GTX 1xx0",
        "graph_proc": "GeForce GTX 1050 Ti",
        "freq_proc": "1290",
        "threading": "768",
        "type_memory": "GDDR5",
        "size_shina_video": "128 Bit",
        "freq_videomemory": "7000",
        "api": "DirectX 12, OpenGL 4.5",
        "connector": "PCI-E 16x 3.0",
        "port": "HDMIDisplayPortDVI-D",
        "added_power": "0 (нет)",
        "power": "300 Вт"
    }],
    ssd: [{
        "id": 3,
        "brand": "Intel",
        "form_factor": "M.2",
        "model": "SSDSCKKW128G8X1959549",
        "type_mem": "TLC",
        "memory": "128 Gb",
        "speed_read": "550",
        "speed_write": "440",
        "interface": "SATA-III",
        "propusk_sposob": "6 Гбит/с",
        "power_in": "От M.2 PCI-Express Gen3 x4"
    }],
    remainMother: 0,
    remainVideo: 1,
    remainPower: 0,
    remainCpu: 1,
    remainDdr3: 0,
    remainDdr3L: 0,
    remainDdr4: 2,
    remainPcie2: 0,
    remainPcie4: 0,
    remainPcie16: 0,
    remainM2: 1,
    remainSata: 4,
    remainMSata: 1,
}