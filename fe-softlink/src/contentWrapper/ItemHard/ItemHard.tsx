import React, {FC} from 'react';
import PagingComponent from '../Paging/PagingComponent'
import CpuItem from '../ComponentHard/CpuItem'
import ItemHdd from '../ComponentHard/ItemHdd'
import ItemPower from '../ComponentHard/ItemPower'
import ItemRam from '../ComponentHard/ItemRam'
import ItemSsd from '../ComponentHard/ItemSsd'
import ItemVideo from '../ComponentHard/ItemVideo'
import MotherItem from '../ComponentHard/MotherItem'
import {DataHardType, FilterFieldAllType} from "../../Redux/hardPageReducer";
import {CabinetAddItemType, CabinetEraseItemType} from "../../Redux/cabinetReducer";
import {IDispatchProps, IMapAndPropsToProps} from "./ItemHardContainer";
import {
	ItemCpuType,
	ItemHddType, ItemMotherType,
	ItemPowerType,
	ItemRamType,
	ItemSsdType,
	ItemVideoType
} from "../../Redux/computerReducer";
import SimpleSlider from "../Slider/SimpleSlider";

interface ItemHardType extends IMapAndPropsToProps,IDispatchProps  {
	getPageData: any
	setParams: (string:string) => void
	addDictParams: (tag:string, value:string) => void
	eraseDictParams: (tag:string, value:string) => void
	cabinetAddItem: CabinetAddItemType
	cabinetEraseItem: CabinetEraseItemType
	filterField: FilterFieldAllType
}

let ItemHard: FC<ItemHardType> = (props:ItemHardType) => {
	let stateMother = props.stateBugHard.mother[0]
	let filterFieldsProps = props.filterField
	let typeFilterArray:Array<string> = ['none','mother','cpu','ram','video','power','ssd','hdd']
	let itemId:number = props.itemType
	let itemIdName:string = ''
	let filterField:FilterFieldAllType = {}

	for (let id in typeFilterArray) {
		if (Number(id) === itemId) {
			itemIdName = typeFilterArray[id]
		}
	}

	Object.keys(filterFieldsProps).forEach((keys) => {
		let typeFilter = keys.split('_').reverse()[0]
		if (typeFilter === itemIdName){
			(filterField as any)[keys] = (filterFieldsProps as any)[keys]

		}
	})
	console.log(filterField)
	let onClickLinkPage = (page:number) => {
		props.getPageData(page)
	}

	let count = props.stateHard.countOnPage
	let perPage = props.stateHard.perPage
	let current = props.stateHard.currentPage
	let cntPage;
	let pages = [] as Array<number>
	let hardItem:Array<DataHardType> = props.stateHard.data
	console.log(hardItem)
	let componentHard;
	//let stateMother = props.stateMotherComputer
	let itemFilter = []
	let filterDict = props.stateHard.paramsJson
	let setPagesOnPage = (perPage:number, countOnPage:number, pages:Array<number>) => {
		if(perPage) {
				cntPage = Math.ceil(countOnPage/perPage)
				for (let i=1; i <= cntPage; i++) {
					pages.push(i)
				}
			}
		}
	setPagesOnPage(perPage, count, pages)
	let trueBag = (typeItem:number) => {
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
	let idBugHard = trueBag(props.itemType).map((hard)=>{
		if(hard) {
			return hard.id
		} else {
			return null
		}
	})

	let	callComp = (array:Array<DataHardType>) => {
		return array.map((data:DataHardType) => {
			switch (props.itemType) {
				case (1): {
					return (
						<MotherItem
							key={data.id}
							data={data as ItemMotherType}
							idBugHard={idBugHard}
							cabinetAddItem={props.cabinetAddItem}
							cabinetEraseItem={props.cabinetEraseItem}
							//stateMother = {stateMother}
						/>
					)
				}
				case (3): {
					return (
						<ItemRam
							key={data.id}
							data={data as ItemRamType}
							idBugHard={idBugHard}
							cabinetAddItem={props.cabinetAddItem}
							cabinetEraseItem={props.cabinetEraseItem}
							//stateMother = {stateMother}
						/>)
				}
				case (4): {
					return (
						<ItemVideo
							key={data.id}
							data={data as ItemVideoType}
							idBugHard={idBugHard}
							cabinetAddItem={props.cabinetAddItem}
							cabinetEraseItem={props.cabinetEraseItem}
							//stateMother = {stateMother}
						/>
					)
				}
				case (5): {
					return (
						<ItemPower
							key={data.id}
							data={data as ItemPowerType}
							idBugHard={idBugHard}
							cabinetAddItem={props.cabinetAddItem}
							cabinetEraseItem={props.cabinetEraseItem}
							//stateMother = {stateMother}
						/>
					)
				}
				case (6): {
					return (
						<ItemSsd
							key={data.id}
							data={data as ItemSsdType}
							idBugHard={idBugHard}
							cabinetAddItem={props.cabinetAddItem}
							cabinetEraseItem={props.cabinetEraseItem}
							//stateMother = {stateMother}
						/>
					)
				}
				case (7): {
					return (
						<ItemHdd
							key={data.id}
							data={data as ItemHddType}
							idBugHard={idBugHard}
							cabinetAddItem={props.cabinetAddItem}
							cabinetEraseItem={props.cabinetEraseItem}
							//stateMother={stateMother}
						/>
					)
				}
				case(2):
					return (
						<CpuItem
							key={data.id}
							data={data as ItemCpuType}
							idBugHard={idBugHard}
							//stateBugIdHard={props.stateBugIdHard}
							cabinetAddItem={props.cabinetAddItem}
							cabinetEraseItem={props.cabinetEraseItem}
							stateMother = {stateMother}
						/>
					)
			}
		})
	}

	let arrayToString = (arr:any) => {
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
	let consctructParams = (filterDict:any) => {
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
	let addFilterDict = (key:string, value:string) => {
		props.addDictParams(key, value)
	}
	let eraseFilterDict = (key:string, value:string) => {
		props.eraseDictParams(key, value)
	}
	let getParamsOnGet = (e:any) => {
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
	let drawInput = (array:any) => {
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
		let checkOrNot = (bool:boolean, name:string, arr:string) => {
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

		let title = (filterField as any)[item]
		let titleName = title[0]
		itemFilter.push(
			<div className="filter__body">
				<div className="filter__item__title">{titleName}</div>
				<div className="filter__item">
					{drawInput((filterField as any)[item])}
				</div>
			</div>
		)}	
	let fetchGetQuery = () => {
		let page = 1
		props.getPageData(page)
		setPagesOnPage(props.stateHard.perPage, props.stateHard.countOnPage, pages)
	}

	let scrollRigth = (e:any) => {
		let test = document.getElementsByClassName('best__for__user')[0]
		console.log(test)
		test.scrollLeft += 300
		console.log(test.scrollLeft)
	}

	let scrollLeft = (e:any) => {
		let test = document.getElementsByClassName('best__for__user')[0]
		console.log('asdfasdf')
		test.scrollLeft -= 300
	}

	return (
		<div className="wrapper__hard">
			<div className="wrapper__best">
				<SimpleSlider />
			</div>
			<div className="content___list">
				<h1>asdfasdf</h1>
				<div className="page_content">
					{ hardItem ? callComp(hardItem) : null}
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
					<div className="filter__item__title">Пользовательский фильтр</div>
					<div className="filter__item">
						<input type="checkbox" name='Поль' value='12312' onChange={getParamsOnGet} /><br />
					</div>
				</div>
					{ itemFilter}
					<input type="submit" onClick={fetchGetQuery} />
				</form>
			</div>

		</div>
	);
	}

export default ItemHard

