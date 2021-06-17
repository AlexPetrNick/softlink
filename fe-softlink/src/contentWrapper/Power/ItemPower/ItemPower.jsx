import React from 'react'

const ItemPower = (props) => {
	return (
		<div className="item__content">
			<img className="picture__hard_item" src="#" alt="" />
			<div className="title__hard__item">{props.brand} {props.model}</div>
			<div className="description__hard__item">
				<strong>Мощность: </strong>
				<span>{props.power_all} </span>
				<strong>Molex: </strong>
				<span>{props.molex} </span>
				<strong>SATA: </strong>
				<span>{props.sata} </span>
				<strong>FDD: </strong>
				<span>{props.fdd} </span>
			</div>
			<div className="menu__hard__item">
				<div className="menu__hard__see">&raquo;</div>
				<div className="menu__hard__add">+</div>
				<div className="menu__hard__corr">&#9998;</div>
			</div>
		</div>
	);
}


export default ItemPower