import React from "react";
import schema from '../../../image/scheme.jpg'


let Computer = (props) => {
    return(
        <div className="user__computer">
            <div className="computer__schema">
                <img src={schema}  />
            </div>
            <div></div>
            <div className="computer__data">
                <div className="computer__data__name">Материнка</div>
                <div className="computer__data__item"></div>
                <div className="computer__data__name">Процессор</div>
                <div className="computer__data__item"></div>
                <div className="computer__data__name">Видеокарта</div>
                <div className="computer__data__item"></div>
                <div className="computer__data__name">Оперативная</div>
                <div className="computer__data__item"></div>
                <div className="computer__data__name">SSD</div>
                <div className="computer__data__item"></div>
                <div className="computer__data__name">Жесткий диск</div>
                <div className="computer__data__item"></div>
                </div>
        </div>
    )
}


export default Computer