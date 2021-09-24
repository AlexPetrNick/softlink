import React, {FC} from 'react'
import './PictureUp.css'
import first from '../image/1.jpg'
import second from '../image/2.jpg'
import third from '../image/3.jpg'

let PictureUp:FC = () => {

	let onClickFirst = ():void => {
		let picture = document.getElementById("picture_top") as HTMLImageElement
		picture.setAttribute("src", first)
	}
	let onClickSecond = ():void => {
		let picture = document.getElementById("picture_top") as HTMLImageElement
		picture.setAttribute("src", second)
	}
	let onClickThird = ():void => {
		let picture = document.getElementById("picture_top") as HTMLImageElement
		picture.setAttribute("src", third)
	}

	return (
		<div className="picture__in__up">
			<div></div>
			<div className="select__pict">
				<ul>
					<a href="#" onClick={onClickFirst}>&#8226;</a>
					<a href="#" onClick={onClickSecond}>&#8226;</a>
					<a href="#" onClick={onClickThird}>&#8226;</a>
				</ul>
			</div>
			<img id="picture_top" src={first} />
			<div></div>
		</div>	
	);
}

export default PictureUp;