import React from "react"
import {apiCabinet} from '../apiDAL/DAL'

export const withCorrectCabinet = (Component) => {
    let CheckId = (props) => {
        console.log(props)  
        if (props.stateUser.cabinet_id != 0  && props.stateUser.cabinet_id && props.stateCabinet.updateCabinet) {
            debugger
            props.updateCabinetAC(false)
            apiCabinet.getStateCabinet()
                .then(ans => {
                    props.getStateCabinetAC(ans)
                })
        }
            
        return <Component {...props}/>
    }
    return CheckId
}