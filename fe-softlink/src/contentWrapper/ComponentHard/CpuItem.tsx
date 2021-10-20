import React, {FC, useState} from 'react'
import cpuImage from '../../image/cpuImage.jpg'
import {CabinetAddItemType, CabinetEraseItemType} from "../../Redux/cabinetReducer";
import {ItemCpuType, ItemMotherType} from "../../Redux/computerReducer";


export type PropsItemHard = {
	key: number
	data: ItemCpuType
	idBugHard: Array<number | null>
	cabinetAddItem: CabinetAddItemType
	cabinetEraseItem: CabinetEraseItemType
	stateMother: ItemMotherType,
	stateMotherComputer: Array<ItemMotherType>,
	stateCompCpu: Array<ItemCpuType>
}

const CpuItem: FC<PropsItemHard> = (props:PropsItemHard) => {
	let getItem = (): void => {
		props.cabinetAddItem(props.data.id, props.data.type_item)
	}
	let eraseItem = (): void => {
		props.cabinetEraseItem(props.data.id, props.data.type_item)
	}
	const getIdItem = () => {
		let idItem = props.stateCompCpu.map(i => i.id)
		return idItem
	}

	console.log()

	let getColorItem = () => {
		let stateColor = ""
		if (props.stateMotherComputer.length) {
			if (props.stateMotherComputer[0].socket != props.data.socket) {
				stateColor = "red"
			} else if (props.stateMotherComputer[0].socket === props.data.socket) {
				if (getIdItem().some(i => i === props.data.id)) {
					stateColor = "yellow"
				} else {
					stateColor = "green"
				}
			}
		}
		return "item__content" + " " + stateColor
	}

	return (
		<div className={getColorItem()}>
			<img className="picture__hard_item" src={cpuImage} width="238" height="160" alt=""/>
			<div className="info__items__hard__line">
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
			</div>
			</div>
			<div className="control">
				{ props.idBugHard.includes(props.data.id) ?
					<button className="button__remove__item" onClick={eraseItem}>&#10006;</button> :
					<button className="button__add__item" onClick={getItem}>&#10004;</button>
				}
				<button className="button__show">&#128270;</button>
			</div>
		</div>
	);
}
				

export default CpuItem