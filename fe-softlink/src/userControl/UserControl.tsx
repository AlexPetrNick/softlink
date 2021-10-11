import React, {FC, useState} from 'react';
import {apiUser} from '../apiDAL/DAL';
import './User.css';
import {InisStateAuthType} from "../Redux/authReducer";
import {initStateTypeUserControl} from "../Redux/userControlReducer";
import RegistrationModal from "./Registration/RegistrationModal";
import { useHistory } from 'react-router-dom';

type UserControlPropsType = {
	state: initStateTypeUserControl
	setCorrLogin: (correctLogin: string | null) => void
	setCorrPassword: (correctPassword: string | null) => void
	stateAuth: InisStateAuthType
	setError: (err: string | null) => void
	authorization: (toggle: boolean) => void
	setDataUser: (data: object) => void
}

const UserControl:FC<UserControlPropsType> = (props:UserControlPropsType) => {
	let [ activeModal, setActiveModal] = useState(false)
	console.log("user control пользователь не залогинен")

	let onClicklogIn = () => {
		let user = props.state.correctLogin
		let pass = props.state.correctPassword

		apiUser.authorization(user as any, pass as any)
			.then(js => {
				if(!js.detail){
					props.authorization(true)
				}
			})
			.catch(err => {
				props.setError(err.detail)
			});
			props.setCorrLogin(null);
			props.setCorrPassword(null);
	}

	
	let onChangeLogin = () => {
		let inputLogin = document.getElementById("fieldlogin") as HTMLInputElement
		let textLogin = inputLogin.value
		props.setCorrLogin(textLogin)
	}

	let onChangePassword = () => {
		let inputPassword = document.getElementById("fieldpass") as HTMLInputElement
		let textPassword = inputPassword.value as string
		props.setCorrPassword(textPassword)
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
	return (
		<div className="session___control">
			<div className="alert__error__login" hidden>
				<div className="alert__text">{props.stateAuth.error}</div>
			</div>
			<div className="fill__left"></div>
			<div className="login__part">
				<div className="site__name__label">SoftLink</div>
				<input onChange={onChangeLogin} value={props.state.correctLogin} type="text" id="fieldlogin" className="temp__input" placeholder="login" />
				<input onChange={onChangePassword} value={props.state.correctPassword} type="text" id="fieldpass" className="temp__input" placeholder="password" />
				<div className="button_login" onClick={ onClicklogIn }>Вход</div>
				<div className="registration__menu">
					<div className="button__registraton_lk">
						<a onClick={() => {onClick()}} className="notst__link__green" href="#">Регистрация</a>
					</div>
				</div>
				{ activeModal && <RegistrationModal setActiveModal={setActiveModal} activeModal={activeModal}/>}
			</div>
			<div className="fill__right"></div>
		</div>
	);
}


export default UserControl;