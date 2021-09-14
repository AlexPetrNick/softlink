import React from 'react';
import ItemHard from './ItemHard'
import {connect} from 'react-redux'
import {setData, getHardPageThunkCreator, setParams, setParamsJson, addDictParams, eraseDictParams} from '../../Redux/hardPageReducer'
import {updateCabinetAC, cabinetIsUpdateThunkCreator, cabinetAddItem, cabinetEraseItem} from '../../Redux/cabinetReducer'
import Preloader from '../../Preloader/Preloader'
import {apiCpu, apiHdd, apiMother, apiPower, apiRam, apiSsd, apiVideo} from '../../apiDAL/DAL'
import {filterFieldSsd, filterFieldPower, filterFieldVideo, filterFieldRam, filterFieldHdd, filterFieldMother, filterFieldCpu} from '../../Redux/hardPageReducer'

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

class ItemHardContainer extends React.Component {
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
	getPageData = (page, params=this.props.stateHard.params) => {
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

	getFilterItem = () => {
		switch(this.props.itemType) {
			case (1): {
				return filterFieldMother
			}
			case (3): {
				return filterFieldRam
			}
			case (4): {
				return filterFieldVideo
			}
			case (5): {
				return filterFieldPower
			}	
			case (6): {
				return filterFieldSsd
			}
			case (2): {
				return filterFieldCpu
			}
			default:
				return filterFieldHdd
	}
	}

	setParams = (string) => {
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
			filterField = {this.getFilterItem()}
			 />
			}
			</>
		);
	}
}
let mapStateToProps = (state, props) => {
	return {
		stateMotherComputer: state.computer.mother[0],
		typeItem: props.itemType,
		stateHard: state.pageHard,
		stateHardFilterJson: state.pageHard.paramsJson,
		stateBugHard: state.pageCabinet.bag,
	}
}

export default connect(mapStateToProps, {
	setData,
	getHardPageThunkCreator,
	updateCabinetAC,
	cabinetIsUpdateThunkCreator,
	cabinetAddItem,
	cabinetEraseItem,
	setParams,
	setParamsJson,
	addDictParams,
	eraseDictParams
})(ItemHardContainer) 