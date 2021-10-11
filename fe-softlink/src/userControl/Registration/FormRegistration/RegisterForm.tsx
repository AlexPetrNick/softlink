import React, {FC} from "react";
import {makeStyles} from "@material-ui/core";
import {useForm} from "react-hook-form";
import {FormRegisterStep1} from "./FormRegisterStep1";
import {FormRegisterStep2} from "./FormRegisterStep2";
import ItemHardContainer from "../../../contentWrapper/ItemHard/ItemHardContainer";
import {NavLink, Route, Switch} from "react-router-dom";

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

type Props = {
    setActiveModal: (activeModel: boolean) => void
}

const RegisterForm: FC<Props> = (props) => {
    const {
        textTitle,
        buttonClose,
    } = useState()


    return (
        <>
            <div onClick={() => props.setActiveModal(false)} className={buttonClose}>X</div>
            <h1 className={textTitle}>Регистрация</h1>
            <Switch>
                <Route path="/register/s1" component={FormRegisterStep1}/>
                <Route path="/register/s2" component={FormRegisterStep2}/>
            </Switch>
        </>
    )
}

export default RegisterForm