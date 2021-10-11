import React, {FC, useState} from "react";
import {makeStyles} from "@material-ui/core";
import RegisterForm from "./FormRegistration/RegisterForm";
import { useHistory } from "react-router-dom";

type Props = {
    activeModal: boolean,
    setActiveModal: (activeModel:boolean) => void
}

const useStyles = makeStyles(theme => ({
    registrationModal: {
        zIndex: 9999,
        position: "absolute",
        backgroundColor: "rgba(0,0,0,0.41)",
        width: "100vw",
        height: "100vh",
        top: "0",
        left: "0",
        display: "flex",
        justifyContent: "center",
        alignItems: "center"
    },
    registrationModalClose: {
        opacity: "0",
    },
    registrationWindow: {
        borderRadius: "20px",
        backgroundColor: "#d1d1d1",
        boxShadow: "0 0 20px green"
    }
}))

const RegistrationModal: FC<Props> = ({activeModal, setActiveModal}) => {
    const {registrationWindow, registrationModal, registrationModalClose} = useStyles()
    console.log(activeModal)




    return(
        <div className={activeModal ? registrationModal : registrationModalClose}>
            <div className={registrationWindow}>
                <RegisterForm setActiveModal={setActiveModal} />
            </div>
        </div>
    )
}

export default RegistrationModal