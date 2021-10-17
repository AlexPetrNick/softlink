import React, {useState} from 'react';
import {NavLink} from "react-router-dom";
import {initStateTypeUserControl} from "../Redux/userControlReducer";
import pictureUser from "../image/userPictur.png";
import {useForm} from "react-hook-form";
import {Button, Progress} from "semantic-ui-react";
import {PowerProgressBar} from "./FormField/PowerProgressBar";
import PowerPlace from "../contentWrapper/Cabinet/Computer/Button/PowerPlace";
import {ItemPowerType} from "../Redux/computerReducer";

type PropsUserControll = {
    state: initStateTypeUserControl
    logOut: () => void
    remainPower: number
    powerAllEquip: Array<ItemPowerType>
}

const UserControl: React.FC<PropsUserControll> = (props: PropsUserControll) => {
    let [stateAdded, setAddedMenu] = useState(true)
    console.log("usercontrol пользователь залогинен")
    let onClickExit = () => {
        props.logOut()
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

    let remainPower = props.remainPower
    let allPower = props.powerAllEquip.length ? props.powerAllEquip[0].power_all : 0


    return (
        <div className="session___control">
            <div className="fill__left__right"></div>
            <div className="site__name__label">SoftLink</div>
            <div className="menu__for__using">
                <div onClick={() => seeAdded(true)} className="add__menu__title">
                    <div className="visiter__info">
                        <img className="visiter__picture" src={pictureUser}/>
                        <div className="visiter__name">
                            <div className="text__visiter__name">{props.state.username}</div>
                        </div>
                    </div>
                    <div className="helper__text">
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
                        <div className="info__free__slot"></div>
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