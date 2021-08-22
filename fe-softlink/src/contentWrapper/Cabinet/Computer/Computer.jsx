import React, { useState } from "react";
import schema from '../../../image/scheme.jpg'
import ComputerNameItem from './ComputerNameItem'
import SaveButton from './Button/SaveButton'
import DropButton from './Button/DropButton'


let Computer = (props) => {

    let [stateComputer, setStateComputer] = useState(props.state.mother[0])
    let differentState = JSON.stringify(stateComputer) === JSON.stringify(props.state.mother[0])
    console.log(differentState)
    let elementsLength = document.getElementsByClassName('incorrect').length
    
    let stateComp = props.state

    let mother = stateComp.mother[0].model
    let cpu = stateComp.cpu[0]
    let video = stateComp.video[0]
    let hdd = stateComp.hdd[0]
    let power = stateComp.power[0]

    let genStatComp = props.genStatComp
    let realStatComp = props.realStatComp

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
    
    let aa = {
        asdfsdf: 1
    }

    return(
        <div className="user__computer">
            <div className="computer__schema">
                <img src={schema}  />
                <SaveButton text="Сохранить" cntError={elementsLength}/>
                <DropButton text="Сбросить1" isChange={differentState} />
            </div>
            <div></div>
            <div className="computer__data">

                <ComputerNameItem toggle={props.toggleS} text='Материнка' cntReal={props.realStatComp.realCntMother} cntFix ={genStatComp.generalCntMother} />
                <div className="computer__data__item">{mother}</div>             
                <ComputerNameItem toggle={props.toggleS} text='Процессор' cntReal={realStatComp.realCntCpu} cntFix ={genStatComp.generalCntCpu} />
                <div className="computer__data__item">{cpu.brand} {cpu.model}</div>
                <ComputerNameItem toggle={props.toggleS} text='Видеокарта' cntReal={realStatComp.realCntVideo} cntFix ={genStatComp.generalCntVideo} />
                <div className="computer__data__item">{video.graph_proc}</div>
                <div className="computer__data__name">
                    <ComputerNameItem toggle={props.toggleS} text='Оперативная' cntReal={props.realCntRam} cntFix ={genStatComp.generalCntRam} />
                    <ComputerNameItem toggle={props.toggleS} text='DDR3' cntReal={realStatComp.realCntDdr3} cntFix ={genStatComp.generalCntDdr3} />
                    <ComputerNameItem toggle={props.toggleS} text='DDR3L' cntReal={realStatComp.realCntDdr3L} cntFix ={genStatComp.generalCntDdr3L} />
                    <ComputerNameItem toggle={props.toggleS} text='DDR4' cntReal={realStatComp.realCntDdr4} cntFix ={genStatComp.generalCntDdr4} />
                </div>
                {ramList}
                <div className="computer__data__name">
                    <ComputerNameItem toggle={props.toggleS} text='SSD' cntReal={props.realCntSsd} cntFix ={genStatComp.generalCntSsd} />
                    <ComputerNameItem toggle={props.toggleS} text='M2' cntReal={realStatComp.realCntM2} cntFix ={genStatComp.generalCntM2} />
                    <ComputerNameItem toggle={props.toggleS} text='Sata' cntReal={realStatComp.realCntSata} cntFix ={genStatComp.generalCntSata} />
                    <ComputerNameItem toggle={props.toggleS} text='PCI-E' cntReal={realStatComp.realCntPcie4} cntFix ={genStatComp.generalCntPcie} />
                    <ComputerNameItem toggle={props.toggleS} text='mSata' cntReal={realStatComp.realCntMSata} cntFix ={genStatComp.generalCntMSata} />
                </div>
                {ssdList}
                <div className="computer__data__item">{ssd.brand} {ssd.model}</div>
                <ComputerNameItem toggle={props.toggleS} text='Жесткий диск' cntReal={realStatComp.realCntSata} cntFix ={genStatComp.generalCntSata} />
                <div className="computer__data__item">{hdd.brand} {hdd.model}</div>
                <ComputerNameItem toggle={props.toggleS} text='Блок питания' cntReal={realStatComp.realCntPower} cntFix ={genStatComp.generalCntPower} />
                <div className="computer__data__item">{power.brand} {power.model}</div>
                </div>
        </div>
    )
}


export default Computer