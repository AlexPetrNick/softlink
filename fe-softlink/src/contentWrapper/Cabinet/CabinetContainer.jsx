import React from 'react'
import Cabinet from './Cabinet'
import { connect } from 'react-redux';
import './cabinet.css'
import {getStateCabinetAC, updateCabinetAC, cabinetEraseItem} from '../../Redux/cabinetReducer'
import {addItemInComputer, eraseItemInComputer} from '../../Redux/computerReducer'
  

class ContainerComponent extends React.Component{

    componentDidUpdate(){
        console.log("update")
    }

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
    getStateCabinetAC,
    updateCabinetAC,
    addItemInComputer,
    cabinetEraseItem,
    eraseItemInComputer
})(ContainerComponent)