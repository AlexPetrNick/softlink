import React from 'react';
import MotherPage from './MotherPage'
import {connect} from 'react-redux'
import {setData, getHardPageThunkCreator, toggleFetch} from '../../Redux/hardPageReducer'
import {updateCabinetAC, getCabinetThunkCreator, cabinetIsUpdateThunkCreator} from '../../Redux/cabinetReducer'
import Preloader from '../../Preloader/Preloader'
import {apiMother} from '../../apiDAL/DAL'

class MotherPageContainer extends React.Component {
	componentDidMount() { 
		this.props.getHardPageThunkCreator(0, apiMother)
	}

	getPageData = (page) => {
		this.props.getHardPageThunkCreator(page, apiMother)
	}


	render() {
		return (
			<>
			{this.props.stateHard.isFetching ? <Preloader /> : 
			<MotherPage {...this.props} 
			getPageData = {this.getPageData}
			toggleFetch = {this.props.toggleFetch}
			 />
			}
			</>
		);
	}
}





let mapStateToProps = (state) => { 
	return {
		stateHard: state.pageHard,
		stateBugHard: state.pageCabinet.bag.mother,
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
})(MotherPageContainer) 