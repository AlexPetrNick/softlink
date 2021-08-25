import React, {Component} from 'react';
import MotherItem from "./MotherItem/MotherItem";
import PagingComponent from '../Paging/PagingComponent'

let MotherPage = (props) => {
	let onClickLinkPage = (page) => {
		props.getPageData(page)
	}
	let count = props.stateHard.countOnPage
	let perPage = props.stateHard.perPage
	let current = props.stateHard.currentPage
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
	let idBugHard = props.stateBugHard.map((hard)=>{
		if(hard) {
			return hard.id
		} else {
			return []
		}
	})
	if (hardItem) {
		componentHard = hardItem.map((data) => {
			return(
			<MotherItem
			key={data.id}
			data={data}
			idBugHard = {idBugHard}
			stateBugIdHard={props.stateBugIdHard}
			updateCabinetAC = {props.updateCabinetAC}
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
				<PagingComponent 
					pages={pages} 
					current={current} 
					onClicking={onClickLinkPage}
					prev = {props.stateHard.urlPrevPage} 
					next = {props.stateHard.urlNextPage}
				/>
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