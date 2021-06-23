import React from 'react';
import HddPage from './HddPage'
import {connect} from 'react-redux'
import {setData, getHardPageThunkCreator} from '../../Redux/hardPageReducer'
import {updateCabinetAC} from '../../Redux/cabinetReducer'
import './HddPage.css'
import Preloader from '../../Preloader/Preloader'

class HddPageContainer extends React.Component {
	componentDidMount() { this.props.getHardPageThunkCreator() 	}
	getPageData = (page) => { this.props.getHardPageThunkCreator(page) 	}
	updateCabinet = (bol) => {
		this.props.updateCabinetAC(bol)
	}
	render() {
		return (
			<>
			{this.props.stateHard.isFetching ? <Preloader /> : 
			<HddPage {...this.props} 
			getPageData = {this.getPageData}
			updateCabinet = {this.updateCabinet}
			 />
			}
			</>
		);
	}
}


let mapStateToProps = (state) => { 
	return {
		stateHard: state.pageHard,
		stateBugHard: state.pageCabinet.bag.hdd,
		stateBugIdHard: state.pageCabinet.itemIdBugHdd
	}
}

export default connect(mapStateToProps, {
	setData,
	getHardPageThunkCreator,
	updateCabinetAC
})(HddPageContainer) 