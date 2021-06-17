import React from 'react'

const ItemSsd = (props) => {
	return (
		<div className="item__content">
			<img className="picture__hard_item" src="#" alt="" />
			<div className="title__hard__item">{props.brand} {props.model}</div>
			<div className="description__hard__item">
				<strong>Форм-фактор: </strong>
				<span>{props.form_factor} </span>
				<strong>Память: </strong>
				<span>{props.memory} </span>
				<strong>Интерфейс: </strong>
				<span>{props.interface} </span>
				<strong>Пропускная способность: </strong>
				<span>{props.propusk_sposob} </span>
			</div>
			<div className="menu__hard__item">
				<div className="menu__hard__see">&raquo;</div>
				<div className="menu__hard__add">+</div>
				<div className="menu__hard__corr">&#9998;</div>
			</div>
		</div>
	);
}


export default ItemSsd