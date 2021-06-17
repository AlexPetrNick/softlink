import React from 'react'
import hdd from '../../../image/hdd.jpg'

const ItemHdd = (props) => {
console.log(props)

	let getItem = () => {
		props.getItem(props.data)
	}

	let eraseItem = () => {
		props.eraseItemHard(props.data.id)
	}

	//&#10006;	убрать итем

		
	return (	
		<div className="item__content ">
			<img className="picture__hard_item" src={hdd} alt="" />
			<div className="title__hard__item">{props.data.brand} {props.data.model}</div>
			<div className="description__hard__item">
				<div className="description">
					<strong>Память: </strong>
					<span>{props.data.memory} </span>
					<strong>Буфер: </strong>
					<span>{props.data.buffer} </span>
					<strong>Частота: </strong>
					<span>{props.data.freq} </span>
					<strong>Форм-фактор: </strong>
					<span>{props.data.form_factor} </span>
					<strong>Пропускная способность: </strong>
					<span>{props.data.propusk_sposob} </span>
				</div>
				<div className="control">
					{ props.stateBugIdHard.includes(props.data.id) ? 
					<button className="button__remove__item" onClick={eraseItem}>&#10006;</button> :
					<button className="button__add__item" onClick={getItem}>&#10004;</button>
					}
					<button className="button__show">&#128270;</button>	
				</div>

			</div>
		</div>
	);
}


export default ItemHdd