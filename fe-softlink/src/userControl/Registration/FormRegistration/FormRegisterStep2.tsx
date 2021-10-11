import {Button, InputAdornment, makeStyles, TextField} from "@material-ui/core";
import ClearIcon from "@mui/icons-material/Clear";
import CheckSharpIcon from "@mui/icons-material/CheckSharp";
import {FC} from "react";
import {useForm} from "react-hook-form";
import {useHistory} from "react-router-dom";
import {useState} from "./styleState";


type Props = {
    register: any
    errors: any
    watch: any
}

export const FormRegisterStep2: FC<Props> = (props) => {
    const {register, handleSubmit, formState: {errors}, watch} = useForm({
        mode: "onChange"
    });
    const {
        formRegistration,
        buttonsStepTwo,
        textField,
        buttonSubmitTwo
    } = useState()
    const history = useHistory()
    const prevPage = () => {
        history.push("/register/s1")
    }
    const height = 50
    return (
        <form className={formRegistration}>
            <TextField
                {...register('phone', {required: true, pattern: /^((\+7|7|8)+([0-9]){10})$/})}
                className={textField}
                helperText={!!errors.phone && "Введите корректный телефон"}
                error={!!errors.phone}
                id="phone"
                type="text"
                label="Телефон"
                variant="outlined"
                margin="normal"
            />
            <TextField
                {...register('email', {required: true, pattern: /^[-\w.]+@([A-z0-9][-A-z0-9]+\.)+[A-z]{2,4}$/})}
                helperText={!!errors.email && "Введите корректный email"}
                error={!!errors.email}
                id="email"
                type="text"
                label="E-mail"
                variant="outlined"
                margin="normal"
            />
            <TextField
                {...register('about', {required: true, minLength: 10})}
                id="about"
                type="text"
                label="Расскажите про себя"
                variant="outlined"
                margin="normal"
                style={{ height }}
            />
            <div className={buttonsStepTwo}>
                <Button
                    onClick={() => prevPage()}
                    type="button"
                    variant="contained"
                    className={buttonSubmitTwo}
                >Предыдущая</Button>
                <Button
                    type="button"
                    className={buttonSubmitTwo}
                    variant="contained"
                >Следующая</Button>
            </div>
        </form>
    )
}


