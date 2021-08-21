
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
export const CHANGE_NAME = 'CHANGE_NAME'
export const MOUNT_COMPUTER = 'MOUNT_COMPUTER'

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

const computerReducer = (state=initState, action) => {
    switch(action.type) {
        case ADD_ITEM_IN_COMPUTER:
            let cnt
            switch(action.typeItem) {
                case MOTHER:
                    cnt = state.cntMother - 1
                    return {
                        ...state,
                        mother: [...state.mother, action.data],
                        cntMother: cnt
                    }
                case CPU:
                    cnt = state.cntCpu - 1
                    return {
                        ...state,
                        cpu: [...state.cpu, action.data],
                        cntCpu: cnt
                    }
                case HDD:
                    cnt = state.cntHdd - 1
                    return {
                        ...state,
                        cpu: [...state.hdd, action.data],
                        cntHdd: cnt
                    }
                case SSD:
                    cnt = state.cntSsd - 1
                    return {
                        ...state,
                        cpu: [...state.ssd, action.data],
                        cntSsd: cnt
                    } 
                case VIDEO:
                    cnt = state.cntVideo - 1
                    return {
                        ...state,
                        cpu: [...state.video, action.data],
                        cntVideo: cnt
                    }
                case RAM:
                    cnt = state.cntRam - 1
                    return {
                        ...state,
                        cpu: [...state.ram, action.data],
                        cntRam: cnt
                    }
                case POWER:
                    cnt = state.cntPower - 1
                    return {
                        ...state,
                        cpu: [...state.power, action.data],
                        cntPower: cnt
                    }
            }
        case ERASE_ITEM_ON_COMPUTER:
            switch(action.typeItem){
                case MOTHER:
                    cnt = state.cntMother + 1
                    return {
                        ...state,
                        cpu: state.mother.filter(item => item.id != action.id),
                        cntMother: cnt
                    }
                case CPU:
                    cnt = state.cntCpu + 1
                    return {
                        ...state,
                        cpu: state.cpu.filter(item => item.id != action.id),
                        cntCpu: cnt
                    }
                case HDD:
                    cnt = state.cntHdd + 1
                    return {
                        ...state,
                        cpu: state.hdd.filter(item => item.id != action.id),
                        cntHdd: cnt
                    }
                case SSD:
                    cnt = state.cntSsd + 1
                    return {
                        ...state,
                        cpu: state.ssd.filter(item => item.id != action.id),
                        cntSsd: cnt
                    }
                case RAM:
                    cnt = state.cntRam + 1
                    return {
                        ...state,
                        cpu: state.ram.filter(item => item.id != action.id),
                        cntRam: cnt
                    }
                case VIDEO:
                    cnt = state.cntVideo + 1
                    return {
                        ...state,
                        cpu: state.video.filter(item => item.id != action.id),
                        cntVideo: cnt
                    }
                case POWER:
                    cnt = state.cntPower + 1
                    return {
                        ...state,
                        cpu: state.power.filter(item => item.id != action.id),
                        cntPower: cnt
                    }
            }
        case MOUNT_COMPUTER:
            let cMother = action.data.mother
            let cntM
            if (cMother.length > 0){
                console.log('есть мать')
            } else {
                console.log('нету мати')
            }
            //let cPower = action.data.power_supply ? 0 : 1
            let sock = action.data.mother[0].socket
            let cHdd = parseInt(action.data.mother[0].sata_cnt, 10)
            return {
                ...state,
                name: action.data.name,
                cpu: action.data.cpu,
                mother: action.data.mother,
                hdd: [...action.data.hdd],
                ssd: [...action.data.ssd],
                ram: [...action.data.ram],
                power: [...action.data.power_supply],
                video: [...action.data.video],
                cntMother: cntM,
                cntCpu: {
                    cnt: 0,
                    socket: sock
                },
                cntHdd: cHdd,
                cntSsd: 0,
                cntRam: {
                    ddr3: 0,
                    ddr3l: 0,
                    ddr4: 0
                },
                cntVideo: 0,
                cntPower: 0,
            }
        case TOGGLE_CORRECT:
            return {
                ...state,
                isCorrect: action.truth
            }
        default:
            return state
    }
}
export default computerReducer

export const addItemInComputer = (data, typeItem) => ({ type: ADD_ITEM_IN_COMPUTER, data, typeItem })
export const eraseItemInComputer = (id, typeItem) => ({ type: ERASE_ITEM_ON_COMPUTER, id, typeItem })
export const toggleCorrect = (truth) => ({ type:TOGGLE_CORRECT, truth })
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
        "ddr3": "",
        "ddr3L": "",
        "ddr4": "4",
        "pcie16": "1",
        "pcie4": "",
        "pcie2": "",
        "sata_cnt": 6,
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
    remainMother: 0,
    remainVideo: 0,
    remainPower: 0,
    remainCpu: 0,
    remainDdr3: 0,
    remainDdr3L: 0,
    remainDdr4: 2,
    remainPcie2: 0,
    remainPcie4: 0,
    remainPcie16: 0,
    remainM2: 1,
    remainSata: 4,
}