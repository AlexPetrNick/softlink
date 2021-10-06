import React from 'react'
import Cabinet from './Cabinet'
import { connect } from 'react-redux';
import './cabinet.css'
import {
    getStateCabinetAC,
    updateCabinetAC,
    cabinetEraseItem,
    InitTypeCabinet,
    DataFromServerType, getCabinetThunkCreator
} from '../../Redux/cabinetReducer'
import {addItemInComputer, DataType, eraseItemInComputer, StateComputer} from '../../Redux/computerReducer'
import {AppStateType} from "../../Redux/reduxStore";
import {initStateTypeUserControl} from "../../Redux/userControlReducer";
  

export interface IContainerComponent extends IMapStateToProps, IDispatchStateToProps {}

class ContainerComponent extends React.Component<IContainerComponent>{
    componentDidMount() {
        this.props.getCabinetThunkCreator()
    }

    componentDidUpdate(){
        console.log("update")
    }

    render() {
        console.log("cabinet container")
        return (
            <Cabinet {...this.props} />
        )
    }
}


interface IMapStateToProps {
    stateComp: StateComputer,
    stateCabinet: InitTypeCabinet,
    stateUser: initStateTypeUserControl,
}

interface IDispatchStateToProps {
    getStateCabinetAC: (data:DataFromServerType) => void
    updateCabinetAC: (bol:boolean) => void
    addItemInComputer: (data:DataType) => void
    cabinetEraseItem: (idItem:number, itemType:number) => void
    eraseItemInComputer: (data:DataType) => void
    getCabinetThunkCreator: any
}

let mapStateToProps = (state:AppStateType):IMapStateToProps => {
    return {
        stateComp: state.computer,
        stateCabinet: state.pageCabinet,
        stateUser: state.pageUser,
    }
}

export default connect(mapStateToProps, {
    getStateCabinetAC,
    updateCabinetAC,
    addItemInComputer,
    cabinetEraseItem,
    eraseItemInComputer,
    getCabinetThunkCreator
} as IDispatchStateToProps)(ContainerComponent)