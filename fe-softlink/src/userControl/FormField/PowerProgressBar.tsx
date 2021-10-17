import React, {FC} from "react";


type Props = {
    allPower: number,
    remainPower: number
}

export const PowerProgressBar:FC<Props> = () => {
    return (
        <>
            <div>300/400</div>
        </>
    )
}