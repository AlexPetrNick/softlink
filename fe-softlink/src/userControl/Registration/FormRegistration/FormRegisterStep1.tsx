import {Button, InputAdornment, makeStyles, TextField} from "@material-ui/core";
import ClearIcon from "@mui/icons-material/Clear";
import CheckSharpIcon from "@mui/icons-material/CheckSharp";
import React, {FC} from "react";
import {useForm} from "react-hook-form";
import { useHistory } from "react-router-dom";
import {useState} from "./styleState";
import {allState} from "./RegistrationContainer";


export const FormRegisterStep1: FC<allState> = (props) => {
    const {register, handleSubmit, formState: {errors}, watch} = useForm({
        mode: "onChange"
    });

    const history = useHistory()
    const clickNext = () => {
        history.push("/register/s2")
        props.setStepOne(loginText, nameText, pass, rePass)
    }


    let not_error = (Boolean(errors.loginRef || errors.nameReg))
    let haveErrorLog = !!errors.loginRef
    let haveErrorName = !!errors.nameReg
    let haveErrorPass = !!errors.passReg

    let loginText = watch('loginRef')
    let nameText = watch('nameReg')
    let pass = watch('passReg')
    let rePass = watch('rePassReg')
    let isPassAndRePassIdentity = pass === rePass
    let fieldsNull = loginText && nameText && pass && rePass
    console.log(!!loginText)
    console.log(!!nameText)
    console.log(!!pass)
    console.log(!!rePass)
    console.log(!!fieldsNull)




    const {
        fieldsName,
        textField,
        buttonSubmit,
        formRegistration,
        textTitle
    } = useState()

    return (
        <form className={formRegistration}>
            <h1 className={textTitle}>Регистрация</h1>
            <TextField
                {...register('loginRef', {required: true, minLength: 2})}
                className={textField}
                id="loginRef"
                type="text"
                label="Логин"
                variant="outlined"
                margin="normal"
                defaultValue={props.state.login}
                helperText={haveErrorLog && "Имя должно быть больше 2 символов"}
                error={haveErrorLog}
                InputProps={{
                    endAdornment: (
                        <InputAdornment position="start">
                            {haveErrorLog ?
                                <ClearIcon sx={{color: "red"}}/> :
                                <CheckSharpIcon sx={{color: loginText && "green"}}/>
                            }
                        </InputAdornment>
                    )
                }}
                required
            />
            <div className={fieldsName}></div>
            <TextField
                {...register('nameReg', {required: true, minLength: 2})}
                className={textField}
                error={haveErrorName}
                defaultValue={props.state.firstName}
                helperText={haveErrorName && "Имя должно быть больше 2 символов"}
                InputProps={{
                    endAdornment: (
                        <InputAdornment position="start">
                            {haveErrorName ?
                                <ClearIcon sx={{color: "red"}}/> :
                                <CheckSharpIcon sx={{color: nameText && "green"}}/>
                            }
                        </InputAdornment>
                    )
                }}
                id="nameReg"
                type="text"
                label="Имя"
                variant="outlined"
                margin="normal"
                required
            />
            <TextField
                {...register('passReg', {required: true, minLength: 1})}
                helperText={haveErrorPass && "Пароль должен быть больше 1 символов"}
                error={haveErrorPass}
                id="passReg"
                defaultValue={props.state.password}
                type="password"
                label="Пароль"
                variant="outlined"
                margin="normal"
                required
            />
            <TextField
                {...register('rePassReg', {required: true, minLength: 10})}
                helperText={!isPassAndRePassIdentity && "Повторный пароль должен совпадать с паролем"}
                error={!isPassAndRePassIdentity}
                id="rePassReg"
                type="password"
                defaultValue={props.state.rePassword}
                label="Повторите пароль"
                variant="outlined"
                margin="normal"
                required
            />
            <Button
                onClick={() => clickNext()}
                className={buttonSubmit}
                type="button"
                variant="contained"
                disabled={!isPassAndRePassIdentity || not_error || !fieldsNull}
            >Следующая</Button>
        </form>
    )
}


