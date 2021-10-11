import {Button, TextField} from "@material-ui/core";
import {useForm} from "react-hook-form";
import {useState} from "./styleState";
import {FC} from "react";
import {allState} from "./RegistrationContainer";
import {useHistory} from "react-router-dom";


export const ConfirmFormRegistration: FC<allState> = (props) => {
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
        history.push("/register/s2")
    }
    const nextPage = () => {
        history.push("/register/s3")
    }

    console.log(props.state)
    return (
        <form className={formRegistration}>
            <textarea
            > 
            </textarea>
            <input type="checkbox" value="test"/>
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