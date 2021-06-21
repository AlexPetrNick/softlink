import React from 'react';
import './App.css';
import {BrowserRouter, Route} from 'react-router-dom';
import {UserControlContainer} from './userControl/UserControlContainer';
import PictureUp from './pictureUp/PictureUp';
import ContentWrapper from './contentWrapper/ContentWrapper.jsx';
import FooterWrapper from './footerWrapper/footerWrapper.js';

function App(props) {
  window.stateAll = props
  return (
    <BrowserRouter>
        <div className="wrapper">
        	<UserControlContainer />
        	<PictureUp />
        	<ContentWrapper />
        	<FooterWrapper />
        </div>
    </BrowserRouter>
  );
}

export default App;
