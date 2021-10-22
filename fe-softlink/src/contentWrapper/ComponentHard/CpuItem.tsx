import React, {FC, useState} from 'react'
import cpuImage from '../../image/cpuImage.jpg'
import {CabinetAddItemType, CabinetEraseItemType} from "../../Redux/cabinetReducer";
import {ItemCpuType, ItemMotherType} from "../../Redux/computerReducer";
import {array} from "yup";
import {getButton} from "./extraFunction/extra";


export type PropsItemHard = {
	key: number
	data: ItemCpuType
	idBugHard: Array<number | null>
	cabinetAddItem: CabinetAddItemType
	cabinetEraseItem: CabinetEraseItemType
	stateMotherComputer: Array<ItemMotherType>
	stateCompCpu: Array<ItemCpuType>
	loginUser: string
}

const CpuItem: FC<PropsItemHard> = (props:PropsItemHard) => {
	let getItem = (): void => {
		props.cabinetAddItem(props.data.id, props.data.type_item)
	}
	let eraseItem = (): void => {
		props.cabinetEraseItem(props.data.id, props.data.type_item)
	}
	const idItemComputerCpu = props.stateCompCpu.map(i => i.id)

	let getColorItem = () => {
		let stateColor = ""
		if (props.loginUser.length) {
			if (props.stateMotherComputer.length) {
				if (props.stateMotherComputer[0].socket != props.data.socket) {
					stateColor = "red"
				} else if (props.stateMotherComputer[0].socket === props.data.socket) {
					if (idItemComputerCpu.some(i => i === props.data.id)) {
						stateColor = "yellow"
					} else {
						stateColor = "green"
					}
				}
			}
		} else {
			stateColor = "gray"
		}
		return "item__content" + " " + stateColor
	}
	const loginUser = props.loginUser
	const dataId = props.data.id
	const bagHard = props.idBugHard


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
				{ getButton(loginUser, dataId, bagHard, getItem, eraseItem) }
				<button className="button__show">&#128270;</button>
			</div>
		</div>
	);
}
				

export default CpuItem