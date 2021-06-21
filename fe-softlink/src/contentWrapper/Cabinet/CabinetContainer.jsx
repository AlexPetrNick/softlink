import React from 'react'
import Cabinet from './Cabinet'
import { connect } from 'react-redux';
import './cabinet.css'
import {getCabinetThunkCreator} from '../../Redux/cabinetReducer'
  

class fetchContainerComponent extends React.Component{
    
    render() {
        if (this.props.stateUser.cabinet_id != 0) {
            this.props.getCabinetThunkCreator(this.props.stateUser.cabinet_id)
        }
        return (
            <Cabinet
                stateCabinet={this.props.state}
                stateUser={this.props.stateUser}
            />
        )
    }
}



let mapStateToProps = (state) => {
    return {
        state: state.pageCabinet,
        stateUser: state.pageUser,
        stateAuth: state.auth
    }
}

export default connect(mapStateToProps, {
    getCabinetThunkCreator
})(fetchContainerComponent)