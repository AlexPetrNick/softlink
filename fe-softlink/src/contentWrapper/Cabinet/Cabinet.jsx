import React, { useState } from 'react'
import userPhoto from '../../image/userPhoto.jpg'
import { apiCabinet } from '../../apiDAL/DAL'
import ComputerContainer from './Computer/ComputerContainer'
import up from '../../image/up.png'
import down from '../../image/down.png'
import BagItem from './Bag/BagItemTest'
import TitleBagButton from './Button/TitleBagButton'

let Cabinet = (props) => {
    console.log("Draw Cabinet")
	let eraseItemSsd = (id) => {
		apiCabinet.eraseItemSsd(id)
		props.updateCabinetAC(true)
	}
	let eraseItemVideo = (id) => {
		apiCabinet.eraseItemVideo(id)
		props.updateCabinetAC(true)
	}
	let eraseItemHdd = (id) => {
		apiCabinet.eraseItemHdd(id)
		props.updateCabinetAC(true)
	}
	let eraseItemMother = (id) => {
		apiCabinet.eraseItemMother(id)
		props.updateCabinetAC(true)
	}
	let eraseItemPower = (id) => {
		apiCabinet.eraseItemPower(id)
		props.updateCabinetAC(true)
	}
	let eraseItemRam = (id) => {
		apiCabinet.eraseItemRam(id)
		props.updateCabinetAC(true)
	}
	let eraseItemCpu = (id) => {
		apiCabinet.eraseItemCpu(id)
        props.updateCabinetAC(true);
	}
    let addItem = (data) => {
        props.addItemInComputer(data)
		props.updateCabinetAC(true)
    }
    let eraseItemFromComp = (data) => {
        props.eraseItemInComputer(data)
		props.updateCabinetAC(true)
    }
    let haveSlotSsd = (data, titleSlot) => {
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

    let haveSlotRam = (data, titleSlot) => {
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

    let openClose = (e) => {
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
        generalCntCpu: dataMother.cpu,
        generalCntVideo: dataMother.pcie16,
        generalCntDdr3: dataMother.ddr3,
        generalCntDdr3L: dataMother.ddr3L,
        generalCntDdr4: dataMother.ddr4,
        generalCntRam: dataMother.ddr3 + dataMother.ddr3L + dataMother.ddr4,
        generalCntM2: dataMother.m2_cnt,
        generalCntSata: dataMother.sata_cnt,
        generalCntPcie: dataMother.pcie4,
        generalCntMSata: dataMother.msata_cnt,
        generalCntSsd: dataMother.m2_cnt + dataMother.sata_cnt + dataMother.pcie4 + dataMother.msata_cnt
    }

    let realStatComp = {
        realCntM2: dataSsd.length ? dataSsd.filter(a => a.interface == 'M2').length : 0,
        realCntMSata: dataSsd.length ? dataSsd.filter(a => a.interface == 'mSATA').length : 0,
        realCntSata: CntSataSsd,
        realCntPcie4: dataSsd.length ? dataSsd.filter(a => a.interface == 'PCI-E 3.0 x4').length : 0,
        realCntMother: dataMother.id ? 1 : 0,
        realCntCpu: stateComp.cpu.length ? stateComp.cpu.length : 0,
        realCntVideo: stateComp.video.length ? stateComp.video.length : 0,
        realCntPower: stateComp.power.length ? stateComp.power.length : 0,
        realCntDdr3: dataRam.length ? dataRam.filter(a => a.type_memory == 'DDR3').length : 0,
        realCntDdr3L: dataRam.length ? dataRam.filter(a => a.type_memory == 'DDR3L').length : 0,
        realCntDdr4: dataRam.length ? dataRam.filter(a => a.type_memory == 'DDR4').length : 0,
        realCntHdd: CntSataHdd
    }

    let realCntSsd = realStatComp.realCntM2 + realStatComp.realCntMSata + realStatComp.realCntSata + realStatComp.realCntPcie4
    let realCntRam = realStatComp.realCntDdr3 + realStatComp.realCntDdr3L + realStatComp.realCntDdr4

    let ramSlot = {
        ddr3: genStatComp.generalCntDdr3 - realStatComp.realCntDdr3,
        ddr3L: genStatComp.generalCntDdr3L - realStatComp.realCntDdr3L,
        ddr4: genStatComp.generalCntDdr4 - realStatComp.realCntDdr4
    }
    let ssdSlot = {
        m2: genStatComp.generalCntM2 - realStatComp.realCntM2,
        pcie: genStatComp.generalCntPcie - realStatComp.realCntPcie4,
        sata: genStatComp.generalCntSata - realStatComp.realCntSata,
        msata: genStatComp.generalCntMSata - realStatComp.realCntMSata
    }


    return (
        <div className="cabinet__wrapper">
            <div className="info__user">
                <div className="user__logo">
                    <img src={userPhoto} />
                </div>
                <div className="user__data">
                    <div className="user__login">{props.stateUser.login}</div>
                    <div className="user__firstname">{props.stateUser.firstName}</div>
                    <div className="user__second__name">{props.stateUser.secondName}</div>
                </div>
            </div>
            <ComputerContainer 
                realStatComp = {realStatComp}
                genStatComp = {genStatComp}
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
                                    eraseItem={eraseItemMother}
                                    arrayItem={arrMother}
                                    remain={genStatComp.generalCntMother - realStatComp.realCntMother}
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
                                    eraseItem={eraseItemCpu}
                                    arrayItem={arrCpu}
                                    remain={genStatComp.generalCntCpu - realStatComp.realCntCpu}
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
                                    eraseItem={eraseItemPower}
                                    arrayItem={arrPower}
                                    remain={genStatComp.generalCntPower - realStatComp.realCntPower}
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
                                    eraseItem={eraseItemVideo}
                                    arrayItem={arrVideo}
                                    remain={genStatComp.generalCntVideo - realStatComp.realCntVideo}
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
                                    eraseItem={eraseItemSsd}
                                    arrayItem={arrSsd}
                                    remain={genStatComp.generalCntSsd - realCntSsd}
                                    haveManySlot={haveSlotSsd}
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
                                    eraseItem={eraseItemRam}
                                    arrayItem={arrRam}
                                    remain={genStatComp.generalCntRam - realCntRam}
                                    haveManySlot={haveSlotRam}
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
                                    eraseItem={eraseItemHdd}
                                    arrayItem={arrHdd}
                                    remain={genStatComp.generalCntSata - realStatComp.realCntSata}
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