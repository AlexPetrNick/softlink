import React, {FC, useState} from 'react'


type PropsType = {
    text: string
    isChange?:boolean
    cntError: boolean
}

let SaveButton: FC<PropsType> = (props:PropsType) => {
    let cnts = props.cntError
    let buttonDis = (cntError:boolean) => {
        if (!cntError) {
            return (
            <div className="saveChanges" >{props.text}</div>
            )
        } else {
            return (
                <div className="saveChanges disabled" >{props.text}</div>
            )
        }
    }
    
    return (
        <>
        {buttonDis(cnts)}
        </>
    )
}

export default SaveButton