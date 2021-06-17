import React from 'react';
import Preloader from '../../Preloader/Preloader'


const NewDetail = (props) => {
    
    if (props.isLoad) {
        <Preloader />
    }
    console.log(props)

    return (
        <div className="wrapper__new__detail">
            <div className="new__tags"></div>
            <div className="new__detail__title">{props.newTitle}</div>
            <div className="new_detail__content">{props.newContent}</div>
        </div>
    )
}



export default NewDetail