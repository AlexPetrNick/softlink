import React, {FC} from "react";
import {setError} from "../../../Redux/authReducer";

type PropsComputer = {
    cntReal: number
    cntFix : number
    text: string
    cntError: number

    setCntError?: any
}

let ComputerNameItem: FC<PropsComputer> = (props:PropsComputer):any => {

    let cntError = props.cntError


    let correctText = (cntReal:number, cntFix:number) => {
        if ((cntReal == cntFix) && cntFix != 0 ) {
            return 'correct'
        } else if (cntReal > cntFix && props.setCntError) {
            props.setCntError(cntError++)
            return 'incorrect'
        } else {
            return 'passive'
        }
    }
    let funcCorrect = (stateText:string, text:string, cntReal:number, cntFix:number) => {
        if (stateText == 'correct') {
            return (
                <div className="computer__data__name correct">{text} (Слоты {cntReal}/{cntFix})</div>
            )
        } else if (stateText == 'incorrect') {
            return (
                <div className="computer__data__name incorrect">{text} (Слоты {cntReal}/{cntFix})</div>
            )
        } else if (stateText == 'passive') {
            return (
                <div className="computer__data__name">{text} (Слоты {cntReal}/{cntFix})</div>
            )
        } else {
            <></>
        } 
    }

    return(
        funcCorrect(correctText(props.cntReal, props.cntFix), props.text, props.cntReal, props.cntFix)
    )
}

export default ComputerNameItem