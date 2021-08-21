import React from 'react'
import cpuImage from '../../../image/cpuImage.jpg'
import {CpuFunc} from '../../../addedFunction/otherFunc'

const CpuItem = (props) => {
	
	let getItem = () => {
		CpuFunc.add(props.data.id)
        props.updateCabinetAC(true);
	}

	let eraseItem = () => {
		CpuFunc.erase(props.data.id)
        props.updateCabinetAC(true);
	}

	return (
		<div className="item__content">
			<img className="picture__hard_item" src={cpuImage}  alt="" />
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
				

export default CpuItem