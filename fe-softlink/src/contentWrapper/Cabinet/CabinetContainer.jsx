import React from 'react'
import Cabinet from './Cabinet'
import { connect } from 'react-redux';
import './cabinet.css'
import {getCabinetThunkCreator, getStateCabinetAC, updateCabinetAC} from '../../Redux/cabinetReducer'
import {withCorrectCabinet} from '../../hok/withCorrectCabinet'
import {addItemInComputer, eraseItemInComputer} from '../../Redux/computerReducer'
  

class ContainerComponent extends React.Component{
    render() {
        console.log("cabinet container")
        return (
            <Cabinet {...this.props}     />
        )
    }
}

let mapStateToProps = (state) => {
    return {
        stateComp: state.computer,
        stateCabinet: state.pageCabinet,
        stateUser: state.pageUser,
    }
}

export default connect(mapStateToProps, {
    getCabinetThunkCreator,
    getStateCabinetAC,
    updateCabinetAC,
    addItemInComputer,
    eraseItemInComputer
})(ContainerComponent)