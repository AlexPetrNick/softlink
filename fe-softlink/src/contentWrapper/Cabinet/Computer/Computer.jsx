import React, { useState } from "react";
import schema from '../../../image/scheme.jpg'
import ComputerNameItem from './ComputerNameItem'
import SaveButton from './SaveButton/SaveButton'


let Computer = (props) => {
    var elementsLength = document.getElementsByClassName('incorrect').length

    console.log(elementsLength)


    let stateComp = props.state
    let mother = stateComp.mother[0].model
    let cpu = stateComp.cpu[0]
    let video = stateComp.video[0]

    let ram = stateComp.ram.map((item) => {
        return (String(item.brand) + ' ' + String(item.model))
    })
    let ramList = ram.map((item) => {
        return(
            <div className="computer__data__item">{item}</div>
        )
    })

    let ssd = stateComp.ssd.map((item) => {
        return (String(item.brand) + ' ' + String(item.model))
    })
    let ssdList = ssd.map((item) => {
        return(
            <div className="computer__data__item">{item}</div>
        )
    })

    let generalCntPower = 1
    let generalCntCpu = stateComp.mother[0].cpu
    let generalCntMother = 1
    let generalCntVideo = parseInt(stateComp.mother[0].pcie16)
    let generalCntDdr3 = stateComp.mother[0].ddr3
    let generalCntDdr3L = stateComp.mother[0].ddr3L
    let generalCntDdr4 = stateComp.mother[0].ddr4
    let generalCntRam = parseInt(generalCntDdr3) + parseInt(generalCntDdr3L) + parseInt(generalCntDdr4)
    let generalCntM2 = stateComp.mother[0].m2_cnt
    let generalCntSata = stateComp.mother[0].sata_cnt
    let generalCntPcie = stateComp.mother[0].pcie4
    let generalCntMSata = stateComp.mother[0].msata_cnt
    let generalCntSsd = parseInt(generalCntM2) + parseInt(generalCntSata) + parseInt(generalCntPcie) + parseInt(generalCntMSata)
    let realCntSsd = stateComp.remainM2 + stateComp.remainMSata + stateComp.remainSata + stateComp.remainPcie4
    let realCntMother = stateComp.mother[0].id != 0 ? 1 : 0
    let realCntCpu = stateComp.remainCpu
    let realCntVideo = stateComp.remainVideo
    let realCntPower = generalCntPower - stateComp.remainPower
    let hdd = stateComp.hdd[0]
    let power = stateComp.power[0]
    let ramSlot = stateComp.remainDdr3 + stateComp.remainDdr3L + stateComp.remainDdr4
    return(
        <div className="user__computer">
            <div className="computer__schema">
                <img src={schema}  />
                <SaveButton text="Сохранить" cntError={elementsLength}/>
                <div className="droppingChanges">Сбросить</div>
            </div>
            <div></div>
            <div className="computer__data">

                <ComputerNameItem toggle={props.toggleS} text='Материнка' cntReal={realCntMother} cntFix ={generalCntMother} />
                <div className="computer__data__item">{mother}</div>             
                <ComputerNameItem toggle={props.toggleS} text='Процессор' cntReal={realCntCpu} cntFix ={generalCntCpu} />
                <div className="computer__data__item">{cpu.brand} {cpu.model}</div>
                <ComputerNameItem toggle={props.toggleS} text='Видеокарта' cntReal={realCntVideo} cntFix ={generalCntVideo} />
                <div className="computer__data__item">{video.graph_proc}</div>
                <div className="computer__data__name">
                    <ComputerNameItem toggle={props.toggleS} text='Оперативная' cntReal={ramSlot} cntFix ={generalCntRam} />
                    <ComputerNameItem toggle={props.toggleS} text='DDR3' cntReal={stateComp.remainDdr3} cntFix ={generalCntDdr3} />
                    <ComputerNameItem toggle={props.toggleS} text='DDR3L' cntReal={stateComp.remainDdr3L} cntFix ={generalCntDdr3L} />
                    <ComputerNameItem toggle={props.toggleS} text='DDR4' cntReal={stateComp.remainDdr4} cntFix ={generalCntDdr4} />
                </div>
                {ramList}
                <div className="computer__data__name">
                    <ComputerNameItem toggle={props.toggleS} text='SSD' cntReal={realCntSsd} cntFix ={generalCntSsd} />
                    <ComputerNameItem toggle={props.toggleS} text='M2' cntReal={stateComp.remainM2} cntFix ={generalCntM2} />
                    <ComputerNameItem toggle={props.toggleS} text='Sata' cntReal={stateComp.remainSata} cntFix ={generalCntSata} />
                    <ComputerNameItem toggle={props.toggleS} text='PCI-E' cntReal={stateComp.remainPcie4} cntFix ={generalCntPcie} />
                    <ComputerNameItem toggle={props.toggleS} text='mSata' cntReal={stateComp.remainMSata} cntFix ={generalCntMSata} />
                </div>
                {ssdList}
                <div className="computer__data__item">{ssd.brand} {ssd.model}</div>
                <ComputerNameItem toggle={props.toggleS} text='Жесткий диск' cntReal={stateComp.remainSata} cntFix ={generalCntSata} />
                <div className="computer__data__item">{hdd.brand} {hdd.model}</div>
                <ComputerNameItem toggle={props.toggleS} text='Блок питания' cntReal={realCntPower} cntFix ={1} />
                <div className="computer__data__item">{power.brand} {power.model}</div>
                </div>
        </div>
    )
}


export default Computer