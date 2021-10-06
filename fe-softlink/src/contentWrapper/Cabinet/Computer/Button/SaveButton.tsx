import React, {FC, useState} from 'react'
import {StateComputer, TAllArrayItems} from "../../../../Redux/computerReducer";


type PropsType = {
    text: string
    isChange?:boolean
    cntError: number
    data: StateComputer

    saveState: (data:TAllArrayItems) => void
    buttonPress: (press:boolean) => void
    setStateLocal: any
}

let SaveButton: FC<PropsType> = (props:PropsType) => {

    let data = props.data
    let cntsErr = props.cntError
    let isChange = props.isChange
    const dataItems = {
        mother: data.mother,
        video: data.video,
        ssd: data.ssd,
        cpu: data.cpu,
        ram: data.ram,
        power: data.power,
        hdd: data.hdd
    }

    const saveStates = (dataItems:TAllArrayItems) => {
        props.saveState(dataItems)
        props.buttonPress(true)
        props.setStateLocal(data)
    }

    let buttonDis = (cntErr:number, condition2:boolean | undefined) => {

        console.log(cntErr)

        if (cntErr < 8 && condition2) {
            return (
                <button onClick={() => saveStates(dataItems)} className="saveChanges" >{props.text}</button>
            )
        } else {
            return (
                <button className="saveChanges disabled" >{props.text}</button>
            )
        }
    }
    
    return (
        <>
        {buttonDis(cntsErr, isChange)}
        </>
    )
}

export default SaveButton