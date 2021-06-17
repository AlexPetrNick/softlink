import React from 'react';

const AddedMenu = () => {
	return (
	<div id="popup" className="popup">
		<a href="#" className="popup__area"></a>
		<div className="popup__body">
			<form action="{% url 'login' %}" className="popup__form" method="POST">
				<div className="auth__title">Вход на сайт</div>
				<div className="auth__login__label">Имя пользователя</div>
				<input name="username" type="text" className="auth__login__field" />
				<div className="auth__pass__label">Пароль</div>
				<input name="password" type="text" className="auth__pass__field" />
				<input type="submit" className="button__submit" />
				<div className="added__menu">Забыл пароль?</div>
			</form>
		</div>
	</div>
	);
}

export default AddedMenu;