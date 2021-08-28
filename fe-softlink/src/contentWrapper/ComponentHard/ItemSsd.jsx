import React from 'react'
import ssd from '../../image/ssd.jfif'

const ItemSsd = (props) => {
	

	let getItem = () => {
		props.cabinetAddItem(props.data.id, props.data.type_item)
	}

	let eraseItem = () => {
		props.cabinetEraseItem(props.data.id, props.data.type_item)
	}
	return (
		<div className="item__content">
			<img className="picture__hard_item" src={ssd}  width="238" height="160"  alt="" />
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