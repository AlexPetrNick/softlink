import React, {FC} from 'react';
import loadingImahe from '../image/Fidget-spinner.gif'


let Preloader:FC = () => {
    return (
        <div>
            <h1>LOAD</h1>
            <img src={loadingImahe} />
        </div>
    )
}


export default Preloader