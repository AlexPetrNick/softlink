import React from 'react'
import {connect} from 'react-redux'
import Computer from './Computer'
import {fetchComputerThunkCreator} from '../../../Redux/computerReducer'

class ComputerContainer extends React.Component{

    render() {
        return(
            <Computer {...this.props}/>
        )
    }
}

let mapStateToProps = (state) => {
    return({
        state: state.computer
    })
}

export default connect(mapStateToProps, {
    fetchComputerThunkCreator
})(ComputerContainer)