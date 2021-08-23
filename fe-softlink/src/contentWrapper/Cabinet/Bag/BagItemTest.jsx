import React, { useState } from 'react'

let BagItem = (props) => {

    let titleEraseItem = "Нельзя удалить из кабинета пока итем в компьютере"
    let titleDontSlot = "Нету свободных слотов. Очистите слот в компьютере"
    let haveItemOnComputer = props.arrayItem.some((item) => item == props.data.id)

    return (
        <div className="bug__item" >
            { haveItemOnComputer ?
                    <div className="button__item enable" onClick={() => {props.eraseItemFromComp(props.data)}}>&raquo;</div> :
                    !props.haveManySlot ?
                        props.remain ?
                        <div className="button__item" onClick={() => props.addItem(props.data)}>&laquo;</div> :
                        <div className="button__item disable" title={titleDontSlot}>X</div>
                    :
                    props.haveManySlot(props.data, titleDontSlot)
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
                <div className="erase_item" onClick={() => {props.eraseItemMother(props.data.id)}}><b>X</b></div>
            }
        </div>
    )
}

export default BagItem