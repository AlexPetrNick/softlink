import React from 'react';
import './App.css';
import {BrowserRouter, Route} from 'react-router-dom';
import {UserControlContainer} from './userControl/UserControlContainer';
import PictureUp from './pictureUp/PictureUp';
import ContentWrapper from './contentWrapper/ContentWrapper.jsx';
import FooterWrapper from './footerWrapper/footerWrapper.js';
import {initThunkCreator} from './Redux/appReducer'
import {connect} from 'react-redux'
import Preloader from './Preloader/Preloader';


class App extends React.Component {         
  componentDidMount() {
    this.props.initThunkCreator() 
  }


  render() {

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
  stateInit: state.app.isInit
})

export default connect (mapStateToProps, {
  initThunkCreator
})(App);
