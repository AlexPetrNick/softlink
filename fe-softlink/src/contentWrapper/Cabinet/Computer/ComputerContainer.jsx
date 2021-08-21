import React from 'react'
import {connect} from 'react-redux'
import Computer from './Computer'
import {fetchComputerThunkCreator, toggleCorrect} from '../../../Redux/computerReducer'

class ComputerContainer extends React.Component{

    toggleS = (truth) => {
        this.props.toggleCorrect(truth)
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
    toggleCorrect
})(ComputerContainer)