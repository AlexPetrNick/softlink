import React from 'react';
import './App.css';
import {BrowserRouter} from 'react-router-dom';
import {UserControlContainer} from './userControl/UserControlContainer';
import PictureUp from './pictureUp/PictureUp';
import ContentWrapper from './contentWrapper/ContentWrapper.jsx';
import FooterWrapper from './footerWrapper/footerWrapper.js';
import {initThunkCreator, isInit} from './Redux/appReducer'
import {connect} from 'react-redux'
import Preloader from './Preloader/Preloader';


class App extends React.Component {         
  componentDidMount() {
      console.log("app did mount")
      this.props.initThunkCreator() 
  }

  /*componentDidUpdate(prevProps, prevState, s) {

    debugger
    console.log(this.props.stateAll.pageCabinet.updateCabinet)
		this.props.cabinetIsUpdateThunkCreator(true)
    console.log(this.props.stateAll.pageCabinet.updateCabinet)
	}*/


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
  isInit
})(App);
