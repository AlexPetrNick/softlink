import React from 'react';
import loadingImahe from '../image/Fidget-spinner.gif'


let Preloader = () => {
    return (
        <div>
            <h1>LOAD</h1>
            <img src={loadingImahe} />
        </div>
    )
}


export default Preloader