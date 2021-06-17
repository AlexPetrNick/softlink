import React, {Component} from 'react';
import {NavLink} from "react-router-dom";

const NewsItem = (props) => {
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