import {updateCabinetAC} from '../Redux/cabinetReducer'
import {apiCabinet} from '../apiDAL/DAL'

export const CpuFunc = {
    erase: (id:number) => {
        apiCabinet.eraseItemCpu(id)
    },
    add: (id:number) => {
        apiCabinet.addItemCpu(id)
    }
}

export const HddFunc = {
    erase: (id:number) => {
        apiCabinet.eraseItemCpu(id)
    },
    add: (id:number) => {
        apiCabinet.addItemCpu(id)
    }
}