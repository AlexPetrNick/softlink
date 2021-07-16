
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

let initState = {
    user: 1,
    name: 'asdasdasd',
    cpu: [],
    mother: [],
    hdd: [],
    ssd: [],
    ram: [],
    power: [],
    video: [],
    cntMother: 0,
    cntCpu: 0,
    cntHdd: 0,
    cntSsd: 0,
    cntRam: 0,
    cntVideo: 0,
    cntPower: 1,
    isCorrect: true
}

const computerReducer = (state=initState, action) => {
    switch(action.type) {
        case ADD_ITEM_IN_COMPUTER:
            switch(action.typeItem) {
                case MOTHER:
                    let cnt = state.cntMother - 1
                    return {
                        ...state,
                        mother: [...state.mother, action.data],
                        cntMother = cnt
                    }
                case CPU:
                    let cnt = state.cntCpu - 1
                    return {
                        ...state,
                        cpu: [...state.cpu, action.data],
                        cntCpu: cnt
                    }
                case HDD:
                    let cnt = state.cntHdd - 1
                    return {
                        ...state,
                        cpu: [...state.hdd, action.data],
                        cntHdd: cnt
                    }
                case SSD:
                    let cnt = state.cntSsd - 1
                    return {
                        ...state,
                        cpu: [...state.ssd, action.data],
                        cntSsd: cnt
                    } 
                case VIDEO:
                    let cnt = state.cntVideo - 1
                    return {
                        ...state,
                        cpu: [...state.video, action.data],
                        cntVideo: cnt
                    }
                case RAM:
                    let cnt = state.cntRam - 1
                    return {
                        ...state,
                        cpu: [...state.ram, action.data],
                        cntRam: cnt
                    }
                case POWER:
                    let cnt = state.cntPower - 1
                    return {
                        ...state,
                        cpu: [...state.power, action.data],
                        cntPower: cnt
                    }
            }
        case ERASE_ITEM_ON_COMPUTER:
            switch(action.typeItem){
                case MOTHER:
                    let cnt = state.cntMother + 1
                    return {
                        ...state,
                        cpu: state.mother.filter(item => item.id != action.id),
                        cntMother: cnt
                    }
                case CPU:
                    let cnt = state.cntCpu + 1
                    return {
                        ...state,
                        cpu: state.cpu.filter(item => item.id != action.id),
                        cntCpu: cnt
                    }
                case HDD:
                    let cnt = state.cntHdd + 1
                    return {
                        ...state,
                        cpu: state.hdd.filter(item => item.id != action.id),
                        cntHdd: cnt
                    }
                case SSD:
                    let cnt = state.cntSsd + 1
                    return {
                        ...state,
                        cpu: state.ssd.filter(item => item.id != action.id),
                        cntSsd: cnt
                    }
                case RAM:
                    let cnt = state.cntRam + 1
                    return {
                        ...state,
                        cpu: state.ram.filter(item => item.id != action.id),
                        cntRam: cnt
                    }
                case VIDEO:
                    let cnt = state.cntVideo + 1
                    return {
                        ...state,
                        cpu: state.video.filter(item => item.id != action.id),
                        cntVideo: cnt
                    }
                case POWER:
                    let cnt = state.cntPower + 1
                    return {
                        ...state,
                        cpu: state.power.filter(item => item.id != action.id),
                        cntPower: cnt
                    }
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

export const addItemInComputer = (type, data, typeItem) => ({ type: ADD_ITEM_IN_COMPUTER, data, typeItem })
export const eraseItemInComputer = (type, id, typeItem) => ({ type: ERASE_ITEM_ON_COMPUTER, data, typeItem })
export const toggleCorrect = (type, truth) => ({ type:TOGGLE_CORRECT, truth })
export const changeName = (type, name) => ({ type: CHANGE_NAME, name})


export const computerReducer