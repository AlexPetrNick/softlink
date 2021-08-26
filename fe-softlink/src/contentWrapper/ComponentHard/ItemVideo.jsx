import React from 'react'
import {apiCabinet} from '../../apiDAL/DAL'
import picture from '../../image/video.jpg'

const ItemVideo = (props) => {

	let getItem = () => {
		apiCabinet.addItemVideo(props.data.id)
		props.updateCabinetAC(true)
	}

	let eraseItem = () => {
		apiCabinet.eraseItemVideo(props.data.id)
		props.updateCabinetAC(true)
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