import React, {FC, useState} from 'react'
import {StateComputer} from "../../../../Redux/computerReducer";

type PropsType = {
    text: string
    isChange: boolean
    stateLocal?: StateComputer
}


let DropButton: FC<PropsType>= (props:PropsType) => {


    let cnts = props.isChange
    

    let buttonDis = (temp:boolean) => {
        if (temp) {
            return (
            <div className="droppingChanges disabled" >{props.text}</div>
            )
        } else {
            return (
                <div className="droppingChanges" >{props.text}</div>
            )
        }
    }
    
    return (
        <>
        {buttonDis(cnts)}
        </>
    )
}

export default DropButton