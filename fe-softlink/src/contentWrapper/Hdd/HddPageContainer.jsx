import React from 'react';
import HddPage from './HddPage'
import {connect} from 'react-redux'
import {setData, getHardPageThunkCreator} from '../../Redux/hardPageReducer'
import './HddPage.css'
import Preloader from '../../Preloader/Preloader'

class HddPageContainer extends React.Component {
	componentDidMount() { 
		this.props.getHardPageThunkCreator()
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
	setData,
	getHardPageThunkCreator,
})(HddPageContainer) 