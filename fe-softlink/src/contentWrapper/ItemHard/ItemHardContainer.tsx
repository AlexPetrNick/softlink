import React from 'react';
import ItemHard from './ItemHard'
import {connect} from 'react-redux'
import {
	setDataCabinet,
	getHardPageThunkCreator,
	setParams,
	setParamsJson,
	addDictParams,
	eraseDictParams,
	InitStateTypeHard, DataHardType, GetHardPageThunkCreatorType, FilterFieldAllType, FilterFieldMotherType
} from '../../Redux/hardPageReducer'
import {
	updateCabinetAC,
	cabinetIsUpdateThunkCreator,
	cabinetAddItem,
	cabinetEraseItem,
	InitTypeCabinet, BagType, CabinetAddItemType, CabinetEraseItemType
} from '../../Redux/cabinetReducer'
import Preloader from '../../Preloader/Preloader'
import {apiCpu, apiMother, apiPower, apiRam, apiSsd, apiVideo} from '../../apiDAL/DAL'
import {filterFieldSsd, filterFieldPower, filterFieldVideo, filterFieldRam, filterFieldHdd, filterFieldMother, filterFieldCpu} from '../../Redux/hardPageReducer'
import {AppStateType} from "../../Redux/reduxStore";

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

interface IItemHardContainer extends IMapAndPropsToProps, IDispatchProps {}

class ItemHardContainer extends React.Component<IItemHardContainer> {
	componentDidMount() {
		console.log('itemhard did mount')
		switch(this.props.itemType) {
			case (1): {
				return this.props.getHardPageThunkCreator(0, apiMother)
			}
			case (3): {
				return this.props.getHardPageThunkCreator(0, apiRam)
			}
			case (4): {
				return this.props.getHardPageThunkCreator(0, apiVideo)
			}
			case (5): {
				return this.props.getHardPageThunkCreator(0, apiPower)
			}	
			case (6): {
				return this.props.getHardPageThunkCreator(0, apiSsd)
			}
			case (2): {
				return this.props.getHardPageThunkCreator(0, apiCpu)
			}
			default:
				this.props.getHardPageThunkCreator(0)
		}
	}
	getPageData = (page:number, params=this.props.stateHard.params) => {
		switch(this.props.itemType) {
			case (1): {
				return this.props.getHardPageThunkCreator(page, apiMother, params=params)
			}
			case (3): {
				return this.props.getHardPageThunkCreator(page, apiRam, params=params)
			}
			case (4): {
				return this.props.getHardPageThunkCreator(page, apiVideo, params=params)
			}
			case (5): {
				return this.props.getHardPageThunkCreator(page, apiPower, params=params)
			}	
			case (6): {
				return this.props.getHardPageThunkCreator(page, apiSsd, params=params)
			}
			case (2): {
				return this.props.getHardPageThunkCreator(page, apiCpu, params=params)
			}
			default:
				this.props.getHardPageThunkCreator(page, params=params)
	}
	}

	setParams = (string:string):void => {
		this.props.setParams(string)
	}

	render() {
		return (
			<>
			{this.props.stateHard.isFetching ? <Preloader /> : 
			<ItemHard {...this.props}
			getPageData = {this.getPageData}
			setParams = {this.setParams}
			addDictParams = {this.props.addDictParams}
			eraseDictParams = {this.props.eraseDictParams}
			cabinetAddItem = {this.props.cabinetAddItem}
			cabinetEraseItem = {this.props.cabinetEraseItem}
			filterField = {this.props.filterField}
			 />
			}
			</>
		);
	}
}


interface IMapStateToProps {
	stateHard: InitStateTypeHard
	stateHardFilterJson: object,
	stateBugHard: BagType,
	filterField: FilterFieldAllType
}
interface IPropsMapToProps {
	itemType: number
}
export interface IMapAndPropsToProps extends IMapStateToProps, IPropsMapToProps {}
//TODO: Сделать нормальную проверку после уточнения санков
export interface IDispatchProps {
	setDataCabinet: (data:Array<DataHardType>) => void
	getHardPageThunkCreator: any
	updateCabinetAC: (bol:boolean) => void
	cabinetIsUpdateThunkCreator: any
	cabinetAddItem: CabinetAddItemType
	cabinetEraseItem: CabinetEraseItemType
	setParams: (params:string) => void,
	setParamsJson: (json:any) => void ,
	addDictParams: (tag:string, value:string) => void
	eraseDictParams: (tag:string, value:string) => void
}

let mapStateToProps = (state:AppStateType, props:IPropsMapToProps):IMapAndPropsToProps => {
	return {
		filterField: state.pageHard.filterFieldAll,
		itemType: props.itemType,
		stateHard: state.pageHard,
		stateHardFilterJson: state.pageHard.paramsJson,
		stateBugHard: state.pageCabinet.bag
	}
}

export default connect(mapStateToProps, {
	setDataCabinet,
	getHardPageThunkCreator,
	updateCabinetAC,
	cabinetIsUpdateThunkCreator,
	cabinetAddItem,
	cabinetEraseItem,
	setParams,
	setParamsJson,
	addDictParams,
	eraseDictParams
} as IDispatchProps)(ItemHardContainer)