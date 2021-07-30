
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

let initState = {
    name: 'asdasdasd',
    cpu: [],
    mother: [],
    hdd: [],
    ssd: [],
    ram: [],
    power: [],
    video: [],
    cntMother: 0,
    cntVideo: 0,
    cntPower: 0,
    isCorrect: true,
    cntCpu: {
        cnt: 0,
        socket: ""
    },
    cntHdd: 0,
    cntSsd: 0,
    cntRam: {
        ddr3: 0,
        ddr3l: 0,
        ddr4: 0
    },
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