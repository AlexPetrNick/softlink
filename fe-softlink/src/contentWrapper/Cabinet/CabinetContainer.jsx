import React from 'react'
import Cabinet from './Cabinet'
import { connect } from 'react-redux';
import './cabinet.css'
import {getCabinetThunkCreator, getStateCabinetAC, updateCabinetAC} from '../../Redux/cabinetReducer'
import {withCorrectCabinet} from '../../hok/withCorrectCabinet'
  

class ContainerComponent extends React.Component{


    render() {
        console.log("cabinet container")
        return (
            <Cabinet
                stateCabinet={this.props.stateCabinet}
                stateUser={this.props.stateUser}
            />
        )
    }
}


//let UpdateCabinet = withCorrectCabinet(ContainerComponent)

let mapStateToProps = (state) => {
    return {
        stateCabinet: state.pageCabinet,
        stateUser: state.pageUser,
    }
}

export default connect(mapStateToProps, {
    getCabinetThunkCreator,
    getStateCabinetAC,
    updateCabinetAC
})(ContainerComponent)