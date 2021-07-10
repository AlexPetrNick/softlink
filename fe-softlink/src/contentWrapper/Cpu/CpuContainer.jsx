import React, {Component} from 'react'
import { connect } from 'react-redux';
import CpuPage from './CpuPage'
import {getHardPageThunkCreator, setData} from '../../Redux/hardPageReducer'
import {getItemInBugHardCPU, eraseItemInBugHardCPU} from '../../Redux/cabinetReducer'
import {apiCpu} from '../../apiDAL/DAL'
import Preloader from '../../Preloader/Preloader'

class CpuPageContainer extends Component {
	componentDidMount() {
		this.props.getHardPageThunkCreator(0, apiCpu)
		
	}


	render() {
		return (
			<>
			{this.props.stateHard.isFetching ? <Preloader /> : 
			<CpuPage {...this.props} 
			getPageData = {this.getHardOnPage}
			getItem = {this.getItemHard}
			 />
			}
			</>
		)
	}
}

let mapStateToProps = (state) => {
	console.log(state)
	return {
		stateHard: state.pageHard,
		stateUserToken: state.pageUser.token,
		stateBugHard: state.pageCabinet.bag.cpu,
		stateBugIdHard: state.pageCabinet.itemIdBugCpu
	}
}

export default connect(mapStateToProps, {
	getHardPageThunkCreator,
	getItemInBugHardCPU,
	setData,
	eraseItemInBugHardCPU
})(CpuPageContainer)