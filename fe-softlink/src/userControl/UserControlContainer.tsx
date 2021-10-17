import React from 'react';
import { connect } from 'react-redux';
import UserControl  from './UserControl'
import UserControlAuth from './UserControlAuth'
import {
    initStateTypeUserControl,
    SET_DATA_USER,
    setCorrLogin,
    setCorrPassword,
    setDataUser
} from '../Redux/userControlReducer'
import {setError, authorization, logOut, InisStateAuthType} from '../Redux/authReducer'
import {AppStateType} from "../Redux/reduxStore";
import {ItemPowerType, StateComputer} from "../Redux/computerReducer";



export interface PropsAuthentificateUserType extends IMapStateToProps,IDispatchStateToProps {}

class AuthentificateUser extends React.Component<PropsAuthentificateUserType>{

    render() {
        console.log("AuthentificateUser")
        return(
        <>
            { String(localStorage.getItem('access')).length > 10 ?
            <UserControlAuth
                state = {this.props.allState}
                logOut = {this.props.logOut}
                stateComp={this.props.stateComp}
             /> :
            <UserControl
                state = {this.props.allState}
                stateAuth  = {this.props.stateAuth}
                setError = {this.props.setError}
                authorization = {this.props.authorization}
                setDataUser = {this.props.setDataUser}
                logOut = {this.props.logOut}
            />
        }
        </>
        )
    }
}

export interface IMapStateToProps {
    allState: initStateTypeUserControl
    stateAuth: InisStateAuthType
    stateComp: StateComputer
}

export interface IDispatchStateToProps {
    setError: (err: string | null) => void
    authorization: (toggle: boolean) => void
    setDataUser: (id: number,
                  username: string,
                  first_name: string,
                  last_name: string,
                  email: string,
                  about: string,
                  cabinet: number,
                  computer: string) => void
    logOut: () => void,
}

let mapStateToProps = (state:AppStateType):IMapStateToProps => {
    return {
        allState: state.pageUser,
        stateAuth: state.auth,
        stateComp: state.computer
    }
}


export const UserControlContainer = connect(mapStateToProps, {
    setError,
    authorization,
    setDataUser,
    logOut
} as IDispatchStateToProps)(AuthentificateUser)


