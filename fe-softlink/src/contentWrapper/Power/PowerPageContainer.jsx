import React from 'react';
import {connect} from 'react-redux'
import {setData, getHardPageThunkCreator, toggleFetch} from '../../Redux/hardPageReducer'
import {updateCabinetAC, getCabinetThunkCreator, cabinetIsUpdateThunkCreator} from '../../Redux/cabinetReducer'
import Preloader from '../../Preloader/Preloader'
import { apiPower } from '../../apiDAL/DAL';
import PowerPage from './PowerPage'


class PowerContainer extends React.Component {
    
    componentDidMount() {
        console.log("Компонента павер mount")
        this.props.getHardPageThunkCreator(0, apiPower)
    }

    getPageData = (page) => {
        console.log("Page павер click")
        this.props.getHardPageThunkCreator(page, apiPower)
    }


    render() {
        return(
            <>
			{this.props.stateHard.isFetching ? <Preloader /> : 
            <PowerPage {...this.props}
            getPageData = {this.getPageData}
            />} 
            </>
        )
    }
}


let mapStateToProps = (state) => {
    return{
        stateHard: state.pageHard,
		stateBugHard: state.pageCabinet.bag.powersupply,
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
})(PowerContainer)