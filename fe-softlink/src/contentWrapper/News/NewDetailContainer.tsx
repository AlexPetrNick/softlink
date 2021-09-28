import React from 'react';
import { connect } from 'react-redux';
import NewDetail from './NewDetail'
import {setStateNew, toggleLoad} from '../../Redux/actionNewDetail'
import { withRouter } from 'react-router';
import {AppStateType} from "../../Redux/reduxStore";



class NewDetailContainer extends React.Component<IAllStateToProps>{
    componentDidMount() {
        this.props.toggleLoad(true)
        let url = 'http://127.0.0.1:8000/api/new/' + String(1)
        fetch(url)
            .then(resp => resp.json())
            .then(data => {
                console.log(data)
                this.props.setStateNew(data.title, data.content)
                this.props.toggleLoad(false)
            })
    }

    render() {
        return (
            <NewDetail {...this.props} />
        )
    }
}

interface IStateToProps {
    newTitle: string
    newContent: string,
    isLoad: boolean
}

interface IDispatchProps {
    setStateNew: (title:string, content:string) => void
    toggleLoad: (isLoad:boolean) => void
}

interface IAllStateToProps extends  IStateToProps, IDispatchProps {}

let mapStateToProps = (state:AppStateType) => {
    return {
        newTitle: state.pageNew.title,
        newContent: state.pageNew.content,
        isLoad: state.pageNew.isLoading
    }
}

let WrapperRouter = withRouter(NewDetailContainer as any)

export default connect (mapStateToProps, {
    setStateNew,
    toggleLoad
})(WrapperRouter)