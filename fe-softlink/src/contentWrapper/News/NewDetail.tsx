import React, {FC} from 'react';
import Preloader from '../../Preloader/Preloader'

type PropsState = {
    isLoad: boolean
    newTitle: string
    newContent: string
}

const NewDetail: FC<PropsState> = (props:PropsState) => {
    
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