import {Button, InputAdornment, makeStyles, TextField} from "@material-ui/core";
import ClearIcon from "@mui/icons-material/Clear";
import CheckSharpIcon from "@mui/icons-material/CheckSharp";
import {FC} from "react";
import {useForm} from "react-hook-form";
import {useHistory} from "react-router-dom";
import {useState} from "./styleState";
import {allState} from "./RegistrationContainer";


export const FormRegisterStep2: FC<allState> = (props) => {
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
        props.setStepTwo(phoneText, emailText, aboutText)
    }
    const nextPage = () => {
        history.push("/register/confirm")
        props.setStepTwo(phoneText, emailText, aboutText)
    }
    const height = 50

    let phoneText = watch('phone')
    let emailText = watch('email')
    let aboutText = watch('about')

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
                defaultValue={props.state.phone}
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
                defaultValue={props.state.email}
                variant="outlined"
                margin="normal"
            />
            <TextField
                {...register('about', {required: true, minLength: 10})}
                id="about"
                type="text"
                label="Расскажите про себя"
                variant="outlined"
                defaultValue={props.state.about}
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
                    onClick={() => nextPage()}
                    type="button"
                    className={buttonSubmitTwo}
                    variant="contained"
                >Следующая</Button>
            </div>
        </form>
    )
}


