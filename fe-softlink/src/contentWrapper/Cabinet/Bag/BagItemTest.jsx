import React, { useState } from 'react'

let BagItem = (props) => {

    let haveItemOnComputer = props.arrayItem.some((item) => item == props.data.id)

    return (
        <div className="bug__item" >
            { haveItemOnComputer ?
                    <div className="button__item enable" onClick={() => {props.eraseItemFromComp(props.data)}}>&raquo;</div> :
                    props.remain ?
                    <div className="button__item" onClick={() => props.addItem(props.data)}>&laquo;</div> :
                    <div className="button__item disable">X</div>
            }
            <div className="bug__item__name">
                {props.data.model} {props.data.brand}
            </div>
            <div className="bug__item__disc">
                Описание Итема
            </div>
            {
                haveItemOnComputer ? 
                <div className="erase_item deleteCant" title={props.titleEraseItem}><b>X</b></div>:
                <div className="erase_item" onClick={() => {props.eraseItemMother(props.data.id)}}><b>X</b></div>
            }
        </div>
    )
}

export default BagItem