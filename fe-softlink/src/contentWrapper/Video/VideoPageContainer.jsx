import React from 'react'
import { connect } from 'react-redux'
import ItemVideo from './ItemVideo/ItemVideo'
import { getHardPageThunkCreator } from '../../Redux/hardPageReducer'


class VideoCardContainer extends React.Component {
    render() {
        return(
            <ItemVideo {...this.props} />
        )
    }
}


let mapStateToProps = (state) => {
    return{
        stateHard: state.pageHard
    }
}

export default connect(mapStateToProps, {
    getHardPageThunkCreator
})(VideoCardContainer)