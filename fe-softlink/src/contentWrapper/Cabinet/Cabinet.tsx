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
import React, {FC, useEffect, useState} from 'react'
import userPhoto from '../../image/userPhoto.jpg'
import ComputerContainer from './Computer/ComputerContainer'
import up from '../../image/up.png'
import down from '../../image/down.png'
import BagItem from './Bag/BagItemTest'
import TitleBagButton from './Button/TitleBagButton'
import {IContainerComponent} from "./CabinetContainer";
import {DataType, ItemHddType, ItemRamType, ItemSsdType, setGeneralAndRealCnt} from "../../Redux/computerReducer";
import exp from "constants";
import PowerPlace from "./Computer/Button/PowerPlace";
import {ItemUser} from "./Computer/Button/ItemUser";
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


    const addedFunc = () => {
        props.updateCabinetAC(true)
        props.setGeneralAndRealCnt()
        props.setRemainPowerComputer()
    }

    const addItem = (data:DataType) => {
        props.addItemInComputer(data)
        addedFunc()
    }
    const eraseItemFromComp = (data:DataType) => {
        props.eraseItemInComputer(data)
        addedFunc()
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
    const user = props.stateUser


    type RamSlotType = {
        ddr3: number
        ddr3L: number
        ddr4: number
    }

    let ramSlot = {
        ddr3: stateComp.generalCntDdr3 - stateComp.realCntDdr3,
        ddr3L: stateComp.generalCntDdr3L - stateComp.realCntDdr3L,
        ddr4: stateComp.generalCntDdr4 - stateComp.realCntDdr4
    } as RamSlotType

    type SsdSlotType = {
        m2: number
        pcie: number
        sata: number
        msata: number
    }

    let ssdSlot = {
        m2: stateComp.generalCntM2 - stateComp.realCntM2,
        pcie: stateComp.generalCntPcie - stateComp.realCntPcie4,
        sata: stateComp.generalCntSata - stateComp.realCntSata,
        msata: stateComp.generalCntMSata - stateComp.realCntMSata
    } as SsdSlotType


    let realStatComp = {
        realCntM2: stateComp.realCntM2,
        realCntMSata: stateComp.realCntMSata,
        realCntSata: stateComp.realCntSata,
        realCntPcie4: stateComp.realCntPcie4,
        realCntMother: stateComp.realCntMother,
        realCntCpu: stateComp.realCntCpu,
        realCntVideo: stateComp.realCntVideo,
        realCntPower: stateComp.realCntPower,
        realCntDdr3: stateComp.realCntDdr3,
        realCntDdr3L: stateComp.realCntDdr3L,
        realCntDdr4: stateComp.realCntDdr4,
        realCntHdd: stateComp.realCntHdd
    }

    let genStatCompArray = {
        generalCntSsd: stateComp.generalCntSsd,
        generalCntRam: stateComp.generalCntRam
    }

    let genStatComp = {
        generalCntPower: stateComp.generalCntPower,
        generalCntMother: stateComp.generalCntMother,
        generalCntCpu: stateComp.generalCntCpu,
        generalCntVideo: stateComp.generalCntVideo,
        generalCntDdr3: stateComp.generalCntDdr3,
        generalCntDdr3L: stateComp.generalCntDdr3L,
        generalCntDdr4: stateComp.generalCntDdr4,
        generalCntM2: stateComp.generalCntM2,
        generalCntSata: stateComp.generalCntSata,
        generalCntPcie: stateComp.generalCntPcie,
        generalCntMSata: stateComp.generalCntMSata
    }
    let allPower:number = stateComp.power.length ? stateComp.power[0].power_all : 0

    const infoUser = [
        ['Логин', user.username],
        ['Имя', user.first_name],
        ['Фамилия', user.last_name],
        ['Телефон', '89508194459'],
        ['E-mail', user.email],
        ['О себе', user.about]
    ]

    //
    return (
        <div className="cabinet__wrapper">
            <div className="wrapper__user__computer__power">
                <div className="wrapper__user__computer">
                    <div className="wrapper__user">
                        <h3>Информация</h3>
                        <div className="info__user">
                            <div className="user__data">
                                {infoUser.map(d => (
                                    <ItemUser title={d[0]} items={d[1]} />
                                ))}
                            </div>
                        </div>
                    </div>
                    <ComputerContainer
                        realStatComp = {realStatComp}
                        genStatComp = {genStatComp}
                        genStatCompArray = {genStatCompArray}
                        realCntSsd = {stateComp.realCntSsd}
                        realCntRam = {stateComp.realCntRam}
                    />
                </div>
                <div className="name__battery">Индикатор потребляемой мощности</div>
                <div className="power__cabinet">
                    <PowerPlace
                        powerAll={allPower}
                        remainPower={props.stateComp.remainPower}
                    />
                </div>
            </div>
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
                                    remain={genStatCompArray.generalCntSsd - stateComp.realCntSsd}
                                    haveManySlot={haveSlotSsd}
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
                                    remain={genStatCompArray.generalCntRam - stateComp.realCntRam}
                                    haveManySlot={haveSlotRam}
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