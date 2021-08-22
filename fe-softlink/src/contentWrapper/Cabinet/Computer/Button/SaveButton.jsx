import React, { useState } from 'react'

let SaveButton = (props) => {
    let cnts = props.cntError
    let buttonDis = (cntError) => {
        if (cntError) {
            return (
            <div className="saveChanges" >{props.text}</div>
            )
        } else {
            return (
                <div className="saveChanges disabled" disabled >{props.text}</div>
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