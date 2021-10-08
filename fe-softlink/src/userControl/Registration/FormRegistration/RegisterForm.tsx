import React, {FC} from "react";
import {makeStyles, TextField} from "@material-ui/core";
import {useForm} from "react-hook-form";
import {yupResolver} from "@hookform/resolvers/yup";
import * as yup from "yup"

const useState = makeStyles((theme) => ({
    textTitle: {
        color: "black",
        display: "flex",

    },
    formRegistration: {
        display: "flex",
        flexDirection: "column",
        margin: "15px",
        justifyContent: "space-between"
    },
    button: {
        margin: theme.spacing(2, 0, 2),
        height: "50px"
    }
}))

const schema = yup.object().shape({
    loginReg: yup
        .string()
        .matches(/^$/, "First name not null")
        .required("Field required")
})

const RegisterForm = () => {

    const {textTitle, formRegistration, button} = useState()

    const {register, handleSubmit, formState: {errors}, watch} = useForm({
        mode: "onBlur"
    });

    const onSubmit = (data:any) => console.log(data)

    console.log(errors)

    return (
        <form onSubmit={handleSubmit(onSubmit)} className={formRegistration}>
            <div className={textTitle}>
                <h1>Регистрация</h1>
                <h3>X</h3>
            </div>
            <TextField
                {...register('loginRef', {required:true})}
                id="loginRef"
                type="text"
                label="Логин"
                variant="filled"
                margin="normal"
            ></TextField>
            <TextField
                {...register('nameReg', {required: true})}
                id="nameReg"
                type="text"
                label="Имя"
                variant="filled"
                margin="normal"
            ></TextField>
            <TextField
                {...register('passReg', {required: true})}
                id="passReg"
                type="text"
                label="Пароль"
                variant="filled"
                margin="normal"
            ></TextField>
            <TextField
                {...register('rePassReg', {required: true})}
                id="rePassReg"
                type="text"
                label="Повторите пароль"
                variant="filled"
                margin="normal"
            ></TextField>
            <input {...register('test')} type="text"/>
            <input type="submit" />
        </form>
    )
}

export default RegisterForm