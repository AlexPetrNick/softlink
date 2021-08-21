import { apiCabinet } from '../../../apiDAL/DAL'
import React from 'react'
import ssd from '../../../image/ssd.jfif'

const ItemSsd = (props) => {
	

	let getItem = () => {
		apiCabinet.addItemSsd(props.data.id)
		props.updateCabinetAC(true)
	}

	let eraseItem = () => {
		apiCabinet.eraseItemSsd(props.data.id)
		props.updateCabinetAC(true)
	}

	console.log(props.idBugHard)
	return (
		<div className="item__content">
			<img className="picture__hard_item" src={ssd} alt="" />
			<div className="title__hard__item">{props.data.brand} {props.data.model}</div>
			<div className="description__hard__item">
				<div>
					<strong>Форм-факт: </strong>
					<span>{props.data.form_factor} </span>
					<strong>Память: </strong>
					<span>{props.data.memory} </span>
					<strong>Интерфейс: </strong>
					<span>{props.data.interface} </span>
					<strong>Проп. способность: </strong>
					<span>{props.data.propusk_sposob} </span>
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


export default ItemSsd