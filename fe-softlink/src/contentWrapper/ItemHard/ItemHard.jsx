import React, {Component} from 'react';
import PagingComponent from '../Paging/PagingComponent'
import CpuItem from '../ComponentHard/CpuItem'
import ItemHdd from '../ComponentHard/ItemHdd'
import ItemPower from '../ComponentHard/ItemPower'
import ItemRam from '../ComponentHard/ItemRam'
import ItemSsd from '../ComponentHard/ItemSsd'
import ItemVideo from '../ComponentHard/ItemVideo'
import MotherItem from '../ComponentHard/MotherItem'
import {filterFieldSsd} from '../../Redux/hardPageReducer'

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

	let itemFilter = []
	let getFetch = ''
	let filterDict = {form_factor:[], type_mem: [], memory: [], interface: [] }

	

	let addfilterDict = (key, value, dict) => {
		for (let item in dict) {
			if (item == key) {
				console.log(value)
				console.log(key)
				console.log(dict[item])
				dict[item].push(value)
			}
		}
	}

	let getParamsOnGet = (e) => {
		let value = e.target.attributes.value.value
		let key = e.target.attributes.name.value
		addfilterDict(key, value, filterDict)
	}



	let drawInput = (array) => {
		let name = array[1]
		let arrayCheck = []
		for (let i=2; i < array.length; i++) {
			arrayCheck.push(
				<>
				<input type="checkbox" name={name} value={array[i]} onChange={getParamsOnGet} />{array[i]}<br />
				</>
			)
		}
		return arrayCheck
	}



	for (let item in filterFieldSsd){
		let title = filterFieldSsd[item][0]
		itemFilter.push(
			<div className="filter__body">
				<div className="filter__item__title">{title}</div>
				<div className="filter__item">
					{drawInput(filterFieldSsd[item])}
				</div>
			</div>
		)}

	console.log(String(filterDict['form_factor']))
		
	let arrayToString = (arr) => {
		let params = ''
		for (let item in arr) {
			if (params) {
				params += "," + String(arr[item])
			} else {
				params = String(arr[item])
			}
		}
		return params
	}

	let testQuery = () => {
		const filter = 'filter'
		let queryString = ''
		for (let item in filterDict) {
			if (filterDict[item].length) {
				queryString += "&" + String(item) + "=" + arrayToString(filterDict[item])
			}
		}
		console.log(queryString)
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
				<button onClick={testQuery}>Click</button>
				<form action="#" method="GET" id="filter__memory">
					{itemFilter}
					<input type="submit" />
				</form>
			</div>

		</div>
	);
	}

export default ItemHard

