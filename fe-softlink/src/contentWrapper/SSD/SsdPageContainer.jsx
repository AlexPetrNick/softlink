import React from 'react'
import SsdPage from './SsdPage'
import {connect} from 'react-redux'
import {setData, getHardPageThunkCreator, toggleFetch} from '../../Redux/hardPageReducer'
import {updateCabinetAC, getCabinetThunkCreator, cabinetIsUpdateThunkCreator} from '../../Redux/cabinetReducer'
import { apiSsd } from '../../apiDAL/DAL'
import Preloader from '../../Preloader/Preloader'


class SsdPageContainer extends React.Component {
    componentDidMount(){
        this.props.getHardPageThunkCreator(0, apiSsd)
    }

    getPageData = (page) => {
        this.props.getHardPageThunkCreator(page, apiSsd)
    } 

    render() {
        return(
            <>
                {this.props.stateHard.isFetching ? <Preloader /> : 
                <SsdPage {...this.props}
                getPageData = {this.getPageData}
                />
                }
            </>
        )
    }
}


let mapStateToProps = (state) => {
    return({
        stateHard: state.pageHard,
		stateBugHard: state.pageCabinet.bag.ssd,
		stateup: state.pageCabinet.updateCabinet
    })
}


export default connect(mapStateToProps, {
	setData,
	getHardPageThunkCreator,
	updateCabinetAC,
	toggleFetch,
	getCabinetThunkCreator,
	cabinetIsUpdateThunkCreator
})(SsdPageContainer)