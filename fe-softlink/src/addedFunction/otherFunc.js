import {updateCabinetAC} from '../Redux/cabinetReducer'
import {apiCabinet} from '../apiDAL/DAL'

export const CpuFunc = {
    erase: (id) => {
        apiCabinet.eraseItemCpu(id)
    },
    add: (id) => {
        apiCabinet.addItemCpu(id)
    }
}

export const HddFunc = {
    erase: (id) => {
        apiCabinet.eraseItemCpu(id)
    },
    add: (id) => {
        apiCabinet.addItemCpu(id)
    }
}