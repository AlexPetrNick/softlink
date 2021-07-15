import React from 'react'
import {apiCabinet} from '../../../apiDAL/DAL'
import pict from '../../../image/ram.jpg'

let ItemRam = (props) => {

	let getItem = () => {
		apiCabinet.addItemRam(props.data.id)
		props.updateCabinetAC(true)
	}

	let eraseItem = () => {
		apiCabinet.eraseItemRam(props.data.id)
		props.updateCabinetAC(true)
	}

	return (
		<div className="item__content">
			<img className="picture__hard_item" src={pict} alt="" />
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


export default ItemRam