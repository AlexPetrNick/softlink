import React from 'react'
import Cabinet from './Cabinet'
import { connect } from 'react-redux';
import './cabinet.css'
import {getCabinetThunkCreator} from '../../Redux/cabinetReducer'
  

class fetchContainerComponent extends React.Component{
    componentDidMount() {
        this.props.getCabinetThunkCreator("2")
    }
    
    render() {
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