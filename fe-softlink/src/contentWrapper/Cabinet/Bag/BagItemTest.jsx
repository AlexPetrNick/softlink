import React, { useState } from 'react'
import computer from '../../../image/scheme.jpg'

let BagItem = (props) => {

    let titleEraseItem = "Нельзя удалить из кабинета пока итем в компьютере"
    let titleDontSlot = "Нету свободных слотов. Очистите слот в компьютере"
    let haveItemOnComputer = props.arrayItem.some((item) => item == props.data.id)

    let hoverOutItem = () => {
        let elem = document.getElementsByClassName('computer__image')[0]
        elem.setAttribute('src', computer)
    }


    return (
        <div className="bug__item" onMouseOut={hoverOutItem} onMouseOver={() => { props.hover(props.image) }}>
            { haveItemOnComputer ?
                    <div className="button__item enable" onClick={() => {props.eraseItemFromComp(props.data)}}>&raquo;</div> :
                    !props.haveManySlot ?
                        props.remain ?
                        <div className="button__item" onClick={() => props.addItem(props.data)}>&laquo;</div> :
                        <div className="button__item disable" title={titleDontSlot}>X</div>
                    :
                    props.haveManySlot(props.data, titleDontSlot )
            }
            <div className="bug__item__name">
                {props.data.model} {props.data.brand}
            </div>
            <div className="bug__item__disc">
                Описание Итема
            </div>
            {
                haveItemOnComputer ? 
                <div className="erase_item deleteCant" title={titleEraseItem}><b>X</b></div>:
                <div className="erase_item" onClick={() => {props.eraseItem(props.data.id, props.data.type_item)}}><b>X</b></div>
            }
        </div>
    )
}

export default BagItem