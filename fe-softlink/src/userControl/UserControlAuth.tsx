import React, {useState} from 'react';
import {NavLink} from "react-router-dom";
import {initStateTypeUserControl} from "../Redux/userControlReducer";
import pictureUser from "../image/userPictur.png";
import PowerPlace from "../contentWrapper/Cabinet/Computer/Button/PowerPlace";
import {StateComputer} from "../Redux/computerReducer";
import ComputerNameItem from "../contentWrapper/Cabinet/Computer/ComputerNameItem";

type PropsUserControll = {
    state: initStateTypeUserControl
    logOut: () => void
    stateComp: StateComputer
    setNullUser: () => void
}

const UserControl: React.FC<PropsUserControll> = (props: PropsUserControll) => {
    let [stateAdded, setAddedMenu] = useState(true)
    let [cntError, setCntError] = useState(props.stateComp.cntError)
    console.log("usercontrol пользователь залогинен")
    let onClickExit = () => {
        props.logOut()
        props.setNullUser()
        localStorage.removeItem('access')
        localStorage.removeItem('refresh')
    }
    const seeAdded = (val: boolean) => {
        if (stateAdded) {
            setAddedMenu(false)
        } else {
            setAddedMenu(true)
        }
    }
    let stateComp = props.stateComp
    let remainPower = stateComp.remainPower
    let allPower = stateComp.power.length ? stateComp.power[0].power_all : 0


    return (
        <div className="session___control">
            <div className="fill__left__right"></div>
            <div className="site__name__label">SoftLink</div>
            <div className="menu__for__using">
                <div className="add__menu__title">
                    <div className="visiter__info">
                        <img className="visiter__picture" src={pictureUser}/>
                        <div className="visiter__name">
                            <div className="text__visiter__name">{props.state.username}</div>
                        </div>
                    </div>
                    <div onClick={() => seeAdded(true)} className="helper__text">
                        <div className="">
                            {stateAdded ?
                                "Открыть меню" :
                                "Закрыть меню"
                            }
                        </div>
                    </div>
                </div>
                <div hidden={stateAdded}>
                    <div className="top__working_add__area__auth">
                        <div className="fio__user">
                            {props.state.first_name + props.state.last_name}
                        </div>
                        <div className="power__computer">
                            <span>Употребляемая мощность</span>
                            <div className="power__place__up">
                                <PowerPlace
                                    remainPower={remainPower}
                                    powerAll={allPower}
                                />
                            </div>
                        </div>
                        <div className="info__free__slot">
                            <div className="info__free__slot__inner">
                                <ComputerNameItem cntError={cntError} text='Материнка'
                                                  cntReal={stateComp.realCntMother}
                                                  cntFix={stateComp.generalCntMother}/>
                                <ComputerNameItem cntError={cntError} text='Процессор'
                                                  cntReal={stateComp.realCntCpu} cntFix={stateComp.generalCntCpu}/>
                                <ComputerNameItem cntError={cntError} text='Видеокарта'
                                                  cntReal={stateComp.realCntVideo} cntFix={stateComp.generalCntVideo}/>
                                <ComputerNameItem cntError={cntError} text='Оперативная'
                                                  cntReal={stateComp.realCntRam} cntFix={stateComp.generalCntRam}/>
                                <ComputerNameItem cntError={cntError} text='DDR3'
                                                  cntReal={stateComp.realCntDdr3} cntFix={stateComp.generalCntDdr3}/>
                                <ComputerNameItem cntError={cntError} text='DDR3L'
                                                  cntReal={stateComp.realCntDdr3L} cntFix={stateComp.generalCntDdr3L}/>
                                <ComputerNameItem cntError={cntError} text='DDR4'
                                                  cntReal={stateComp.realCntDdr4} cntFix={stateComp.generalCntDdr4}/>

                            </div>
                            <div className="info__free__slot__inner">
                                <ComputerNameItem cntError={cntError} text='SSD'
                                                  cntReal={stateComp.realCntSata}
                                                  cntFix={stateComp.generalCntSsd}/>
                                <ComputerNameItem cntError={cntError} text='M2'
                                                  cntReal={stateComp.realCntM2} cntFix={stateComp.generalCntM2}/>
                                <ComputerNameItem cntError={cntError} text='Sata'
                                                  cntReal={stateComp.realCntSata} cntFix={stateComp.generalCntSata}/>
                                <ComputerNameItem cntError={cntError} text='PCI-E'
                                                  cntReal={stateComp.realCntPcie4} cntFix={stateComp.generalCntPcie}/>
                                <ComputerNameItem cntError={cntError} text='mSata'
                                                  cntReal={stateComp.realCntMSata} cntFix={stateComp.generalCntMSata}/>
                                <ComputerNameItem cntError={cntError} text='Жесткий диск'
                                                  cntReal={stateComp.realCntHdd} cntFix={stateComp.generalCntSata}/>
                                <ComputerNameItem cntError={cntError} text='Блок питания'
                                                  cntReal={stateComp.realCntPower} cntFix={stateComp.generalCntPower}/>
                            </div>
                        </div>
                        <div className="button_unlogin" onClick={onClickExit}>Выход</div>
                    </div>
                </div>
            </div>
            <div className="button__registraton_lk">
                <div className="title__cabinet">
                    <NavLink to="/cabinet">Кабинет</NavLink>
                </div>
            </div>
            <div className="fill__left__right"></div>
        </div>
    );
}

export default UserControl;