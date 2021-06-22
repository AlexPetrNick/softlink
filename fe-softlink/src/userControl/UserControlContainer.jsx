import React from 'react';
import { connect } from 'react-redux';
import UserControl  from './UserControl'
import UserControlAuth from './UserControlAuth'
import {setCorrLogin, setCorrPassword, setDataUser} from '../Redux/userControlReducer'
import {setError, authorization, logOut} from '../Redux/authReducer'



class AuthentificateUser extends React.Component{
    
    
    render() {
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



let mapStateToProps = (state) => {
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
})(AuthentificateUser)


