import React, {FC, useState} from 'react'
import {StateComputer, TAllArrayItems} from "../../../../Redux/computerReducer";

type PropsType = {
    text: string
    isChange: boolean
    stateLocal?: StateComputer
    data: StateComputer
    isButtonPress: boolean

    dropState: (data:TAllArrayItems) => void
}


let DropButton: FC<PropsType>= (props:PropsType) => {

    let data = props.data
    let isChange = props.isChange
    const isButtonPress = props.isButtonPress
    const dataItems = {
        mother: data.mother,
        video: data.video,
        ssd: data.ssd,
        cpu: data.cpu,
        ram: data.ram,
        power: data.power,
        hdd: data.hdd
    }

    let buttonDis = (condition1:boolean, condition2:boolean) => {
        if (!condition1 || condition2) {
            return (
                <div onClick={() => props.dropState(dataItems)} className="droppingChanges disabled" >{props.text}</div>
            )
        } else {
            return (
                <div onClick={() => props.dropState(dataItems)}  className="droppingChanges" >{props.text}</div>
            )
        }
    }
    
    return (
        <>
        {buttonDis(isChange, isButtonPress)}
        </>
    )
}

export default DropButton