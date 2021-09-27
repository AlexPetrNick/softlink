import React from 'react'
import {connect} from 'react-redux'
import Computer from './Computer'
import {fetchComputerThunkCreator, StateComputer, toggleError} from '../../../Redux/computerReducer'
import {AppStateType} from "../../../Redux/reduxStore";
import {GenStatCompArrayType, GenStatCompType, RealStatComp} from "../Cabinet";

interface AllState extends AllStateToProps, DispatchProps {}

class ComputerContainer extends React.Component<AllState>{

    toggleS = (truth:boolean) => {
        this.props.toggleError(truth)
    }

    render() {
        return(
            <Computer {...this.props} />
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
}

let mapStateToProps = (state:AppStateType, props:PropsToProps):AllStateToProps => {
    return({
        realStatComp: props.realStatComp,
        genStatComp: props.genStatComp,
        genStatCompArray: props.genStatCompArray,
        realCntSsd: props.realCntSsd,
        realCntRam: props.realCntRam,
        state: state.computer
    })
}

export default connect(mapStateToProps, {
    fetchComputerThunkCreator,
    toggleError
}as DispatchProps)(ComputerContainer)