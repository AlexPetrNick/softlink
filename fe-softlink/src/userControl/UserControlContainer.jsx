import React from 'react';
import { connect } from 'react-redux';
import UserControl  from './UserControl'
import UserControlAuth from './UserControlAuth'
import {logIn, logOut, setCorrLogin, setCorrPassword, setIdUser} from '../Redux/userControlReducer'
import {setError, authorization} from '../Redux/authReducer'



class AuthentificateUser extends React.Component{
    
    
    render() {
        return(
        <>
            { this.props.stateAuth.isAuthorization ?
            <UserControlAuth
                state = {this.props.allState}
                logOut = {this.props.logOut}
             /> :
            <UserControl
                state = {this.props.allState}
                logIn = {this.props.logIn}
                setCorrLogin = {this.props.setCorrLogin}
                setCorrPassword = {this.props.setCorrPassword}
                stateAuth  = {this.props.stateAuth}
                setError = {this.props.setError}
                authorization = {this.props.authorization}
                setIdUser = {this.props.setIdUser}
            />
        }
        </>
        )
    }
}



let mapStateToProps = (state) => {
    return {
        allState: state.pageUser,
        stateAuth: state.auth
    }
}


export const UserControlContainer = connect(mapStateToProps, {
    logIn,
    logOut,
    setCorrLogin,
    setCorrPassword,
    setError,
    authorization,
    setIdUser
})(AuthentificateUser)


