import React from 'react';
import './App.css';
import {BrowserRouter} from 'react-router-dom';
import {UserControlContainer} from './userControl/UserControlContainer';
import PictureUp from './pictureUp/PictureUp';
import ContentWrapper from './contentWrapper/ContentWrapper';
import FooterWrapper from './footerWrapper/footerWrapper';
import {initThunkCreator, isInit} from './Redux/appReducer'
import {connect} from 'react-redux'
import Preloader from './Preloader/Preloader';
import {AppStateType} from "./Redux/reduxStore";

interface IApp extends IMapStateToProps, IDispatchToProps {}

class App extends React.Component<IApp> {
  componentDidMount() {
      console.log("app did mount")
      this.props.initThunkCreator() 
  }

  render() {
      /*@ts-ignore*/
      window.store = this.props.stateAll
      console.log("RenderApp")
      return(
      <>
          {this.props.stateInit ?
            <BrowserRouter>
                <div className="wrapper">
                  <UserControlContainer />
                  <PictureUp />
                  <ContentWrapper />
                  <FooterWrapper />
                </div>
            </BrowserRouter>
            :
            <Preloader />
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
  isInit: () => void
}

const mapStateToProps = (state:AppStateType) => ({
  stateAll: state,
  stateInit: state.app.isInit,
  stateUp: state.pageCabinet.updateCabinet
})

export default connect (mapStateToProps, {
  initThunkCreator,
  isInit
} as IDispatchToProps)(App);
