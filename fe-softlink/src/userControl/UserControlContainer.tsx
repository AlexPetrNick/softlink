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
import {ItemPowerType} from "../Redux/computerReducer";



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
                remainPower={this.props.remainPower}
                powerAllEquip={this.props.powerAllEquip}
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
    remainPower: number
    powerAllEquip: Array<ItemPowerType>
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
        remainPower: state.computer.remainPower,
        powerAllEquip: state.computer.power
    }
}


export const UserControlContainer = connect(mapStateToProps, {
    setError,
    authorization,
    setDataUser,
    logOut
} as IDispatchStateToProps)(AuthentificateUser)


