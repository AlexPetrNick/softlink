import {Button, TextField} from "@material-ui/core";
import {useForm} from "react-hook-form";
import {useStyle} from "./styleState";
import React, {FC} from "react";
import {allState} from "./RegistrationContainer";
import {useHistory} from "react-router-dom";
import {apiUser} from "../../../apiDAL/DAL";


export const CompletedFormRegistration: FC<allState> = (props) => {
    const {register, handleSubmit, formState: {errors}, watch} = useForm({
        mode: "onChange"
    })
    const {
        formRegistration,
        formRegistrationBack,
        textField,
        buttonsStepTwo,
        buttonSubmitTwo,
        textTitle
    } = useStyle()
    const state = props.state
    const history = useHistory()
    const prevPage = () => {
        history.push("/register/confirm")
    }
    const nextPage = () => {
        history.push("/register/end")
        apiUser.registration(
            state.login,
            state.password,
            state.email,
            state.firstName,
            state.lastName,
            state.phone,
            state.about
        )
    }

    console.log(state)
    return (
        <form className={formRegistration}>
            <div className={formRegistrationBack}>
                <TextField
                    className={textField}
                    id="loginRef"
                    type="text"
                    label="Логин"
                    defaultValue={state.login}
                    variant="outlined"
                    margin="normal"
                    inputProps={
                        { readOnly: true, }
                    }
                />
                <TextField
                    className={textField}
                    id="nameReg"
                    type="text"
                    label="Имя"
                    defaultValue={state.firstName}
                    variant="outlined"
                    margin="normal"
                    inputProps={
                        { readOnly: true, }
                    }
                />
                <TextField
                    className={textField}
                    id="lastNameReg"
                    type="text"
                    label="Фамилия"
                    defaultValue={state.lastName}
                    variant="outlined"
                    margin="normal"
                    inputProps={
                        { readOnly: true, }
                    }
                />
                <TextField
                    className={textField}
                    id="passReg"
                    type="text"
                    label="Пароль"
                    defaultValue={state.password}
                    variant="outlined"
                    margin="normal"
                    inputProps={
                        { readOnly: true, }
                    }
                />
                <TextField
                    className={textField}
                    id="email"
                    type="text"
                    label="E-mail"
                    variant="outlined"
                    defaultValue={state.email}
                    margin="normal"
                    inputProps={
                        { readOnly: true, }
                    }
                />
                <TextField
                    className={textField}
                    id="phone"
                    type="text"
                    label="Телефон"
                    defaultValue={state.phone}
                    variant="outlined"
                    margin="normal"
                    inputProps={
                        { readOnly: true, }
                    }
                />
                <TextField
                    className={textField}
                    id="about"
                    type="text"
                    label="Расскажите про себя"
                    defaultValue={state.about}
                    variant="outlined"
                    margin="normal"
                    inputProps={
                        { readOnly: true, }
                    }
                />
            </div>
            <div className={buttonsStepTwo}>
                <Button
                    onClick={() => prevPage()}
                    type="button"
                    variant="contained"
                    className={buttonSubmitTwo}
                >Предыдущая</Button>
                <Button
                    onClick={() => nextPage()}
                    type="button"
                    className={buttonSubmitTwo}
                    variant="contained"
                >Следующая</Button>
            </div>
        </form>
    )
}