import {apiHdd} from '../apiDAL/DAL'
import {
    ItemCpuType,
    ItemHddType,
    ItemMotherType,
    ItemPowerType,
    ItemRamType,
    ItemSsdType,
    ItemVideoType
} from "./computerReducer";

export const SET_PAGE_META = 'SET_PAGE_META'
export const SET_DATA_HARD = 'SET-DATA-HARD'
export const SET_META_REPEAT = 'SET-META-REPEAT'
export const TOGGLE_FETCH = 'TOGGLE-FETCH'
export const PAGE_UPDATE = 'PAGE-UPDATE'
export const SET_PARAMS_JSON = 'SET-PARAMS-JSON'
export const SET_PARAMS = 'SET-PARAMS'
export const ADD_DICT_PARAMS = 'ADD-DICT-PARAMS'
export const ERASE_DICT_PARAMS = 'ERASE-DICT-PARAMS'

export type FilterFieldAllType = {
    form_factor_ssd?: Array<string>,
    type_mem_ssd?: Array<string>,
    memory_ssd?: Array<string>,
    interface_ssd?: Array<string>,
    power_all_power?: Array<string>,
    PFC_power?:  Array<string>,
    type_memory_video?:  Array<string>,
    size_shina_video?:  Array<string>,
    power_video?:  Array<string>,
    type_memory_ram?:  Array<string>,
    memory_ram?: Array<string>,
    work_freq_ram?:  Array<string>,
    form_factor_ram?:  Array<string>,
    memory_hdd?:  Array<string>,
    buffer_hdd?:  Array<string>,
    power_hdd?: Array<string>,
    ddr4_mother?:  Array<string>,
    pcie16_mother?: Array<string>,
    chipsetI_mother?: Array<string>,
    chipsetA_mother?: Array<string>,
    socket_mother?: Array<string>,
    m2_cnt_mother?: Array<string>,
    sata_cnt_mother?: Array<string>,
    msata_cnt_mother?: Array<string>,
    socket_cpu?: Array<string>,
    freq_cpu?:  Array<string>,
    core_int_cpu?: Array<string>,
    core_amd_cpu?: Array<string>,
    tech_proc_cpu?: Array<string>,
    num_core_cpu?: Array<string>,
    has_graph_cpu?: Array<string>
}
export const filterFieldSsd = ['6','form_factor_ssd','type_mem_ssd','memory_ssd','interface_ssd'] as Array<string>
export const filterFieldPower = ['5','power_all_power','PFC_power'] as Array<string>
export const filterFieldVideo = ['4','type_memory_video','size_shina_video','power_video']    as Array<string>
export const filterFieldRam = ['3','type_memory_ram','memory_ram','work_freq_ram','form_factor_ram'] as Array<string>
export const filterFieldHdd = ['7','memory_hdd','buffer_hdd','freq_hdd','power_hdd'] as Array<string>
export const filterFieldMother = ['1','ddr4_mother','pcie16_mother','chipsetI_mother','chipsetA_mother','socket_mother','m2_cnt_mother','sata_cnt_mother','msata_cnt_mother'] as Array<string>
export const filterFieldCpu = ['2','socket_cpu','freq_cpu','core_int_cpu','core_amd_cpu','tech_proc_cpu','num_core_cpu','has_graph_cpu'] as Array<string>

export type FilterFieldSsdType = typeof filterFieldSsd
export type FilterFieldPowerType = typeof filterFieldPower
export type FilterFieldVideoType = typeof filterFieldVideo
export type FilterFieldRamType = typeof filterFieldRam
export type FilterFieldHddType = typeof filterFieldHdd
export type FilterFieldMotherType = typeof filterFieldMother
export type FilterFieldCpuType = typeof filterFieldCpu





let initState = {
    filterFieldAll: {
        form_factor_ssd: ['Форм-фактор', 'form_factor', '123', '124', '125', '126', '127', '128' ] as Array<string>,
        type_mem_ssd: ['Тип памяти', 'type_mem', '3D MLC', '3D NAND', '3D NAND TLC', '3D QLC NAND', '3D XPoint', 'MLC', 'TLC' ] as Array<string>,
        memory_ssd: [ 'Память', 'memory','1 Tb', '120 Gb', '128 Gb', '2 Tb', '240 Gb', '256 Gb', '3.2 Tb', '3.84 Tb', '375 Gb','4 Tb', '480 Gb', '500 Gb', '512 Gb', '6.4 Tb', '7.68 Tb', '960 Gb'] as Array<string>,
        interface_ssd: ['Подлюкчение', 'interface','M2','PCI-E 3.0 x4','SATA-III','mSATA'] as Array<string>,
        power_all_power: ['Общее питание', 'power_all', '160','200','250','300','350','400','430','450','500','550','600','650','700','750','800'] as Array<string>,
        PFC_power: ['Коррекция фактора мощности', 'PFC', 'Активный','Пассивный','н/д','нет'] as Array<string>,
        type_memory_video: ['Тип памяти','type_memory','GDDR3','GDDR4','GDDR5','GDDR5X','GDDR6','HBM2'] as Array<string>,
        size_shina_video: ['Видео шина','size_shina_video','128 Bit','160 Bit','192 Bit','256 Bit','384 Bit','4096 Bit','64 Bit'] as Array<string>,
        power_video: ['Потребляемая мощность','power','150','200','230','250'] as Array<string>,
        type_memory_ram: ['Тип памяти','type_memory','DDR3','DDR4','DDR3L'] as Array<string>,
        memory_ram: ['Память','memory','4Gb','8Gb'] as Array<string>,
        work_freq_ram: ['Рабочая частота','work_freq','1600','2133','2400','2666'] as Array<string>,
        form_factor_ram: ['Форм-фактор','form_factor','DIMM','SO-DIMM'] as Array<string>,
        memory_hdd: ['Память','memory','1 Tb','10 Tb','12 Tb','14 Tb','16 Tb','18 Tb','2 Tb','3 Tb','4 Tb','500 Gb','6 Tb','8 Tb'] as Array<string>,
        buffer_hdd: ['Буфер','buffer','128','256','32','512','64'] as Array<string>,
        freq_hdd: ['Рабочая частота','freq','5400','5700','5900','7200'] as Array<string>,
        power_hdd: ['Мощность','power','20','25','30'] as Array<string>,
        ddr4_mother: ['DDR4','ddr4','DDR3','DDR4','DDR3L'] as Array<string>,
        pcie16_mother: ['PCI-E 16','pcie16','1','2','3','4'] as Array<string>,
        chipsetI_mother: ['Чипсет Intel','chipsetI','Z490','B365','H310','B360','B460','H410','Z590','X299','Q370','Z390','H370','915G','J1800','G41'] as Array<string>,
        chipsetA_mother: ['Чипсет AMD','chipsetA','AMD A520','AMD B450','AMD B550','AMD A320','AMD B350','AMD X399','AMD X570'] as Array<string>,
        socket_mother: ['Сокет','socket','FM2+','AM4','LGA 1151 v2','LGA 1151','LGA 1150','LGA 2066','LGA 2011','LGA 1200'] as Array<string>,
        m2_cnt_mother: ['М2','m2_cnt','0','1','2','3'] as Array<string>,
        sata_cnt_mother: ['Количество SATA','sata_cnt','2','3','4','5','6'] as Array<string>,
        msata_cnt_mother: ['Количество mSATA','msata_cnt','0','1'] as Array<string>,
        socket_cpu: ['Сокет','socket','FM2+','AM4','LGA 1151 v2','LGA 1151','LGA 1150','LGA 2066','LGA 2011','LGA 1200'] as Array<string>,
        freq_cpu: ['Частота','freq','1','2','3','4'] as Array<string>,
        core_int_cpu: ['Ядро Intel','core_int','Comet Lake','Coffee Lake','Cascade Lake','Skylake','Coffee Lake Refresh','Haswell','Kaby Lake','Sandy Bridge-EP'] as Array<string>,
        core_amd_cpu: ['Ядро AMD','core_amd','Carrizo','Matisse','Godavari','Zen+','Summit Ridge','Vermeer','Zen','Zen 2','Pinnacle Ridge','Picasso'] as Array<string>,
        tech_proc_cpu: ['Техпроцесс','tech_proc','12 нм','14 нм','22 нм','28 нм','28 нм','32 нм','7 нм'] as Array<string>,
        num_core_cpu: ['Количество ядер','num_core','10','12','14','16','18','2','4','6','8'] as Array<string>,
        has_graph_cpu: ['Графическое ядро','has_graph','True','False'] as Array<string>
    } as FilterFieldAllType,
    countOnPage: 1 as number,
    perPage: 1 as number,
    urlNextPage: "" as string,
    urlPrevPage: "" as string,
    currentPage: 1 as number,
    data: [] as Array<DataHardType>,
    isFetching: false as boolean,
    pageUpdate: false as boolean,
    paramsJson: {} as any,
    params: '' as string
}


export type InitStateTypeHard = typeof initState

let keyInDict = (dict:any) => {
    let listKey = ''
    for (let word in dict) {
        listKey += word
    }
    return listKey
}
type ActionType = SetMetaRepeatType | SetPageMetaType | SetDataType | ToggleFetchType | PageUpdateType | SetParamsType | SetParamsJsonType | AddDictParamsType | EraseDictParamsType

const hardPageReducer = (state:InitStateTypeHard=initState, action:ActionType):InitStateTypeHard => {
    switch(action.type){
        case SET_PAGE_META:
            return{
                ...state,
                countOnPage: action.count,
                perPage: action.perPage,
                urlNextPage: action.urlNextPage,
                urlPrevPage: action.urlPrevPage,
                currentPage: action.currentPage
            }
        case SET_DATA_HARD:
            console.log('after click hard i do this')
            return {
                ...state,
                data: action.data.map(a => a)
            }
        case SET_META_REPEAT:
            return {
                ...state,
                urlNextPage: action.next,
                urlPrevPage: action.prev,
                currentPage: action.current
            }
        case TOGGLE_FETCH: {
            return{
                ...state,
                isFetching: action.isLoad
            }
        }
        case PAGE_UPDATE: {
            return{
                ...state,
                pageUpdate: action.update
            }
        }
        case SET_PARAMS: {
            return {
                ...state,
                params: action.params
            }
        }
        case SET_PARAMS_JSON: {
            let json = {}
            for (let key in action.json) {
                // @ts-ignore
                json[key] = []
            }
            console.log(json)
            return {
                ...state,
                paramsJson: {...json}
            }
        }
        case ADD_DICT_PARAMS: {
            let tag = action.tag
            let arrayWord = keyInDict(state.paramsJson)
            if (arrayWord.indexOf(tag) >= 0) {
                state.paramsJson[tag].push(action.value)
            } else {
                state.paramsJson[action.tag] = [action.value]
            }
            return {
                ...state,
            }
        }
        case ERASE_DICT_PARAMS: {
            let tag = action.tag
            let corrFilter = state.paramsJson[tag].filter((i: string) => i != action.value)
            state.paramsJson[tag] = [...corrFilter]
            return {
                ...state
            }
        }
        default:
            return state
    }
}

export default hardPageReducer

type SetMetaRepeatType = {
    type: typeof SET_META_REPEAT
    next:string
    prev:string
    current:number
}
export const setMetaRepeat = (next:string, prev:string, current:number):SetMetaRepeatType => ({ type: SET_META_REPEAT, next, prev, current })
type SetPageMetaType = {
    type: typeof SET_PAGE_META,
    count:number,
    perPage:number,
    urlNextPage:string,
    urlPrevPage:string,
    currentPage:number
}
export const setPageMeta = (count:number,
                            perPage:number,
                            urlNextPage:string,
                            urlPrevPage:string,
                            currentPage:number):SetPageMetaType => ({ type:SET_PAGE_META, count, perPage, urlNextPage, urlPrevPage, currentPage })
export type DataHardType = ItemHddType | ItemPowerType | ItemRamType | ItemSsdType | ItemMotherType | ItemVideoType | ItemCpuType

type SetDataType = {
    type: typeof SET_DATA_HARD,
    data: Array<DataHardType>
}
export const setDataCabinet = (data:Array<DataHardType>):SetDataType => ({ type: SET_DATA_HARD, data })

type ToggleFetchType = {
    type: typeof TOGGLE_FETCH,
    isLoad: boolean
}
export const toggleFetch = (isLoad:boolean):ToggleFetchType => ({ type: TOGGLE_FETCH, isLoad })
type PageUpdateType = {
    type: typeof PAGE_UPDATE
    update: boolean
}
export const pageUpdate = (update:boolean):PageUpdateType => ({ type: PAGE_UPDATE, update })
type SetParamsType = {
    type: typeof SET_PARAMS,
    params: string
}
export const setParams = (params:string):SetParamsType => ({ type: SET_PARAMS, params })
type SetParamsJsonType = {
    type: typeof SET_PARAMS_JSON,
    json: any
}
export const setParamsJson = (json:any):SetParamsJsonType => ({ type: SET_PARAMS_JSON, json })
type AddDictParamsType = {
    type: typeof ADD_DICT_PARAMS,
    tag:string,
    value:string
}
export const addDictParams = (tag:string, value:string):AddDictParamsType => ({ type: ADD_DICT_PARAMS, tag, value })
type EraseDictParamsType = {
    type: typeof ERASE_DICT_PARAMS,
    tag:string,
    value:string
}
export const eraseDictParams = (tag:string, value:string):EraseDictParamsType => ({ type: ERASE_DICT_PARAMS, tag, value })

/* THUNK */

export const getHardPageThunkCreator = (page=0, hard=apiHdd, params:string) => {
    return (dispatch:any) => {

        dispatch(toggleFetch(true))
        if (page) {
            hard.fetchOnClick(page, params)
            .then(data => {
                console.log(data)
                dispatch(setPageMeta(data.count, data.per_page, data.links.next, data.links.previous, data.current_page))
                dispatch(setDataCabinet(data.results))
                dispatch(toggleFetch(false))
            })
        } else {
            hard.fetchOnMount()
            .then(data => {
                console.log(data)
                dispatch(setPageMeta(data.count, data.per_page, data.links.next, data.links.previous, data.current_page))
                dispatch(setDataCabinet(data.results))
                dispatch(toggleFetch(false))
            })
        }
    }
}

export type GetHardPageThunkCreatorType = typeof getHardPageThunkCreator