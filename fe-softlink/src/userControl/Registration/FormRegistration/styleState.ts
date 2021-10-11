import {makeStyles} from "@material-ui/core";

export const useState = makeStyles((theme) => ({
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
    },
    buttonsStepTwo: {
        marginTop: "10px",
        display: "flex",
        justifyContent: "space-around"
    },
    about: {
        height: "300px",
        whiteSpace: "pre-wrap"
    },
    buttonSubmitTwo: {
        marginTop: "10px",
        '&:hover': {
            backgroundColor: "green"
        },
    },
    formRegistrationBack: {
        display: "flex",
        flexDirection: "column",
        margin: "15px",
        justifyContent: "space-around",
        backgroundColor: "white",
        padding: "10px",
        borderRadius: "20px"
    }
}))