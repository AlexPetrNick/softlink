import React, {FC, Props} from 'react'
import hdd from '../../image/hdd.jpg'
import {DataHardType} from "../../Redux/hardPageReducer";
import {CabinetAddItemType, CabinetEraseItemType} from "../../Redux/cabinetReducer";
import {ItemHddType} from "../../Redux/computerReducer";

type PropsItem = {
    key: number
    data: ItemHddType
    idBugHard: Array<number | null>
    cabinetAddItem: CabinetAddItemType
    cabinetEraseItem: CabinetEraseItemType
}

const ItemHdd: FC<PropsItem> = (props: PropsItem) => {

    let getItem = () => {
        props.cabinetAddItem(props.data.id, props.data.type_item)
    }

    let eraseItem = () => {
        props.cabinetEraseItem(props.data.id, props.data.type_item)
    }

    //&#10006;	убрать итем


    return (
        <div className="item__content ">
            <img className="picture__hard_item" src={hdd} width="238" height="160" alt=""/>
            <div className="info__items__hard__line">
                <div className="title__hard__item">{props.data.brand} {props.data.model}</div>
                <div className="description__hard__item">
                    <div className="description">
                        <strong>Память: </strong>
                        <span>{props.data.memory} </span>
                        <strong>Буфер: </strong>
                        <span>{props.data.buffer} </span>
                        <strong>Частота: </strong>
                        <span>{props.data.freq} </span>
                        <strong>Форм-фактор: </strong>
                        <span>{props.data.form_factor} </span>
                        <strong>Пропускная способность: </strong>
                        <span>{props.data.propusk_sposob} </span>
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


export default ItemHdd