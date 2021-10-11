import {Button, TextField} from "@material-ui/core";
import {useForm} from "react-hook-form";
import {useState} from "./styleState";
import {FC} from "react";
import {allState} from "./RegistrationContainer";
import {useHistory} from "react-router-dom";


export const CompletedFormRegistration: FC<allState> = (props) => {
    const {register, handleSubmit, formState: {errors}, watch} = useForm({
        mode: "onChange"
    })
    const {
        formRegistration,
        formRegistrationBack,
        textField,
        buttonsStepTwo,
        buttonSubmitTwo
    } = useState()

    const history = useHistory()
    const prevPage = () => {
        history.push("/register/confirm")
    }
    const nextPage = () => {
        history.push("/register/confirm")
    }

    console.log(props.state)
    return (
        <form className={formRegistration}>
            <div className={formRegistrationBack}>
                <TextField
                    className={textField}
                    id="loginRef"
                    type="text"
                    label="Логин"
                    defaultValue={props.state.login}
                    variant="outlined"
                    margin="normal"
                />
                <TextField
                    className={textField}
                    id="nameReg"
                    type="text"
                    label="Имя"
                    defaultValue={props.state.firstName}
                    variant="outlined"
                    margin="normal"
                />
                <TextField
                    className={textField}
                    id="passReg"
                    type="text"
                    label="Пароль"
                    defaultValue={props.state.password}
                    variant="outlined"
                    margin="normal"
                />
                <TextField
                    className={textField}
                    id="email"
                    type="text"
                    label="E-mail"
                    variant="outlined"
                    defaultValue={props.state.email}
                    margin="normal"
                />
                <TextField
                    className={textField}
                    id="phone"
                    type="text"
                    label="Телефон"
                    defaultValue={props.state.phone}
                    variant="outlined"
                    margin="normal"
                />
                <TextField
                    className={textField}
                    id="about"
                    type="text"
                    label="Расскажите про себя"
                    defaultValue={props.state.about}
                    variant="outlined"
                    margin="normal"
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