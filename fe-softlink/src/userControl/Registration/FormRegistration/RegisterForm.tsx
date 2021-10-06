import React, {FC} from "react";
import {makeStyles} from "@material-ui/core";
import Form from "./Form";
import {useForm} from "react-hook-form";
import {Input} from "./Input";



const RegisterForm: FC = () => {
    const {register,handleSubmit} = useForm({
        mode: "onBlur"
    });

    return (
        <Form>
            <div>
            </div>
            <div>
                <Input
                    {...register('login', { required: true })}
                    id="loginReg"
                    type="text"
                    label="Логин"
                    name="loginRef"
                />
            </div>
            <div>
            </div>
            <div>
                <Input
                    {...register('login', { required: true })}
                    id="nameReg"
                    type="text"
                    label="Имя"
                    name="nameReg"
                />
            </div>
            <div>
                <span>Пароль</span>
            </div>
            <div>
                <input type="text"/>
            </div>
            <div>
                <span>Повторите пароль</span>
            </div>
            <div>
                <input type="text"/>
            </div>
            <div>
                <input type="submit" />
            </div>
        </Form>
    )
}

export default RegisterForm