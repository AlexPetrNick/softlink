import React from 'react';
import {NavLink} from "react-router-dom";

const UserControl = (props) => {

	window.state = props

	return (
		<div className="session___control">
			<div className="fill__left"></div>
			<div className="login__part">
				<div className="site__name__label">SoftLink</div>
				<span className="text__green">Пользователь</span>
				<span className="text__green">{props.state.login}</span>
				<div className="button_login">Выход</div>
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