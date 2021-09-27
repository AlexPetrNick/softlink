import React, {Component, FC} from 'react';
import {NavLink} from "react-router-dom";

type PropsType = {
    id: number
    key: number
    title: string
    content: string
}


const NewsItem: FC<PropsType> = (props:PropsType) => {
    let url = "/new/" + String(props.id) 
    return (
        <div className="news__template">
            <div className="news__title"><NavLink to={url}>{props.title}</NavLink></div>
            <div className="news__content">
            {props.content}
            </div>
            <div className="news__tags__list">
                <ul className="news__tags__items">
                    <li className="news__tag">#Lorem, ipsum.</li>
                </ul>
            </div>
        </div>
    )

}

export default NewsItem