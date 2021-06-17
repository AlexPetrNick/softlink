import React from 'react';
import HddPage from './HddPage'
import {connect} from 'react-redux'
import {getItemInBugHardHDD, eraseItemInBugHardHDD} from '../../Redux/cabinetReducer'
import {setData, getHardPageThunkCreator} from '../../Redux/hardPageReducer'
import './HddPage.css'
import {apiHdd} from '../../apiDAL/DAL'
import Preloader from '../../Preloader/Preloader'

class HddPageContainer extends React.Component {
	componentDidMount() { 
		this.props.getHardPageThunkCreator()
	}

	getItemHard = (item) => {
		this.props.getItemInBugHardHDD(item)
	}

	eraseItemHard = (id) => {
		this.props.eraseItemInBugHardHDD(id)
	}

	getPageData = (page) => {
		this.props.getHardPageThunkCreator(page)
	}


	render() {
		return (
			<>
			{this.props.stateHard.isFetching ? <Preloader /> : 
			<HddPage {...this.props} 
			getPageData = {this.getPageData}
			getItem = {this.getItemHard}
			eraseItemHard = {this.eraseItemHard}
			 />
			}
			</>
		);
	}
}





let mapStateToProps = (state) => { 
	return {
		stateHard: state.pageHard,
		stateUserToken: state.pageUser.token,
		stateBugHard: state.pageCabinet.bag.hard,
		stateBugIdHard: state.pageCabinet.itemIdBugHdd
	}
}

export default connect(mapStateToProps, {
	getItemInBugHardHDD,
	setData,
	getHardPageThunkCreator,
	eraseItemInBugHardHDD
})(HddPageContainer) 