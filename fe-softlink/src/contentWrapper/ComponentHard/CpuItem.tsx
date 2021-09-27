import React, {FC} from 'react'
import cpuImage from '../../image/cpuImage.jpg'
import iconMother from '../../image/icons/inMother.png'
import iconMotherSlot from '../../image/icons/motherboard.png'
import {DataHardType} from "../../Redux/hardPageReducer";
import {CabinetAddItemType, CabinetEraseItemType} from "../../Redux/cabinetReducer";
import {ItemCpuType, ItemMotherType} from "../../Redux/computerReducer";

export type PropsItemHard = {
	key: number
	data: ItemCpuType
	idBugHard: Array<number | null>
	cabinetAddItem: CabinetAddItemType
	cabinetEraseItem: CabinetEraseItemType
	stateMother: ItemMotherType
}

const CpuItem: FC<PropsItemHard> = (props:PropsItemHard) => {

	let getItem = ():void => {
		props.cabinetAddItem(props.data.id, props.data.type_item)
	}

	let eraseItem = ():void => {
		props.cabinetEraseItem(props.data.id, props.data.type_item)
	}

	let inMotherComputer:boolean = props.data.id === props.stateMother.id
	let inMother:boolean = false
	if (inMotherComputer) {
		inMother = true
	}
	
	let trueSocket:boolean = props.data.socket === props.stateMother.socket
	let Socket:boolean = false
	if (trueSocket) {
		Socket = true
	}

	return (
		<div className="item__content">
			<div className="picture__hard_item">
				<img className="" src={cpuImage}  width="200" height="160" alt="" />
			</div>
			<div className="addedButton">
				<img src={iconMother} className={inMother ? "added__state__mother in_mother" : "added__state__mother"} width="30" height="30" />
				<img src={iconMotherSlot} className={ Socket ? "added__state__mother__slot in_mother" : "added__state__mother__slot"} width="30" height="30" />
			</div>
			<div className="title__hard__item">{props.data.brand} {props.data.model}</div>
			<div className="description__hard__item">
				<div className="description">
					<strong>Количество ядер: </strong>
					<span>{props.data.num_core} </span>
					<strong>Частота: </strong>
					<span>{props.data.freq} </span>
					<strong>Серия: </strong>
					<span>{props.data.series} </span>
					<strong>Сокет: </strong>
					<span>{props.data.socket} </span>
					<strong>Тех.процесс: </strong>
					<span>{props.data.tech_proc} </span>
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
				

export default CpuItem