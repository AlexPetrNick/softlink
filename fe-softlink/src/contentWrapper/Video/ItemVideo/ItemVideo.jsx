import React from 'react'

const ItemVideo = (props) => {
	return (
		<div className="item__content">
			<img className="picture__hard_item" src="#" alt="" />
			<div className="title__hard__item">{props.brand} {props.model}</div>
			<div className="description__hard__item">
				<strong>Серия: </strong>
				<span>{props.series} </span>
				<strong>Тех.процесс: </strong>
				<span>{props.tech_proc} </span>
				<strong>Тип памяти: </strong>
				<span>{props.type_memory} </span>
				<strong>Коннектор: </strong>
				<span>{props.connector} </span>
			</div>
			<div className="menu__hard__item">
				<div className="menu__hard__see">&raquo;</div>
				<div className="menu__hard__add">+</div>
				<div className="menu__hard__corr">&#9998;</div>
			</div>
		</div>
	);
}


export default ItemVideo