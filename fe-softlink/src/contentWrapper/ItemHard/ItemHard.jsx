import React, {Component} from 'react';
import PagingComponent from '../Paging/PagingComponent'
import CpuItem from '../ComponentHard/CpuItem'
import ItemHdd from '../ComponentHard/ItemHdd'
import ItemPower from '../ComponentHard/ItemPower'
import ItemRam from '../ComponentHard/ItemRam'
import ItemSsd from '../ComponentHard/ItemSsd'
import ItemVideo from '../ComponentHard/ItemVideo'
import MotherItem from '../ComponentHard/MotherItem'

let ItemHard = (props) => {
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

	let stateMother = props.stateMotherComputer


	let trueBag = (typeItem) => {
				switch(typeItem) {
					case (1): {
						return props.stateBugHard.mother 
					}
					case (3): {
						return props.stateBugHard.ram 
					}
					case (4): {
						return props.stateBugHard.video 
					}
					case (5): {
						return props.stateBugHard.powersupply
					}	
					case (6): {
						return props.stateBugHard.ssd 
					}
					case (2): {
						return props.stateBugHard.cpu 
					}
					default:
						return props.stateBugHard.hdd 
					}
			}

	console.log(trueBag(props.typeItem))
	let idBugHard = trueBag(props.typeItem).map((hard)=>{
		if(hard) {
			console.log(hard.type_item)
			return hard.id
		} else {
			return []
		}
	})

	if (hardItem) {
		componentHard = hardItem.map((data) => {
			switch(props.typeItem) {
				case (1): {
					return (
					<MotherItem
					key={data.id}
					data={data}
					idBugHard = {idBugHard}
					stateBugIdHard={props.stateBugIdHard}
					cabinetAddItem = {props.cabinetAddItem}
					cabinetEraseItem = {props.cabinetEraseItem}
					stateMother = {stateMother}
					/>
					)
				}
				case (3): {
					return (
					<ItemRam
					key={data.id}
					data={data}
					idBugHard = {idBugHard}
					stateBugIdHard={props.stateBugIdHard}
					cabinetAddItem = {props.cabinetAddItem}
					cabinetEraseItem = {props.cabinetEraseItem}
					stateMother = {stateMother}
					/>)					
				}
				case (4): {
					return (
					<ItemVideo
					key={data.id}
					data={data}
					idBugHard = {idBugHard}
					stateBugIdHard={props.stateBugIdHard}
					cabinetAddItem = {props.cabinetAddItem}
					cabinetEraseItem = {props.cabinetEraseItem}
					stateMother = {stateMother}
					/>
					)
				}
				case (5): {
					return (
					<ItemPower
					key={data.id}
					data={data}
					idBugHard = {idBugHard}
					stateBugIdHard={props.stateBugIdHard}
					cabinetAddItem = {props.cabinetAddItem}
					cabinetEraseItem = {props.cabinetEraseItem}
					stateMother = {stateMother}
					/>
					)
				}	
				case (6): {
					return (
					<ItemSsd 
					key={data.id}
					data={data}
					idBugHard = {idBugHard}
					stateBugIdHard={props.stateBugIdHard}
					cabinetAddItem = {props.cabinetAddItem}
					cabinetEraseItem = {props.cabinetEraseItem}
					stateMother = {stateMother}
					/>
					)
				}
				case (7): {
					return (
					<ItemHdd
					key={data.id}
					data={data}
					idBugHard = {idBugHard}
					updateCabinet = {props.updateCabinet}
					ucab = {props.stateup}
					cabinetAddItem = {props.cabinetAddItem}
					cabinetEraseItem = {props.cabinetEraseItem}
					stateMother = {stateMother}
					/>
					)
				}
				default:
					return(
						<CpuItem
						key={data.id}
						data={data}
						idBugHard = {idBugHard}
						stateBugIdHard={props.stateBugIdHard}
						cabinetAddItem = {props.cabinetAddItem}
						cabinetEraseItem = {props.cabinetEraseItem}
						stateMother = {stateMother}
						/>
						)
				}
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

export default ItemHard

