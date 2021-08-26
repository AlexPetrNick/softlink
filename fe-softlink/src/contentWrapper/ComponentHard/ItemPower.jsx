import React from 'react'
import {apiCabinet} from '../../apiDAL/DAL'
import power from '../../image/power.jfif'

const ItemPower = (props) => {

	let getItem = () => {
		apiCabinet.addItemPower(props.data.id)
		props.updateCabinetAC(true)
	}

	let eraseItem = () => {
		apiCabinet.eraseItemPower(props.data.id)
		props.updateCabinetAC(true)
	}
	return (
		<div className="item__content">
			<img className="picture__hard_item" src={power}  width="238" height="160"  alt="" />
			<div className="title__hard__item">{props.data.brand} {props.data.model}</div>
			<div className="description__hard__item">
				<div>
					<strong>Мощность: </strong>
					<span>{props.data.power_all} </span>
					<strong>Molex: </strong>
					<span>{props.data.molex} </span>
					<strong>SATA: </strong>
					<span>{props.data.sata} </span>
					<strong>FDD: </strong>
					<span>{props.data.fdd} </span>
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


export default ItemPower