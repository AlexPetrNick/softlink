import React, {FC, useState} from "react";
import schema from '../../../image/scheme.jpg'
import ComputerNameItem from './ComputerNameItem'
import SaveButton from './Button/SaveButton'
import DropButton from './Button/DropButton'
import PowerPlace from './Button/PowerPlace'
import {AllState, AllStateToProps} from "./ComputerContainer";
import {
    DataTypeWithoutPower,
    TAllArrayItems
} from "../../../Redux/computerReducer";


interface PropsComputer extends AllState {
    saveStateComputer: (currentState:TAllArrayItems) => void
    dropStateComputer: (stateRedux:TAllArrayItems) => void
}

let Computer: FC<PropsComputer> = (props:PropsComputer) => {

    let [stateComputer, setStateComputer] = useState(props.state)
    let [cntError, setCntError] = useState(props.state.cntError)
    let differentState = JSON.stringify(stateComputer) != JSON.stringify(props.state)

    const IterCntErr = (cntError:number) => {
        setCntError(cntError++)
    }

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

    let allPower:number = stateComp.power.length ? stateComp.power[0].power_all : 0

    return(
        <div className="user__computer">
            <div className="computer__schema">
                <img className="computer__image" src={schema}  />
                <SaveButton
                    saveState={props.saveStateComputer}
                    text="Сохранить"
                    isChange={differentState}
                    cntError={cntError}
                    data={props.state}
                    buttonPress={props.isSaveButtonPress}
                    setStateLocal = {setStateComputer}
                />
                <DropButton
                    dropState={props.dropStateComputer}
                    text="Сбросить"
                    isChange={differentState}
                    stateLocal={stateComputer}
                    data = {stateComputer}
                    isButtonPress = {props.state.isSaveButtonPress}
                />
            </div>
                <PowerPlace 
                    powerAll={allPower} 
                    remainPower={props.state.remainPower}
                />
            <div className="computer__data">ComputerNameItem

                <ComputerNameItem cntError={cntError} setCntError={setCntError} text='Материнка' cntReal={props.realStatComp.realCntMother} cntFix ={genStatComp.generalCntMother} />
                <div className="computer__data__item">{mother}</div>             
                <ComputerNameItem cntError={cntError} setCntError={setCntError} text='Процессор' cntReal={realStatComp.realCntCpu} cntFix ={genStatComp.generalCntCpu} />
                <div className="computer__data__item">{cpu} </div>
                <ComputerNameItem cntError={cntError} setCntError={setCntError} text='Видеокарта' cntReal={realStatComp.realCntVideo} cntFix ={genStatComp.generalCntVideo} />
                <div className="computer__data__item">{video}</div>
                <div className="computer__data__name">
                    <ComputerNameItem cntError={cntError} setCntError={IterCntErr} text='Оперативная' cntReal={props.realCntRam} cntFix ={genStatCompArray.generalCntRam} />
                    <ComputerNameItem cntError={cntError} setCntError={IterCntErr} text='DDR3' cntReal={realStatComp.realCntDdr3} cntFix ={genStatComp.generalCntDdr3} />
                    <ComputerNameItem cntError={cntError} setCntError={IterCntErr} text='DDR3L' cntReal={realStatComp.realCntDdr3L} cntFix ={genStatComp.generalCntDdr3L} />
                    <ComputerNameItem cntError={cntError} setCntError={IterCntErr} text='DDR4' cntReal={realStatComp.realCntDdr4} cntFix ={genStatComp.generalCntDdr4} />
                </div>
                {ram}
                <div className="computer__data__name">
                    <ComputerNameItem cntError={cntError} setCntError={IterCntErr} text='SSD' cntReal={realStatComp.realCntSata} cntFix ={genStatCompArray.generalCntSsd} />
                    <ComputerNameItem cntError={cntError} setCntError={IterCntErr} text='M2' cntReal={realStatComp.realCntM2} cntFix ={genStatComp.generalCntM2} />
                    <ComputerNameItem cntError={cntError} setCntError={IterCntErr} text='Sata' cntReal={realStatComp.realCntSata} cntFix ={genStatComp.generalCntSata} />
                    <ComputerNameItem cntError={cntError} setCntError={IterCntErr} text='PCI-E' cntReal={realStatComp.realCntPcie4} cntFix ={genStatComp.generalCntPcie} />
                    <ComputerNameItem cntError={cntError} setCntError={IterCntErr} text='mSata' cntReal={realStatComp.realCntMSata} cntFix ={genStatComp.generalCntMSata} />
                </div>
                {ssd}
                <ComputerNameItem cntError={cntError} setCntError={IterCntErr} text='Жесткий диск' cntReal={realStatComp.realCntHdd} cntFix ={genStatComp.generalCntSata} />
                {hdd}
                <ComputerNameItem cntError={cntError} setCntError={IterCntErr} text='Блок питания' cntReal={realStatComp.realCntPower} cntFix ={genStatComp.generalCntPower} />
                <div className="computer__data__item">{power}</div>
                </div>
        </div>
    )
}


export default Computer