import React, {FC} from 'react'
import {makeStyles} from "@material-ui/core";

const useStylesFormRegistration = makeStyles({
    formRegistration: {
        display: "flex",
        flexDirection: "column",
        margin: "15px",
        justifyContent: "space-between"
    }

})

const Form:FC = ({children, ...props}) => {

    const {formRegistration} = useStylesFormRegistration()

    return (
        <form className={formRegistration} {...props} >{children}</form>
    )
}


export default Form