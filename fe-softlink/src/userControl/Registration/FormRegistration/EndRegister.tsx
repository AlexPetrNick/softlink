import {Button} from "@material-ui/core";
import {useStyle} from "./styleState";
import {FC} from "react";
import {allState} from "./RegistrationContainer";
import {useHistory} from "react-router-dom";


export const EndRegister: FC<allState> = (props) => {

    const {
        buttonsStepTwo,
        buttonSubmitTwo
    } = useStyle()

    const state = props.state
    const history = useHistory()
    const prevPage = () => {
        history.push("/register/confirm")
    }

    const closeModal = () => {
        props.setActiveModal(false)
        props.setNullStateRegistration()
    }

    setTimeout(closeModal, 2000)

    console.log(state)
    return (
        <div className={buttonsStepTwo}>
            <h1>Завершена</h1>
        </div>
    )
}