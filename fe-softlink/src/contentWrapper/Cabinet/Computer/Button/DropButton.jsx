import React, { useState } from 'react'

let DropButton = (props) => {
    let cnts = props.isChange
    let buttonDis = (temp) => {
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