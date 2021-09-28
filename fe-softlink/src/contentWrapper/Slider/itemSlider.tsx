import {FC} from "react";


let ItemSlider:FC<any> = () => {
    return (
        <>
        <div className="inner__slider">
            <div className="title__slider"><b>PRIME Z490M-PLUS</b></div>
            <div className="value__slider">
                <div className="value__key__slider">Значение1</div><div>Lorem ipsum dolor sit amet.</div>
                <div className="value__key__slider">Значение2</div><div>Lorem ipsum dolor sit.</div>
                <div className="value__key__slider">Значение3</div><div>Lorem ipsum dolor sit.</div>
            </div>
        </div>
        </>
    )
}

export default ItemSlider