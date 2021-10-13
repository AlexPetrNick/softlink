import React, {FC, useState} from 'react';
import {apiUser} from '../apiDAL/DAL';
import './User.css';
import {InisStateAuthType} from "../Redux/authReducer";
import {initStateTypeUserControl} from "../Redux/userControlReducer";
import RegistrationModal from "./Registration/RegistrationModal";
import {useHistory} from 'react-router-dom';
import {TextField} from "@material-ui/core";
import {useForm} from "react-hook-form";

type UserControlPropsType = {
    state: initStateTypeUserControl
    setCorrLogin: (correctLogin: string | null) => void
    setCorrPassword: (correctPassword: string | null) => void
    stateAuth: InisStateAuthType
    setError: (err: string | null) => void
    authorization: (toggle: boolean) => void
    setDataUser: (data: object) => void
}

const UserControl: FC<UserControlPropsType> = (props: UserControlPropsType) => {
    let [activeModal, setActiveModal] = useState(false)
    let [stateAdded, setAddedMenu] = useState(true)
    console.log("user control пользователь не залогинен")

    const {register, watch, formState: {errors}} = useForm()

    let onClicklogIn = () => {
        let user = props.state.correctLogin
        let pass = props.state.correctPassword

        apiUser.authorization(user as any, pass as any)
            .then(js => {
                if (!js.detail) {
                    props.authorization(true)
                }
            })
            .catch(err => {
                props.setError(err.detail)
            });
        props.setCorrLogin(null);
        props.setCorrPassword(null);
    }

    const history = useHistory()


    const getRegister = () => {
        history.push("/register/s1")
    }
    const setAcive = () => {
        setActiveModal(true)
    }
    const onClick = () => {
        getRegister()
        setAcive()
    }
    const seeAdded = (val: boolean) => {
        if (stateAdded) {
            setAddedMenu(false)
        } else {
            setAddedMenu(true)
        }
        console.log(stateAdded)
    }
    return (
        <div className="session___control">
            <div className="fill__left__right"></div>
            <div className="site__name__label">SoftLink</div>
            <div onClick={() => seeAdded(true)} className="menu__for__using">
                <div className="test__add__menu">sdfasdfasdfsadfasdf</div>
                <div hidden={stateAdded}>
                    <div className="top__working_add__area" >
                        <div className="area__form__working__add">
                            <form className="login__form" action="">
                                <input type="text"/>
                                <input type="text"/>
                                <input type="button"/>
                            </form>
                        </div>
                        <div className="area__text__working__add">
                            <span>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores at exercitationem itaque iure laborum nobis perspiciatis porro quas totam veniam! </span>
                        </div>
                    </div>
                </div>
            </div>
            {activeModal && <RegistrationModal setActiveModal={setActiveModal} activeModal={activeModal}/>}
            <div className="button__registraton_lk">
                <a onClick={() => {
                    onClick()
                }} className="notst__link__green" href="#">Регистрация</a>
            </div>
            <div className="fill__left__right">1</div>
        </div>
    );
}


export default UserControl;

/*
<input onChange={onChangeLogin} value={props.state.correctLogin} type="text" id="fieldlogin" className="temp__input" placeholder="login" />
<input onChange={onChangePassword} value={props.state.correctPassword} type="text" id="fieldpass" className="temp__input" placeholder="password" />
<div className="button_login" onClick={ onClicklogIn }>Вход</div>
<div className="registration__menu">

</div>*/
