import React from 'react'
import {connect} from 'react-redux'
import Computer from './Computer'
import {fetchComputerThunkCreator, toggleError} from '../../../Redux/computerReducer'

class ComputerContainer extends React.Component{

    toggleS = (truth) => {
        console.log(this)
        this.props.toggleError(truth)
    }


    render() {
        return(
            <Computer {...this.props} toggleS={this.toggleS}/>
        )
    }
}

let mapStateToProps = (state) => {
    return({
        state: state.computer
    })
}

export default connect(mapStateToProps, {
    fetchComputerThunkCreator,
    toggleError
})(ComputerContainer)