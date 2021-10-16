import React from 'react';
import {NavLink} from "react-router-dom";
import {initStateTypeUserControl} from "../Redux/userControlReducer";

type PropsUserControll = {
    state: initStateTypeUserControl
    logOut: () => void
}

const UserControl: React.FC<PropsUserControll> = (props: PropsUserControll) => {

    console.log("usercontrol пользователь залогинен")


    let onClickExit = () => {
        props.logOut()
        localStorage.removeItem('access')
        localStorage.removeItem('refresh')
    }

    return (
        <div className="session___control">
            <div className="fill__left"></div>
            <div className="login__part">
                <div className="site__name__label">SoftLink</div>
                <span className="text__green">Пользователь</span>
                <span className="text__green">{props.state.firstName}</span>
                <div className="button_login" onClick={onClickExit}>Выход</div>
                <div className="registration__menu">
                    <div className="button__registraton_lk">
                        <NavLink to="/cabinet">Кабинет</NavLink>
                    </div>
                </div>
            </div>
            <div className="fill__right"></div>
        </div>
    );
}

export default UserControl;