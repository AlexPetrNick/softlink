import React, {Component} from 'react'
import { connect } from 'react-redux';
import CpuPage from './CpuPage'
import {setData, getHardPageThunkCreator, toggleFetch} from '../../Redux/hardPageReducer'
import {updateCabinetAC, getCabinetThunkCreator, cabinetIsUpdateThunkCreator} from '../../Redux/cabinetReducer'
import {apiCpu} from '../../apiDAL/DAL'
import Preloader from '../../Preloader/Preloader'

class CpuPageContainer extends Component {
	componentDidMount() {
		this.props.getHardPageThunkCreator(0, apiCpu)
		
	}

	getPageData = (page) => {
		this.props.getHardPageThunkCreator(page, apiCpu)
	}


	render() {
		return (
			<>
			{this.props.stateHard.isFetching ? <Preloader /> : 
			<CpuPage {...this.props} 
			getPageData = {this.getHardOnPage}
			 />
			}
			</>
		)
	}
}

let mapStateToProps = (state) => {
	return {
		stateHard: state.pageHard,
		stateBugHard: state.pageCabinet.bag.cpu,
		stateup: state.pageCabinet.updateCabinet
	}
}

export default connect(mapStateToProps, {
	setData,
	getHardPageThunkCreator,
	updateCabinetAC,
	toggleFetch,
	getCabinetThunkCreator,
	cabinetIsUpdateThunkCreator
})(CpuPageContainer)