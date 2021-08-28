import React from 'react';
import ItemHard from './ItemHard'
import {connect} from 'react-redux'
import {setData, getHardPageThunkCreator} from '../../Redux/hardPageReducer'
import {updateCabinetAC, cabinetIsUpdateThunkCreator, cabinetAddItem, cabinetEraseItem} from '../../Redux/cabinetReducer'
import Preloader from '../../Preloader/Preloader'
import {apiHdd, apiMother, apiPower, apiRam, apiSsd, apiVideo} from '../../apiDAL/DAL'

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
			case (7): {
				return this.props.getHardPageThunkCreator(0, apiHdd)
			}
			default:
				this.props.getHardPageThunkCreator(0)
		}
	}
	getPageData = (page) => {
		switch(this.props.itemType) {
			case (1): {
				return this.props.getHardPageThunkCreator(page, apiMother)
			}
			case (3): {
				return this.props.getHardPageThunkCreator(page, apiRam)
			}
			case (4): {
				return this.props.getHardPageThunkCreator(page, apiVideo)
			}
			case (5): {
				return this.props.getHardPageThunkCreator(page, apiPower)
			}	
			case (6): {
				return this.props.getHardPageThunkCreator(page, apiSsd)
			}
			case (7): {
				return this.props.getHardPageThunkCreator(page, apiHdd)
			}
			default:
				this.props.getHardPageThunkCreator(page)
	}
	}
	render() {
		return (
			<>
			{this.props.stateHard.isFetching ? <Preloader /> : 
			<ItemHard {...this.props} 
			getPageData = {this.getPageData}
			cabinetAddItem = {this.props.cabinetAddItem}
			cabinetEraseItem = {this.props.cabinetEraseItem}
			 />
			}
			</>
		);
	}
}
let mapStateToProps = (state, props) => {
	return {
		typeItem: props.itemType,
		stateHard: state.pageHard,
		stateBugHard: state.pageCabinet.bag,
		stateup: state.pageCabinet.updateCabinet
	}
}

export default connect(mapStateToProps, {
	setData,
	getHardPageThunkCreator,
	updateCabinetAC,
	cabinetIsUpdateThunkCreator,
	cabinetAddItem,
	cabinetEraseItem
})(ItemHardContainer) 