import React from "react"
import {apiCabinet} from '../apiDAL/DAL'

export const withCorrectCabinet = (Component) => {
    let CheckId = (props) => {
        console.log(props)  
        if (props.stateUser.cabinet_id != 0  && props.stateUser.cabinet_id && props.stateCabinet.updateCabinet) {
            props.updateCabinetAC(false)
            let temp = fetch("http://127.0.0.1:8000/api/cabinet/" + String(props.stateUser.cabinet_id))
            temp.then(resp => resp.json())
            .then(ans => {
                console.log(ans)
                props.getStateCabinetAC(ans)
            })
            /*apiCabinet.getStateCabinet(props.stateUser.cabinet_id)
                .then(resp => {
                    props.getStateCabinetAC(resp)
                })
            */
        }
            
        return <Component {...props}/>
    }
    return CheckId
}