import React from 'react'
import {connect} from 'react-redux'
import Computer from './Computer'
import {
    fetchComputerThunkCreator, isSaveButtonPress,
    setDataComputer,
    StateComputer, TAllArrayItems,
    toggleError, TSetDataComputer
} from '../../../Redux/computerReducer'
import {AppStateType} from "../../../Redux/reduxStore";
import {GenStatCompArrayType, GenStatCompType, RealStatComp} from "../Cabinet";

export interface AllState extends AllStateToProps, DispatchProps {}

class ComputerContainer extends React.Component<AllState>{
    componentDidMount() {
        this.props.isSaveButtonPress(false)
    }

    toggleS = (truth:boolean) => {
        this.props.toggleError(truth)
    }

    saveStateComputer = (currentState:TAllArrayItems):void => {
        this.props.setDataComputer(currentState)
    }

    dropStateComputer = (stateRedux:TAllArrayItems):void => {
        this.props.setDataComputer(stateRedux)
    }


    render() {
        return(
            <Computer
                {...this.props}
                saveStateComputer ={this.saveStateComputer}
                dropStateComputer = {this.dropStateComputer}
            />
        )
    }
}

interface StateProps {
    state: StateComputer
}
 interface PropsToProps {
    realStatComp: RealStatComp
    genStatComp: GenStatCompType
    genStatCompArray: GenStatCompArrayType
    realCntSsd: number
    realCntRam: number
}

export interface AllStateToProps extends StateProps, PropsToProps {}
interface DispatchProps {
    fetchComputerThunkCreator: () => any
    toggleError: (truth:boolean) => void
    setDataComputer: TSetDataComputer,
    isSaveButtonPress: (press:boolean) => void
}

let mapStateToProps = (state:AppStateType, props:PropsToProps):AllStateToProps => {
    return({
        realStatComp: props.realStatComp,
        genStatComp: props.genStatComp,
        genStatCompArray: props.genStatCompArray,
        realCntSsd: props.realCntSsd,
        realCntRam: props.realCntRam,
        state: state.computer,
    })
}

export default connect(mapStateToProps, {
    fetchComputerThunkCreator,
    toggleError,
    setDataComputer,
    isSaveButtonPress
}as DispatchProps)(ComputerContainer)