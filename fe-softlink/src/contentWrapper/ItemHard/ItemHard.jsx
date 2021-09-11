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

	let filterField = props.filterField

	let onClickLinkPage = (page) => {
		props.getPageData(page)
	}

	let count = props.stateHard.countOnPage
	let perPage = props.stateHard.perPage
	let current = props.stateHard.currentPage
	let cntPage;
	let pages = []
	let hardItem = props.stateHard.data[0]
	let componentHard;
	let stateMother = props.stateMotherComputer
	let itemFilter = []
	let filterDict = props.stateHard.paramsJson
	let setPagesOnPage = (perPage, countOnPage, pages) => {
		if(perPage) {
				cntPage = Math.ceil(countOnPage/perPage)
				for (let i=1; i <= cntPage; i++) {
					pages.push(i)
				}
			}
		}
	setPagesOnPage(perPage, count, pages)
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
	let idBugHard = trueBag(props.typeItem).map((hard)=>{
		if(hard) {
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
	let consctructParams = (filterDict) => {
		let page = 0
		let queryString = ''
		const filter = '&filter'
		for (let item in filterDict) {
			if (filterDict[item].length) {
				queryString += "&" + String(item) + "=" + arrayToString(filterDict[item])
			}
		}
		return filter + queryString
	}
	let addFilterDict = (key, value) => {
		props.addDictParams(key, value)
	}
	let eraseFilterDict = (key, value) => {
		props.eraseDictParams(key, value)
	}
	let getParamsOnGet = (e) => {
		let value = e.target.attributes.value.value
		let key = e.target.attributes.name.value
		let check = e.target.checked
		if (check) {
			addFilterDict(key, value)
		} else {
			eraseFilterDict(key, value)
		}
		let paramsString = consctructParams(filterDict)
		props.setParams(paramsString)
	}
	let drawInput = (array) => {
		let name = array[1]
		let arrayCheck = []
		let stringValue = ''
		for (let tag in filterDict) {
			let arrTemp = filterDict[tag]
			if (arrTemp.length != 0) {
				for (let i=0;i<arrTemp.length;i++) {
					stringValue += String(tag)+String(arrTemp[i])
				}
			}
		}
		let checkOrNot = (bool, name, arr) => {
			if (bool) {
				return (
					<>
					<input id ={name+arr} type="checkbox" name={name} value={arr} onChange={getParamsOnGet} checked />{arr}<br />
					</>
				)
			} else {
				return (
					<>
					<input id ={name+arr} type="checkbox" name={name} value={arr} onChange={getParamsOnGet} />{arr}<br />
					</>
				)
			}
		}
		for (let i=2; i < array.length; i++) {
			let isHave = stringValue.indexOf(name+array[i]) >= 0
			arrayCheck.push(
				<>
				{checkOrNot(isHave, name, array[i])}		
				</>
			)
		}
		return arrayCheck
	}
	for (let item in filterField){
		console.log(item)
		let title = filterField[item][0]
		itemFilter.push(
			<div className="filter__body">
				<div className="filter__item__title">{title}</div>
				<div className="filter__item">
					{drawInput(filterField[item])}
				</div>
			</div>
		)}	
	let fetchGetQuery = () => {
		let page = 1
		props.getPageData(page)
		setPagesOnPage(props.stateHard.perPage, props.stateHard.countOnPage, pages)
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
					{itemFilter}
					<input type="submit" onClick={fetchGetQuery} />
				</form>
			</div>

		</div>
	);
	}

export default ItemHard

