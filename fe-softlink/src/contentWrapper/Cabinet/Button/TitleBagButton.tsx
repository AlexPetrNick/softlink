import {FC} from "react";

type PropsType = {
    nameTitle:string
    up: string
    openClose: (e:any) => void
}

let TitleBagButton: FC<PropsType> = (props:PropsType) => {
    
    return (
        <div className="bug_title">
            <div>{props.nameTitle}</div>
            <img className="img__roll" src={props.up} width="30" onClick={(e) => {props.openClose(e)}}/>
        </div>
    )
}


export default TitleBagButton