import React from 'react';
import { connect } from 'react-redux';
import UserControl  from './UserControl'
import UserControlAuth from './UserControlAuth'
import {initStateTypeUserControl, setCorrLogin, setCorrPassword, setDataUser} from '../Redux/userControlReducer'
import {setError, authorization, logOut, InisStateAuthType} from '../Redux/authReducer'
import {AppStateType} from "../Redux/reduxStore";



interface PropsAuthentificateUserType extends IMapStateToProps,IDispatchStateToProps {}

class AuthentificateUser extends React.Component<PropsAuthentificateUserType>{


    render() {
        console.log("AuthentificateUser")
        return(
        <>
            { String(localStorage.getItem('access')).length > 10 ?
            <UserControlAuth
                state = {this.props.allState}
                logOut = {this.props.logOut}
                setCorrLogin = {this.props.setCorrLogin}
                setCorrPassword = {this.props.setCorrPassword}
             /> :
            <UserControl
                state = {this.props.allState}
                setCorrLogin = {this.props.setCorrLogin}
                setCorrPassword = {this.props.setCorrPassword}
                stateAuth  = {this.props.stateAuth}
                setError = {this.props.setError}
                authorization = {this.props.authorization}
                setDataUser = {this.props.setDataUser}
            />
        }
        </>
        )
    }
}

export interface IMapStateToProps {
    allState: initStateTypeUserControl
    stateAuth: InisStateAuthType
}

export interface IDispatchStateToProps {
    setCorrLogin: (correctLogin: string | null) => void
    setCorrPassword: (correctPassword: string | null) => void
    setError: (err: string | null) => void
    authorization: (toggle: boolean) => void
    setDataUser: (data: object) => void
    logOut: () => void
}

let mapStateToProps = (state:AppStateType):IMapStateToProps => {
    return {
        allState: state.pageUser,
        stateAuth: state.auth
    }
}


export const UserControlContainer = connect(mapStateToProps, {
    setCorrLogin,
    setCorrPassword,
    setError,
    authorization,
    setDataUser,
    logOut
} as IDispatchStateToProps)(AuthentificateUser)


