import React from 'react';
import MotherPage from './MotherPage'
import {connect} from 'react-redux'
import {getItemInBugHardMother, eraseItemInBugHardMother} from '../../Redux/cabinetReducer'
import {setData, getHardPageThunkCreator} from '../../Redux/hardPageReducer'
import {apiMother} from '../../apiDAL/DAL'
import Preloader from '../../Preloader/Preloader'

class MotherPageContainer extends React.Component {
	componentDidMount() { 
		this.props.getHardPageThunkCreator(0, apiMother)
	}

	getItemHard = (item) => {
		this.props.getItemInBugHardMother(item)
	}

	eraseItemHard = (id) => {
		this.props.eraseItemInBugHardMother(id)
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
		stateBugHard: state.pageCabinet.bag.mother,
		stateBugIdHard: state.pageCabinet.itemIdBugMother
	}
}

export default connect(mapStateToProps, {
	setData,
	getHardPageThunkCreator,
	getItemInBugHardMother,
	eraseItemInBugHardMother
})(MotherPageContainer) 