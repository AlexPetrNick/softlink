import React, {FC} from 'react'
import {apiCabinet} from '../../apiDAL/DAL'
/*@ts-ignore*/
import mother from '../../image/mother.jfif'
import {ItemMotherType, ItemVideoType} from "../../Redux/computerReducer";
import {CabinetAddItemType, CabinetEraseItemType} from "../../Redux/cabinetReducer";

type PropsItem = {
	key: number
	data: ItemMotherType
	idBugHard: Array<number | null>
	cabinetAddItem: CabinetAddItemType
	cabinetEraseItem: CabinetEraseItemType
}

const ItemMother: FC<PropsItem> = (props:PropsItem) => {

	let getItem = () => {
		props.cabinetAddItem(props.data.id, props.data.type_item)
	}

	let eraseItem = () => {
		props.cabinetEraseItem(props.data.id, props.data.type_item)
	}

	console.log(props.data)
	return (
		<div className="item__content">
			<img className="picture__hard_item" src={mother}  width="238" height="160"   alt="" />
			<div className="title__hard__item">{props.data.brand} {props.data.model}</div>
			<div className="description__hard__item">
				<div className="description">
					<strong>Сокет: </strong>
					<span>{props.data.socket} </span>
					<strong>DDR4: </strong>
					<span>{props.data.ddr4} </span>
					<strong>Частота: </strong>
					<span>{props.data.work_freq} </span>
					<strong>Сокет: </strong>
					<span>{props.data.socket} </span>
				</div>
				<div className="control">
					{ props.idBugHard.includes(props.data.id) ? 
					<button className="button__remove__item" onClick={eraseItem}>&#10006;</button> :
					<button className="button__add__item" onClick={getItem}>&#10004;</button>
					}
					<button className="button__show">&#128270;</button>	
				</div>
			</div>
		</div>
	);
}


export default ItemMother