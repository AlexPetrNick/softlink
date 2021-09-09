import React, { useState } from "react";
import schema from '../../../image/scheme.jpg'
import ComputerNameItem from './ComputerNameItem'
import SaveButton from './Button/SaveButton'
import DropButton from './Button/DropButton'
import PowerPlace from './Button/PowerPlace'


let Computer = (props) => {

    

    let [stateComputer, setStateComputer] = useState(props.state)

    let differentState = JSON.stringify(stateComputer) === JSON.stringify(props.state)

    let elementsLength = Boolean(document.getElementsByClassName('incorrect').length)
    let stateComp = props.state

    let mother = stateComp.mother[0] ? "ID" + stateComp.mother[0].id + " " + stateComp.mother[0].model : null
    let cpu =  stateComp.cpu[0] ? "ID" + stateComp.cpu[0].id + " " + stateComp.cpu[0].model + " " + stateComp.cpu[0].brand : null
    let video = stateComp.video[0] ? "ID" + stateComp.video[0].id + " " + stateComp.video[0].graph_proc : null
    let power = stateComp.power[0] ? "ID" + stateComp.power[0].id + " " + stateComp.power[0].model + "" + stateComp.power[0].brand : null

    let genStatComp = props.genStatComp
    let realStatComp = props.realStatComp
    let genStatCompArray = props.genStatCompArray

    let ram = stateComp.ram.length ? stateComp.ram.map((item) => {
        return ('ID' + String(item.id) + ' ' + String(item.brand) + ' ' + String(item.model))
    }).map((item) => {
        return(
            <div className="computer__data__item">{item}</div>
        )
    }) : (<div className="computer__data__item"></div>)

    let ssd = stateComp.ssd.length ? stateComp.ssd.map((item) => {
        return ('ID' + String(item.id) + ' ' + String(item.brand) + ' ' + String(item.model))
    }).map((item) => {
        return(
            <div className="computer__data__item">{item}</div>
        )
    }) : (<div className="computer__data__item"></div>)

    let hdd = stateComp.hdd.length ? stateComp.hdd.map((item) => {
        return ('ID' + String(item.id) + ' ' + String(item.brand) + ' ' + String(item.model))
    }).map((item) => {
        return(
            <div className="computer__data__item">{item}</div>
        )
    }) : (<div className="computer__data__item"></div>)


    let correctGetSumm = (mass) => {
        let a = 0;
        let res = mass.length ? mass.map((d)=>a+=Number(d.power), a=0).reverse()[0] : 0
        console.log(res)
        return res
    }

    let allPower = stateComp.power.length ? stateComp.power[0].power_all : 0
    let allPowerVideo = correctGetSumm(stateComp.video)
    let allPowerRam = correctGetSumm(stateComp.ram)
    let allPowerHdd = correctGetSumm(stateComp.hdd)
    let allPowerSsd = correctGetSumm(stateComp.ssd)
    let allPowerCpu = correctGetSumm(stateComp.cpu)
    let allPowerMother = correctGetSumm(stateComp.mother)
    let remainPower = allPower ? allPower - (allPowerVideo + allPowerRam + allPowerHdd + allPowerSsd + allPowerCpu + allPowerMother) : 0


    return(
        <div className="user__computer">
            <div className="computer__schema">
                <img className="computer__image" src={schema}  />
                <SaveButton text="Сохранить" isChange={differentState} cntError={elementsLength}/>
                <DropButton text="Сбросить1" isChange={differentState} stateLocal={stateComputer} />
            </div>
                <PowerPlace 
                    powerAll={allPower} 
                    remainPower={remainPower} 
                />
            <div className="computer__data">

                <ComputerNameItem toggle={props.toggleS} text='Материнка' cntReal={props.realStatComp.realCntMother} cntFix ={genStatComp.generalCntMother} />
                <div className="computer__data__item">{mother}</div>             
                <ComputerNameItem toggle={props.toggleS} text='Процессор' cntReal={realStatComp.realCntCpu} cntFix ={genStatComp.generalCntCpu} />
                <div className="computer__data__item">{cpu} </div>
                <ComputerNameItem toggle={props.toggleS} text='Видеокарта' cntReal={realStatComp.realCntVideo} cntFix ={genStatComp.generalCntVideo} />
                <div className="computer__data__item">{video}</div>
                <div className="computer__data__name">
                    <ComputerNameItem toggle={props.toggleS} text='Оперативная' cntReal={props.realCntRam} cntFix ={genStatCompArray.generalCntRam} />
                    <ComputerNameItem toggle={props.toggleS} text='DDR3' cntReal={realStatComp.realCntDdr3} cntFix ={genStatComp.generalCntDdr3} />
                    <ComputerNameItem toggle={props.toggleS} text='DDR3L' cntReal={realStatComp.realCntDdr3L} cntFix ={genStatComp.generalCntDdr3L} />
                    <ComputerNameItem toggle={props.toggleS} text='DDR4' cntReal={realStatComp.realCntDdr4} cntFix ={genStatComp.generalCntDdr4} />
                </div>
                {ram}
                <div className="computer__data__name">
                    <ComputerNameItem toggle={props.toggleS} text='SSD' cntReal={props.realCntSsd} cntFix ={genStatCompArray.generalCntSsd} />
                    <ComputerNameItem toggle={props.toggleS} text='M2' cntReal={realStatComp.realCntM2} cntFix ={genStatComp.generalCntM2} />
                    <ComputerNameItem toggle={props.toggleS} text='Sata' cntReal={realStatComp.realCntSata} cntFix ={genStatComp.generalCntSata} />
                    <ComputerNameItem toggle={props.toggleS} text='PCI-E' cntReal={realStatComp.realCntPcie4} cntFix ={genStatComp.generalCntPcie} />
                    <ComputerNameItem toggle={props.toggleS} text='mSata' cntReal={realStatComp.realCntMSata} cntFix ={genStatComp.generalCntMSata} />
                </div>
                {ssd}
                <ComputerNameItem toggle={props.toggleS} text='Жесткий диск' cntReal={realStatComp.realCntHdd} cntFix ={genStatComp.generalCntSata} />
                {hdd}
                <ComputerNameItem toggle={props.toggleS} text='Блок питания' cntReal={realStatComp.realCntPower} cntFix ={genStatComp.generalCntPower} />
                <div className="computer__data__item">{power}</div>
                </div>
        </div>
    )
}


export default Computer