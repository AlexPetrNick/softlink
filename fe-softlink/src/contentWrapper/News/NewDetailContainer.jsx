import React from 'react';
import { connect } from 'react-redux';
import NewDetail from './NewDetail'
import {setStateNew, toggleLoad} from '../../Redux/actionNewDetail'
import { withRouter } from 'react-router';



class NewDetailContainer extends React.Component{
    componentDidMount() {
        this.props.toggleLoad(true)
        let newId = this.props.match.params.newId
        let url = 'http://127.0.0.1:8000/api/new/' + String(newId)
        fetch(url)
            .then(resp => resp.json())
            .then(data => {
                console.log(data)
                this.props.setStateNew(data.title, data.content)
                this.props.toggleLoad(false)
            })
            .catch(data => this.props.setCatch(String(data)))
    }

    render() {
        return (
            <NewDetail {...this.props} />
        )
    }
}


let mapStateToProps = (state) => {
    return {
        newTitle: state.pageNew.title,
        newContent: state.pageNew.content,
        isLoad: state.pageNew.isLoading
    }
}

let WrapperRouter = withRouter(NewDetailContainer)

export default connect (mapStateToProps, {
    setStateNew,
    toggleLoad
})(WrapperRouter)