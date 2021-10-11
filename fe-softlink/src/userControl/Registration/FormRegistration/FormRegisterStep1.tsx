import {Button, InputAdornment, makeStyles, TextField} from "@material-ui/core";
import ClearIcon from "@mui/icons-material/Clear";
import CheckSharpIcon from "@mui/icons-material/CheckSharp";
import React, {FC} from "react";
import {useForm} from "react-hook-form";
import { useHistory } from "react-router-dom";
import {useState} from "./styleState";

type Props = {
    register:any
    errors:any
    watch:any
}

export const FormRegisterStep1: FC<Props> = (props) => {
    const {register, handleSubmit, formState: {errors}, watch} = useForm({
        mode: "onChange"
    });

    const history = useHistory()
    const clickNext = () => {
        history.push("/register/s2")
    }


    let not_error = (Boolean(errors.loginRef || errors.nameReg))
    let haveErrorLog = !!errors.loginRef
    let haveErrorName = !!errors.nameReg
    let haveErrorPass = !!errors.passReg

    let loginTextSize = watch('loginRef')
    let nameTextSize = watch('nameReg')
    let pass = watch('passReg')
    let rePass = watch('rePassReg')
    let isPassAndRePassIdentity = pass === rePass

    const {
        fieldsName,
        textField,
        buttonSubmit,
        formRegistration
    } = useState()

    return (
        <form className={formRegistration}>
            <TextField
                {...register('loginRef', {required: true, minLength: 8})}
                className={textField}
                id="loginRef"
                type="text"
                label="Логин"
                variant="outlined"
                margin="normal"
                helperText={haveErrorLog && "Имя должно быть больше 8 символов"}
                error={haveErrorLog}
                InputProps={{
                    endAdornment: (
                        <InputAdornment position="start">
                            {haveErrorLog ?
                                <ClearIcon sx={{color: "red"}}/> :
                                <CheckSharpIcon sx={{color: loginTextSize && "green"}}/>
                            }
                        </InputAdornment>
                    )
                }}
            />
            <div className={fieldsName}></div>
            <TextField
                {...register('nameReg', {required: true, minLength: 8})}
                className={textField}
                error={haveErrorName}
                helperText={haveErrorName && "Имя должно быть больше 8 символов"}
                InputProps={{
                    endAdornment: (
                        <InputAdornment position="start">
                            {haveErrorName ?
                                <ClearIcon sx={{color: "red"}}/> :
                                <CheckSharpIcon sx={{color: nameTextSize && "green"}}/>
                            }
                        </InputAdornment>
                    )
                }}
                id="nameReg"
                type="text"
                label="Имя"
                variant="outlined"
                margin="normal"
            />
            <TextField
                {...register('passReg', {required: true, minLength: 10})}
                helperText={haveErrorPass && "Пароль должен быть больше 10 символов"}
                error={haveErrorPass}
                id="passReg"
                type="password"
                label="Пароль"
                variant="outlined"
                margin="normal"
            />
            <TextField
                {...register('rePassReg', {required: true, minLength: 10})}
                helperText={!isPassAndRePassIdentity && "Повторный пароль должен совпадать с паролем"}
                error={!isPassAndRePassIdentity}
                id="rePassReg"
                type="password"
                label="Повторите пароль"
                variant="outlined"
                margin="normal"
            />
            <Button
                onClick={() => clickNext()}
                className={buttonSubmit}
                type="button"
                variant="contained"
                disabled={not_error}
            >Следующая</Button>
        </form>
    )
}


