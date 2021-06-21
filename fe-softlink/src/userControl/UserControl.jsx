import React from 'react';
import {apiUser} from '../apiDAL/DAL';
import './User.css';

const UserControl = (props) => {

	let onClicklogIn = () => {
		let user = props.state.correctLogin
		let pass = props.state.correctPassword

		apiUser.authorization(user, pass)
			.then(js => {
				if(!js.detail){
					props.authorization(true)
					return js
				}
			}).then(json => {
				apiUser.getDataUser()
					.then(js => {
						props.setDataUser(js)
					})	
			})
			.catch(err => {
				props.setError(err.detail)
			});
			
			props.setCorrLogin(null);
			props.setCorrPassword(null);
	}

	
	let onChangeLogin = () => {
		let textLogin = document.getElementById("fieldlogin").value
		props.setCorrLogin(textLogin)
	}

	let onChangePassword = () => {
		let textPassword = document.getElementById("fieldpass").value
		props.setCorrPassword(textPassword)
	}


	return (
		<div className="session___control">
			<div className="alert__error__login" hidden='true'>
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
						<a className="notst__link__green" href="#">Регистрация</a>
					</div>
				</div>
			</div>
			<div className="fill__right"></div>
		</div>
	);
}


export default UserControl;