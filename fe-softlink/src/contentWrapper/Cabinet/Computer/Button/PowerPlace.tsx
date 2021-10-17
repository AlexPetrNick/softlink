import React, {FC} from 'react'

type PropsType = {
    powerAll: number
    remainPower: number
}

let PowerPlace: FC<PropsType> = (props:PropsType) => {
    let allPower = Number(props.powerAll)
    let remaindPower = props.remainPower
    let isYellow = remaindPower <= allPower*0.15 && remaindPower > 0
    let colorBorder = "green"
    let colorBack = "green"
    let colorAll = "green"
    console.log(remaindPower)
    let remaindUsed = (remaindPower*100) / allPower
    let remaindPercent = String(remaindUsed) + "%"
    if (remaindPower >= 0) {
        remaindPercent = String(remaindUsed) + "%"
    }else {
        remaindPercent = "0"
    }


    if  ((remaindPower <= 0) || (remaindPower == 0)) {
        colorBack = "red"
        colorBorder = "2px solid red"
        colorAll = "#ff907d"
    } else if (!isYellow) {
        colorBack = "green"
        colorBorder = "2px solid green"
        colorAll = "#67e329"
    } else {
        colorBack = "#aba800"
        colorBorder = "2px solid #aba800"
        colorAll = "#fff9a8"
    }

    let elemStylePower = {
        position: "relative",
        width: "95%",
        textAlign: "center",
        zIndex: "1",

        backgroundColor: colorAll,
        border: colorBorder
    }

    let elemStyleRemaind = {
        position: "absolute",
        left: "0",
        top: "0",
        width: remaindPercent,
        zIndex: "2",
        backgroundColor: colorBack,
        border: colorBorder
    }


    return (
        <div className="power__place" style={ elemStylePower  as any}>
            <p className="test__power">{String(String(remaindPower) + "/" + String(allPower))}</p>
            <div className="remaindPower"  style={ elemStyleRemaind  as any} ></div>
        </div>
    ) 
}

export default PowerPlace