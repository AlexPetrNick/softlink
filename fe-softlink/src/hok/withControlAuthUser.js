import React from "react"
import {apiUser} from '../apiDAL/DAL'

export const withControlAuthUser = (Component) => {
    let CheckAuth = (props) => {
        if(props.stateAuth.isAuthorization) {
            apiUser.getUser(1)
                .then(js => {
                    console.log(js)
                })
        }
        
        return <Component {...props}/>
    }
    return CheckAuth
}