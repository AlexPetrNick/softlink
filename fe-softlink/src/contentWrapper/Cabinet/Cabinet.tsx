import cpuIm from '../../image/imageComp/cpu.jpg'
import motherIm from '../../image/imageComp/mother.png'
import powerIm from '../../image/imageComp/power.jpg'
// @ts-ignore
import ramIm from '../../image/imageComp/ram.jfif'
import hddIm from '../../image/imageComp/hdd.jpg'
// @ts-ignore
import ssdIm from '../../image/imageComp/ssd.jfif'
// @ts-ignore
import videoIm from '../../image/imageComp/video.jfif'
import React, {FC, useState} from 'react'
import userPhoto from '../../image/userPhoto.jpg'
import ComputerContainer from './Computer/ComputerContainer'
import up from '../../image/up.png'
import down from '../../image/down.png'
import BagItem from './Bag/BagItemTest'
import TitleBagButton from './Button/TitleBagButton'
import {IContainerComponent} from "./CabinetContainer";
import {DataType, ItemHddType, ItemRamType, ItemSsdType} from "../../Redux/computerReducer";
import exp from "constants";
export type GenStatCompArrayType = {
    generalCntSsd: number
    generalCntRam: number
}

export type RealStatComp = {
    realCntM2: number
    realCntMSata: number
    realCntSata: number
    realCntPcie4: number
    realCntMother: number
    realCntCpu: number
    realCntVideo: number
    realCntPower: number
    realCntDdr3: number
    realCntDdr3L: number
    realCntDdr4: number
    realCntHdd: number
}
export type GenStatCompType = {
    generalCntPower: number
    generalCntMother: number
    generalCntCpu: number
    generalCntVideo: number
    generalCntDdr3: number
    generalCntDdr3L: number
    generalCntDdr4: number
    generalCntM2: number
    generalCntSata: number
    generalCntPcie: number
    generalCntMSata: number
}

let Cabinet:FC<IContainerComponent> = (props:IContainerComponent) => {
    console.log("Draw Cabinet")
    console.log(props)

    let hoverOnItem = (image:string):void => {
        let elem = document.getElementsByClassName('computer__image')[0]
        elem.setAttribute('src', image)
    }
    let addItem = (data:DataType) => {
        props.addItemInComputer(data)
		props.updateCabinetAC(true)
        props.setRemainPowerComputer()
    }
    let eraseItemFromComp = (data:DataType) => {
        props.eraseItemInComputer(data)
		props.updateCabinetAC(true)
        props.setRemainPowerComputer()
    }

    let haveSlotSsd = (data: ItemSsdType, titleSlot:string) => {
        if (data.interface == "SATA-III") {
            if (ssdSlot.sata) {
                return <div className="button__item" onClick={() => addItem(data)}>&laquo;</div>
            } else {
                return <div className="button__item disable" title={titleSlot}>X</div>
            }
        } else if (data.interface == "M2") {
            if (ssdSlot.m2) {
                return <div className="button__item" onClick={() => addItem(data)}>&laquo;</div>
            } else {
                return <div className="button__item disable" title={titleSlot}>X</div>
            }
        } else if (data.interface == "PCI-E 3.0 x4") {
            if (ssdSlot.pcie) {
                return <div className="button__item" onClick={() => addItem(data)}>&laquo;</div>
            } else {
                return <div className="button__item disable" title={titleSlot}>X</div>
            }
        } else if (data.interface == "mSATA") {
            if (ssdSlot.msata) {
                return <div className="button__item" onClick={() => addItem(data)}>&laquo;</div>
            } else {
                return <div className="button__item disable" title={titleSlot}>X</div>
            }
        }
    }

    let haveSlotRam = (data:ItemRamType, titleSlot:string) => {
        if (data.type_memory == "DDR3") {
            if (ramSlot.ddr3) {
                return <div className="button__item" onClick={() => addItem(data)}>&laquo;</div>
            } else {
                return <div className="button__item disable" title={titleSlot}>X</div>
            }
        } else if (data.type_memory == "DDR3L") {
            if (ramSlot.ddr3L) {
                return <div className="button__item" onClick={() => addItem(data)}>&laquo;</div>
            } else {
                return <div className="button__item disable" title={titleSlot}>X</div>
            }
        } else if (data.type_memory == "DDR4") {
            if (ramSlot.ddr4) {
                return <div className="button__item" onClick={() => addItem(data)}>&laquo;</div>
            } else {
                return <div className="button__item disable" title={titleSlot}>X</div>
            }
        }
    }

    let openClose = (e:any) => {
        let button = e.nativeEvent.path[0]
        let bagInner = button.parentNode.parentNode.childNodes[1]
        if (bagInner.classList.length > 1) {
            bagInner.classList.remove("closed")
            button.setAttribute("src", up)
        } else { 
            bagInner.classList.add("closed")
            button.setAttribute("src", down)
        }
    }

    let stateCab = props.stateCabinet
    let stateComp = props.stateComp
    let dataMother = stateComp.mother[0]
    let dataSsd = stateComp.ssd
    let dataRam = stateComp.ram
    let arrMother = stateComp.mother.map((data) => data.id)   
    let arrCpu = stateComp.cpu.map((data) => data.id)   
    let arrPower = stateComp.power.map((data) => data.id)   
    let arrRam = stateComp.ram.map((data) => data.id)   
    let arrHdd = stateComp.hdd.map((data) => data.id)
    let arrVideo = stateComp.video.map((data) => data.id)
    let arrSsd = dataSsd.map((data) => data.id)

    let CntSataHdd = stateComp.hdd.length ? stateComp.hdd.length : 0
    let CntSataSsd = dataSsd.length ? dataSsd.filter(a => a.interface = 'SATA-III').length : 0

    let genStatComp = {
        generalCntPower: 1,
        generalCntMother: 1,
        generalCntCpu: dataMother ? dataMother.cpu : 0 ,
        generalCntVideo: dataMother ? dataMother.pcie16 : 0,
        generalCntDdr3: dataMother ? dataMother.ddr3 : 0,
        generalCntDdr3L: dataMother ? dataMother.ddr3L : 0,
        generalCntDdr4: dataMother ? dataMother.ddr4 : 0,
        generalCntM2: dataMother ? dataMother.m2_cnt : 0,
        generalCntSata: dataMother ? dataMother.sata_cnt : 0,
        generalCntPcie: dataMother ? dataMother.pcie4 : 0,
        generalCntMSata: dataMother ? dataMother.msata_cnt : 0,
    } as GenStatCompType
    let genStatCompArray = {
        generalCntSsd: genStatComp.generalCntM2 + genStatComp.generalCntSata + genStatComp.generalCntPcie + genStatComp.generalCntMSata,
        generalCntRam: genStatComp.generalCntDdr3 + genStatComp.generalCntDdr3L + genStatComp.generalCntDdr4
    }  as GenStatCompArrayType
    let realStatComp = {
        realCntM2: dataSsd.length ? dataSsd.filter(a => a.interface == 'M2').length : 0,
        realCntMSata: dataSsd.length ? dataSsd.filter(a => a.interface == 'mSATA').length : 0,
        realCntSata: CntSataSsd,
        realCntPcie4: dataSsd.length ? dataSsd.filter(a => a.interface == 'PCI-E 3.0 x4').length : 0,
        realCntMother: dataMother ? 1 : 0,
        realCntCpu: stateComp.cpu.length ? stateComp.cpu.length : 0,
        realCntVideo: stateComp.video.length ? stateComp.video.length : 0,
        realCntPower: stateComp.power.length ? stateComp.power.length : 0,
        realCntDdr3: dataRam.length ? dataRam.filter(a => a.type_memory == 'DDR3').length : 0,
        realCntDdr3L: dataRam.length ? dataRam.filter(a => a.type_memory == 'DDR3L').length : 0,
        realCntDdr4: dataRam.length ? dataRam.filter(a => a.type_memory == 'DDR4').length : 0,
        realCntHdd: CntSataHdd
    } as RealStatComp
    let realCntSsd: number = realStatComp.realCntM2 + realStatComp.realCntMSata + realStatComp.realCntSata + realStatComp.realCntPcie4
    let realCntRam: number = realStatComp.realCntDdr3 + realStatComp.realCntDdr3L + realStatComp.realCntDdr4

    type RamSlotType = {
        ddr3: number
        ddr3L: number
        ddr4: number
    }

    let ramSlot = {
        ddr3: genStatComp.generalCntDdr3 - realStatComp.realCntDdr3,
        ddr3L: genStatComp.generalCntDdr3L - realStatComp.realCntDdr3L,
        ddr4: genStatComp.generalCntDdr4 - realStatComp.realCntDdr4
    } as RamSlotType

    type SsdSlotType = {
        m2: number
        pcie: number
        sata: number
        msata: number
    }

    let ssdSlot = {
        m2: genStatComp.generalCntM2 - realStatComp.realCntM2,
        pcie: genStatComp.generalCntPcie - realStatComp.realCntPcie4,
        sata: genStatComp.generalCntSata - realStatComp.realCntSata,
        msata: genStatComp.generalCntMSata - realStatComp.realCntMSata
    } as SsdSlotType

    return (
        <div className="cabinet__wrapper">
            <div className="info__user">
                <div className="user__logo">
                    <img src={userPhoto} />
                </div>
                <div className="user__data">
                    <div className="user__login">{props.stateUser.username}</div>
                    <div className="user__firstname">{}</div>
                    <div className="user__second__name">{props.stateUser.secondName}</div>
                </div>
            </div>
            <ComputerContainer 
                realStatComp = {realStatComp}
                genStatComp = {genStatComp}
                genStatCompArray = {genStatCompArray}
                realCntSsd = {realCntSsd}
                realCntRam = {realCntRam}
            />
            <div className="user__bug">
                    <div className="bug__wrapper">
                        <TitleBagButton nameTitle="Материнка" up={up} openClose={openClose} />
                        <div className="bag_inner">
                        {stateCab.bag.mother.length ? stateCab.bag.mother.map((data) => {
                            return(
                                <BagItem 
                                    data={data}
                                    eraseItemFromComp={eraseItemFromComp}
                                    addItem={addItem}
                                    eraseItem={props.cabinetEraseItem}
                                    arrayItem={arrMother}
                                    remain={genStatComp.generalCntMother - realStatComp.realCntMother}
                                    hover={hoverOnItem}
                                    image={motherIm}
                                />
                            )
                        }) : null }
                        </div>
                    </div>
                    <div className="bug__wrapper">
                        <TitleBagButton nameTitle="Процессор" up={up} openClose={openClose} />
                        <div className="bag_inner">
                        {stateCab.bag.cpu.length ? stateCab.bag.cpu.map((data) => {
                            return(
                                <BagItem 
                                    data={data}
                                    eraseItemFromComp={eraseItemFromComp}
                                    addItem={addItem}
                                    eraseItem={props.cabinetEraseItem}
                                    arrayItem={arrCpu}
                                    remain={genStatComp.generalCntCpu - realStatComp.realCntCpu}
                                    hover={hoverOnItem}
                                    image={cpuIm}
                                />
                            )
                        }) : null}
                        </div>
                    </div>
                    <div className="bug__wrapper">
                        <TitleBagButton nameTitle="Блок питания" up={up} openClose={openClose} />
                        <div className="bag_inner">
                        {stateCab.bag.powersupply.length ? stateCab.bag.powersupply.map((data) => {
                            return(
                                <BagItem 
                                    data={data}
                                    eraseItemFromComp={eraseItemFromComp}
                                    addItem={addItem}
                                    eraseItem={props.cabinetEraseItem}
                                    arrayItem={arrPower}
                                    remain={genStatComp.generalCntPower - realStatComp.realCntPower}
                                    hover={hoverOnItem}
                                    image={powerIm}
                                />
                            )
                        }) : null}
                        </div>     
                    </div>
                    <div className="bug__wrapper">
                        <TitleBagButton nameTitle="Видеокарта" up={up} openClose={openClose} />                    
                        <div className="bag_inner">
                        {stateCab.bag.video.length ? stateCab.bag.video.map((data) => {
                            return(
                                <BagItem 
                                    data={data}
                                    eraseItemFromComp={eraseItemFromComp}
                                    addItem={addItem}
                                    eraseItem={props.cabinetEraseItem}
                                    arrayItem={arrVideo}
                                    remain={genStatComp.generalCntVideo - realStatComp.realCntVideo}
                                    hover={hoverOnItem}
                                    image={videoIm}
                                />
                            )
                        }) : null} 
                        </div>       
                    </div>
                    <div className="bug__wrapper">
                        <TitleBagButton nameTitle="SSD" up={up} openClose={openClose} />   
                        <div className="bag_inner">
                        {stateCab.bag.ssd.length ? stateCab.bag.ssd.map((data) => {
                            return(
                                <BagItem 
                                    data={data}
                                    eraseItemFromComp={eraseItemFromComp}
                                    addItem={addItem}
                                    eraseItem={props.cabinetEraseItem}
                                    arrayItem={arrSsd}
                                    remain={genStatCompArray.generalCntSsd - realCntSsd}
                                    haveManySlot={haveSlotSsd}
                                    hover={hoverOnItem}
                                    image={ssdIm}
                                />
                            )
                        }) : null}
                        </div> 
                    </div>
                    <div className="bug__wrapper">
                        <TitleBagButton nameTitle="Оперативная" up={up} openClose={openClose} /> 
                        <div className="bag_inner">
                        { stateCab.bag.ram.length ? stateCab.bag.ram.map((data) => {
                            return(
                                <BagItem 
                                    data={data}
                                    eraseItemFromComp={eraseItemFromComp}
                                    addItem={addItem}
                                    eraseItem={props.cabinetEraseItem}
                                    arrayItem={arrRam}
                                    remain={genStatCompArray.generalCntRam - realCntRam}
                                    haveManySlot={haveSlotRam}
                                    hover={hoverOnItem}
                                    image={ramIm}
                                />
                            )
                        }) : null}
                        </div>
                    </div>
                    <div className="bug__wrapper">
                        <TitleBagButton nameTitle="Жесткий" up={up} openClose={openClose} />
                        <div className="bag_inner">       
                        {stateCab.bag.hdd.length ? stateCab.bag.hdd.map((data) => {
                            return(
                                <BagItem 
                                    data={data}
                                    eraseItemFromComp={eraseItemFromComp}
                                    addItem={addItem}
                                    eraseItem={props.cabinetEraseItem}
                                    arrayItem={arrHdd}
                                    remain={genStatComp.generalCntSata - realStatComp.realCntSata}
                                    hover={hoverOnItem}
                                    image={hddIm}
                                />
                            )
                        }) : null}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Cabinet