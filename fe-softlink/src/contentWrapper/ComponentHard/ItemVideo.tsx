import React, {FC} from 'react'
import picture from '../../image/video.jpg'
import {ItemSsdType, ItemVideoType} from "../../Redux/computerReducer";
import {CabinetAddItemType, CabinetEraseItemType} from "../../Redux/cabinetReducer";

type PropsItem = {
	key: number
	data: ItemVideoType
	idBugHard: Array<number | null>
	cabinetAddItem: CabinetAddItemType
	cabinetEraseItem: CabinetEraseItemType
}

const ItemVideo: FC<PropsItem> = (props:PropsItem) => {

	let getItem = () => {
		props.cabinetAddItem(props.data.id, props.data.type_item)
	}

	let eraseItem = () => {
		props.cabinetEraseItem(props.data.id, props.data.type_item)
	}


	return (
		<div className="item__content">
		<img className="picture__hard_item" src={picture}   width="238" height="160"   alt="" />
			<div className="title__hard__item">{props.data.graph_proc}</div>
			<div className="description__hard__item">
				<div>
					<strong>Серия: </strong>
					<span>{props.data.series} </span>
					<strong>Тип памяти: </strong>
					<span>{props.data.type_memory} </span>
					<strong>Шина: </strong>
					<span>{props.data.size_shina_video} </span>
					<strong>Мощность: </strong>
					<span>{props.data.power} </span>
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


export default ItemVideo