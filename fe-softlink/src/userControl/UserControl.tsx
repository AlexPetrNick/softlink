import React, {FC, useState} from 'react';
import {apiUser} from '../apiDAL/DAL';
import './User.css';
import {InisStateAuthType} from "../Redux/authReducer";
import {initStateTypeUserControl} from "../Redux/userControlReducer";
import RegistrationModal from "./Registration/RegistrationModal";
import {useHistory} from 'react-router-dom';
import {useForm} from "react-hook-form";
// @ts-ignore
import pictureUser from '../image/userPictur.png'
import {Button, TextField} from "@material-ui/core";
import {makeStyles} from "@material-ui/core";
import {IDispatchStateToProps, PropsAuthentificateUserType} from "./UserControlContainer";

interface UserControlPropsType extends IDispatchStateToProps {
    state: initStateTypeUserControl
    stateAuth: InisStateAuthType
}

const useStyle = makeStyles((theme) => ({
    buttonAuth: {
        marginTop: "10px",
        backgroundColor: "white",
        height: "15%",
        '&:hover': {
            backgroundColor: "green"
        },
    },
}))


const UserControl: FC<UserControlPropsType> = (props: UserControlPropsType) => {
    let [activeModal, setActiveModal] = useState(false)
    let [stateAdded, setAddedMenu] = useState(true)
    console.log("user control пользователь не залогинен")

    const {register, watch, formState: {errors}} = useForm()
    const {buttonAuth} = useStyle()

    let onClicklogIn = (login: string, password: string) => {
        apiUser.authorization(login, password)
            .then(js => {
                console.log("js")
                if (!js.detail) {
                    props.authorization(true)
                }
                window.location.reload()
                return js
            })
            .catch(err => {
                console.log("err")
                props.setError(err.detail)
            });
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
    }

    let wtLogin = watch('login')
    let wtPass = watch('password')

    return (
        <div className="session___control">
            <div className="fill__left__right"></div>
            <div className="site__name__label">SoftLink</div>
            <div className="menu__for__using">
                <div onClick={() => seeAdded(true)} className="add__menu__title">
                    <div className="visiter__info">
                        <img className="visiter__picture" src={pictureUser}/>
                        <div className="visiter__name">
                            <div className="text__visiter__name">Неизвестный</div>
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
                    <div className="top__working_add__area">
                        <div className="area__form__working__add">
                            <form className="login__form" action="">
                                <div className="title__auth__visiter">Авторизация</div>
                                <input
                                    {...register("login")}
                                    type="text"
                                    className="text__visiter__input"
                                    placeholder="Логин"
                                />
                                <input
                                    {...register("password")}
                                    className="text__visiter__input"
                                    placeholder="Пароль"
                                    type="text"
                                />
                                <Button
                                    onClick={() => onClicklogIn(wtLogin, wtPass)}
                                    className={buttonAuth}
                                    type="button">Войти</Button>
                                <div className=""></div>
                            </form>
                        </div>
                        <div className="area__text__working__add">
                            <span>
                                После авторизации вам будет доступно: <br/>
                                * Кабинет и его возможности <br/>
                                * Добавление железа в кабинет <br/>
                                * Комментировать новости <br/>
                            </span>
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
            <div className="fill__left__right"></div>
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
