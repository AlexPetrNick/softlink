import React from 'react';
import './App.css';
import {BrowserRouter, Route} from 'react-router-dom';
import {UserControlContainer} from './userControl/UserControlContainer';
import PictureUp from './pictureUp/PictureUp';
import ContentWrapper from './contentWrapper/ContentWrapper.jsx';
import FooterWrapper from './footerWrapper/footerWrapper.js';
import {initThunkCreator, isInit} from './Redux/appReducer'
import {connect} from 'react-redux'
import Preloader from './Preloader/Preloader';
import {cabinetIsUpdateThunkCreator} from './Redux/cabinetReducer'


class App extends React.Component {         
  componentDidMount() {
      this.props.initThunkCreator() 
  }

  componentDidUpdate(prevProps) {
		if(this.props.stateup) {
			this.props.cabinetIsUpdateThunkCreator()
		} 
	}


  render() {
    window.store = this.props.stateAll
    return (
      <>
        { this.props.stateInit ? 
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
    );

  }
}

const mapStateToProps = (state) => ({
  stateAll: state,
  stateInit: state.app.isInit,
  stateup: state.pageCabinet.updateCabinet
})

export default connect (mapStateToProps, {
  initThunkCreator,
  isInit,
  cabinetIsUpdateThunkCreator
})(App);
