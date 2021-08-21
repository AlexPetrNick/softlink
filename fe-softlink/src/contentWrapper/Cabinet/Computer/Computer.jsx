import React from "react";
import schema from '../../../image/scheme.jpg'


let Computer = (props) => {
    let stateComp = props.state
    console.dir(stateComp)
    let mother = stateComp.mother[0].model
    let cpu = stateComp.cpu[0]
    let video = stateComp.video[0]
    let ram = stateComp.ram.map((item) => {
        return (String(item.brand) + ' ' + String(item.model))
    })
    let aaa = ram.map((item) => {
        return(
            <div className="computer__data__item">{item}</div>
        )
    })
    let ssd = stateComp.ssd[0]
    let hdd = stateComp.hdd[0]
    let power = stateComp.power[0]
    let ramSlot = stateComp.remainDdr3 + stateComp.remainDdr3L + stateComp.remainDdr4
    return(
        <div className="user__computer">
            <div className="computer__schema">
                <img src={schema}  />
            </div>
            <div></div>
            <div className="computer__data">
                <div className="computer__data__name">Материнка (слоты: {stateComp.remainMother})</div>
                <div className="computer__data__item">{mother}</div>
                <div className="computer__data__name">Процессор (слоты: {stateComp.remainCpu})</div>
                <div className="computer__data__item">{cpu.brand} {cpu.model}</div>
                <div className="computer__data__name">Видеокарта (слоты: {stateComp.remainVideo})</div>
                <div className="computer__data__item">{video.graph_proc}</div>
                <div className="computer__data__name">
                    Оперативная (слоты: {ramSlot})<br />
                    DDR3: {stateComp.remainDdr3} <br />
                    DDR3L: {stateComp.remainDdr3L} <br />
                    DDR4: {stateComp.remainDdr4} <br />
                </div>
                {aaa}
                <div className="computer__data__name">
                    SSD (слоты: {stateComp.remainSata})<br />
                    M2: {stateComp.remainM2} <br />
                    Sata: {stateComp.remainSata} <br />
                    PCI-E: {stateComp.remainPcie4} <br />
                </div>
                <div className="computer__data__item">{ssd.brand} {ssd.model}</div>
                <div className="computer__data__name">Жесткий диск (слоты: {stateComp.remainSata})</div>
                <div className="computer__data__item">{hdd.brand} {hdd.model}</div>
                <div className="computer__data__name">Блок питания (слоты: {stateComp.remainPower})</div>
                <div className="computer__data__item">{power.brand} {power.model}</div>
                </div>
        </div>
    )
}


export default Computer