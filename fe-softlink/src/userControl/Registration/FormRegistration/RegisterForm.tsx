import React, {FC} from "react";
import {makeStyles} from "@material-ui/core";
import {useForm} from "react-hook-form";
import {FormRegisterStep1} from "./FormRegisterStep1";
import {FormRegisterStep2} from "./FormRegisterStep2";
import ItemHardContainer from "../../../contentWrapper/ItemHard/ItemHardContainer";
import {NavLink, Route, Switch} from "react-router-dom";
import {allState} from "./RegistrationContainer";
import {CompletedFormRegistration} from "./CompletedFormRegistration";
import {ConfirmFormRegistration} from "./RegisterConfirm";
import {EndRegister} from "./EndRegister";

const useState = makeStyles((theme) => ({
    textTitle: {
        color: "black"
    },
    buttonClose: {
        alignSelf: "start",
        width: "25px",
        height: "21px",
        borderRadius: "15px",
        backgroundColor: "#919191",
        paddingTop: "2px",
        cursor: "pointer",
        alignContent: "flex-end",
        marginLeft: "auto",
        '&:hover': {
            backgroundColor: "green"
        },
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
    },
    fieldsName: {
        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-start",
        alignItems: "flex-start"
    },
    errorLogin: {
        marginTop: "-10px",
        color: "red"
    },
    textField: {
        width: "500px"
    },
    buttonSubmit: {
        marginTop: "10px",
        '&:hover': {
            backgroundColor: "green"
        },
    }
}))


const RegisterForm: FC<allState> = (props) => {
    const {
        textTitle,
        buttonClose,
    } = useState()

    const setActives = () => {
        props.setActiveModal(false)
    }
    const setNullRegister = () => {
        props.setNullStateRegistration()
    }

    const onClick = () => {
        setActives()
        setNullRegister()
    }

    return (
        <>
            <div onClick={() => onClick()} className={buttonClose}>X</div>

            <Switch>
                <Route path="/register/s1" render={() => <FormRegisterStep1 {...props} />}/>
                <Route path="/register/s2" render={() => <FormRegisterStep2 {...props} />}/>
                <Route path="/register/s3" render={() => <CompletedFormRegistration {...props} />}/>
                <Route path="/register/confirm" render={() => <ConfirmFormRegistration {...props} />}/>
                <Route path="/register/end" render={() => <EndRegister {...props} />}/>
            </Switch>
        </>
    )
}

export default RegisterForm


