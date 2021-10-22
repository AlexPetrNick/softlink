import React, {FC} from "react";


type TGetButton = {
    loginLen:string
    dataId:number
    itemsBag: Array<number|null>
    getItemFunc:() => void
    eraseItemFunc:()=>void
}

export const getButton = (loginLen:string, dataId:number, itemsBag: Array<number|null>, getItemFunc:() => void, eraseItemFunc:()=>void) => {
    const place = "Авторизуйтесь для возможности добавления в кабинет"
    if (loginLen.length) {
        if (itemsBag.includes(dataId)) {
            return (
                <button className="button__remove__item" onClick={eraseItemFunc}>&#10006;</button>
        )
        } else {
            return (
                <button className="button__add__item" onClick={getItemFunc}>&#10004;</button>
        )
        }
    } else {
        return (
            <button className="button__not__login__item" title={place}>X</button>
    )
    }
}