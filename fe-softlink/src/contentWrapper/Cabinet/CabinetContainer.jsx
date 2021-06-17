import React from 'react'
import Cabinet from './Cabinet'
import { connect } from 'react-redux';
import './cabinet.css'
  

class fetchContainerComponent extends React.Component{
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
        stateUser: state.pageUser
    }
}

export default connect(mapStateToProps, {})(fetchContainerComponent)