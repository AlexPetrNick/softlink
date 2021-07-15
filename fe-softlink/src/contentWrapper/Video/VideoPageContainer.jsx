import React from 'react';
import {connect} from 'react-redux'
import {setData, getHardPageThunkCreator, toggleFetch} from '../../Redux/hardPageReducer'
import {updateCabinetAC, getCabinetThunkCreator, cabinetIsUpdateThunkCreator} from '../../Redux/cabinetReducer'
import Preloader from '../../Preloader/Preloader'
import { apiVideo } from '../../apiDAL/DAL'
import VideoPage from './VideoPage'

class VideoCardContainer extends React.Component {
    
    componentDidMount() {
        console.log("Компонента видео mount")
        this.props.getHardPageThunkCreator(0, apiVideo)
    }

    getPageData = (page) => {
        console.log("Page видео click")
        this.props.getHardPageThunkCreator(page, apiVideo)
    }


    render() {
        return(
            <>
			{this.props.stateHard.isFetching ? <Preloader /> : 
            <VideoPage {...this.props} 
            getPageData = {this.getPageData}
            />}
            </>
        )
    }
}


let mapStateToProps = (state) => {
    return{
        stateHard: state.pageHard,
		stateBugHard: state.pageCabinet.bag.video,
		stateup: state.pageCabinet.updateCabinet
    }
}

export default connect(mapStateToProps, {
    getHardPageThunkCreator,
    setData,
	updateCabinetAC,
	toggleFetch,
	getCabinetThunkCreator,
	cabinetIsUpdateThunkCreator
})(VideoCardContainer)