import React, {FC} from 'react';
import './App.css';
import {BrowserRouter} from 'react-router-dom';
import {UserControlContainer} from './userControl/UserControlContainer';
import PictureUp from './pictureUp/PictureUp';
import ContentWrapper from './contentWrapper/ContentWrapper';
import FooterWrapper from './footerWrapper/footerWrapper';
import {initNotUserThunkCreator, initThunkCreator, isInit} from './Redux/appReducer'
import {connect} from 'react-redux'
import Preloader from './Preloader/Preloader';
import {AppStateType} from "./Redux/reduxStore";
import {Progress} from "semantic-ui-react";

interface IApp extends IMapStateToProps, IDispatchToProps {
}

class App extends React.Component<IApp> {
    componentDidMount() {
        console.log("app did mount")
        let haveAccessToken = String(localStorage.getItem('access')).length > 10
        if (haveAccessToken) {
            this.props.initThunkCreator()
        } else {
            this.props.initNotUserThunkCreator()
        }
    }
    render() {
        /*@ts-ignore*/
        window.store = this.props.stateAll
        console.log("RenderApp")
        return (
            <>
                {this.props.stateInit ?
                    <BrowserRouter>
                        <div className="wrapper">
                            <UserControlContainer/>
                            <PictureUp/>
                            <ContentWrapper/>
                            <FooterWrapper/>
                        </div>
                    </BrowserRouter>
                    :
                    <Preloader/>
                }
            </>
        )
    }
}


export interface IMapStateToProps {
    stateAll: AppStateType
    stateInit: boolean
    stateUp: boolean
}

export interface IDispatchToProps {
    initThunkCreator: () => void
    isInit: () => void,
    initNotUserThunkCreator: () => void
}

const mapStateToProps = (state: AppStateType) => ({
    stateAll: state,
    stateInit: state.app.isInit,
    stateUp: state.pageCabinet.updateCabinet
})

export default connect(mapStateToProps, {
    initThunkCreator,
    isInit,
    initNotUserThunkCreator
} as IDispatchToProps)(App);
