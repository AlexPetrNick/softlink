import {FC} from "react";

type Props = {
    title: string
    items: string
}

export const ItemUser:FC<Props> = (props:Props) => {


    return (
        <div className="wrapper__user__info">
            <div className="">{props.title}</div>
            <div className="user__items">{props.items}</div>
        </div>
    )

}