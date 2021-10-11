
import {connect} from 'react-redux'
import RegisterForm from "./RegisterForm";
import {AppStateType} from "../../../Redux/reduxStore";
import {
    setNullStateRegistration,
    setStepOne,
    setStepTwo,
    TinitStateReg,
    TsetNullStateRegistration, TsetStepOne, TsetStepTwo
} from "../../../Redux/registrationReducer";
import React from "react";

export interface allState extends IreturnProps, ImapDispatchToProps {}

class RegistrationContainer extends React.Component<allState> {

    render() {
        return (
            <RegisterForm
                state={this.props.state}
                setActiveModal={this.props.setActiveModal}
                setNullStateRegistration = {this.props.setNullStateRegistration}
                setStepOne = {this.props.setStepOne}
                setStepTwo = {this.props.setStepTwo}
            />
        )
    }

}


interface ImapStateToProps extends ImapPropsToProps{
    state: TinitStateReg,

}

interface ImapPropsToProps {
    setActiveModal: (activeModel: boolean) => void
}

interface IreturnProps extends ImapStateToProps, ImapPropsToProps {}

const mapStateToProps = (state:AppStateType, props:ImapPropsToProps):IreturnProps => {
    return {
        setActiveModal: props.setActiveModal,
        state: state.registration
    }
}

interface ImapDispatchToProps{
    setNullStateRegistration: () => TsetNullStateRegistration
    setStepOne: (
        login: string,
        firstName: string,
        password: string,
        rePassword: string
    ) => TsetStepOne
    setStepTwo: (
        phone: string,
        email: string,
        about: string
    ) => TsetStepTwo
}


export default connect(mapStateToProps, {
    setNullStateRegistration,
    setStepOne,
    setStepTwo
} as ImapDispatchToProps)(RegistrationContainer)