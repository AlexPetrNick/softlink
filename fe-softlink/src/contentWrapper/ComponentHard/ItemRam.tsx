import React, {FC} from 'react'
import pict from '../../image/ram.jpg'
import {ItemPowerType, ItemRamType} from "../../Redux/computerReducer";
import {CabinetAddItemType, CabinetEraseItemType} from "../../Redux/cabinetReducer";

type PropsItem = {
    key: number
    data: ItemRamType
    idBugHard: Array<number | null>
    cabinetAddItem: CabinetAddItemType
    cabinetEraseItem: CabinetEraseItemType
}

let ItemRam: FC<PropsItem> = (props: PropsItem) => {

    let getItem = () => {
        props.cabinetAddItem(props.data.id, props.data.type_item)
    }

    let eraseItem = () => {
        props.cabinetEraseItem(props.data.id, props.data.type_item)
    }

    return (
        <div className="item__content">
            <img className="picture__hard_item" src={pict} width="238" height="160" alt=""/>
            <div className="info__items__hard__line">
                <div className="title__hard__item">{props.data.brand} {props.data.model}</div>
                <div className="description__hard__item">
                    <div>
                        <strong>Тип памяти: </strong>
                        <span>{props.data.type_memory} </span>
                        <strong>Память: </strong>
                        <span>{props.data.memory} </span>
                        <strong>Латентность: </strong>
                        <span>{props.data.latency} </span>
                        <strong>Тайминг: </strong>
                        <span>{props.data.timing} </span>
                    </div>
                </div>
            </div>
            <div className="control">
                {props.idBugHard.includes(props.data.id) ?
                    <button className="button__remove__item" onClick={eraseItem}>&#10006;</button> :
                    <button className="button__add__item" onClick={getItem}>&#10004;</button>
                }
                <button className="button__show">&#128270;</button>
            </div>
        </div>
    );
}


export default ItemRam