import React, {Component} from 'react';
import MotherItem from "./MotherItem/MotherItem";

let MotherPage = (props) => {

	let onClickLinkPage = (page) => {
		props.getPageData(page)
	}

	let count = props.stateHard.countOnPage
	let perPage = props.stateHard.perPage
	let cntPage;
	let pages = []

	if(perPage) {
		cntPage = Math.ceil(count/perPage)
		for (let i=1; i <= cntPage; i++) {
			pages.push(i)
		}
	}

	let hardItem = props.stateHard.data[0]
	let componentHard;
	if (hardItem) {
		componentHard = hardItem.map((data) => {
			return(
			<MotherItem
			key={data.id}
			data={data}
			getItem={props.getItem} 
			stateBugIdHard={props.stateBugIdHard}
			eraseItemHard={props.eraseItemHard}
			/>
			)
		})

	}
	return (
		<div className="wrapper__hard">
			<div className="content___list">
				<div className="page_content">
					{componentHard}
				</div>
				<div className="page__number__list">
					<div className="empty"></div>
						<ul className="page__slot">
							{props.stateHard.urlPrevPage ? 
							<li className="prev__page"><a href="#">Пред.</a></li>: null}
							{pages.map((data) => {
								return(
									<li className="number__page">
										<span onClick={()=> onClickLinkPage(data)}>{data}</span>
									</li>
								)
							})}
							{props.stateHard.urlNextPage ? 
							<li className="next__page"><a href="#">След.</a></li>: null}
						</ul>
					<div className="empty"></div>
				</div>
			</div>

			<div className="filter__list">
				<form action="#" method="GET" id="filter__memory">
					<div className="filter__body">
						<div className="filter__item__title">Память</div>
							<div className="filter__item">
								<input id="check" type="checkbox" name="memory" value="12" /> 12
							</div>
					</div>
					<input type="submit" />
				</form>
				<form action="#" method="GET" id="filter__formfactor">
					<div className="filter__body">
						<div className="filter__item__title">Память</div>
							<div className="filter__item">
								<input type="checkbox" name="form_factor" value="12" /> 12
							</div>
					</div>
					<input type="submit" />
				</form>
			</div>
		</div>
	);
	}

export default MotherPage