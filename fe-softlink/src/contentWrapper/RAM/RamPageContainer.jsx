import React from 'react';
import {connect} from 'react-redux';
import RamPage from './RamPage';
import { getHardPageThunkCreator } from '../../Redux/hardPageReducer';
import { apiRam } from '../../apiDAL/DAL';

class RamPageContainer extends React.Component {
	componentDidMount(){
		console.log("component ram mount")
		this.props.getHardPageThunkCreator(0, apiRam)
	}

	getPageData = (page) => {
		console.log("click on page ram")
		this.props.getHardPageThunkCreator(page, apiRam)
	}

	render() {
		return (
			<RamPage {...this.props} 
			getPageData = {this.getPageData}
			/>
		)
	}		
}

let mapStateToProps = (state) => { 
	return {						
		stateHard: state.pageHard,
		stateBugHard: state.pageCabinet.bag.ram,
		stateup: state.pageCabinet.updateCabinet
	}
}

export default connect(mapStateToProps, {
	getHardPageThunkCreator,
})(RamPageContainer)