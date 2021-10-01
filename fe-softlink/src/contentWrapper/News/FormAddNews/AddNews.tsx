import React, {FC} from "react";

let AddNews: FC<any> = () => {
    return (
        <form className="news__template__add">
            <span className={"add__news__title__span"}>Заголовок </span>
            <div>
                <input className={"add__news__title"} placeholder={"Title"}
                       id="title__news"
                       type="text"
                />
            </div>
            <span className={"add__news__content__span"}>Текст </span>
            <div>
                <input  className={"add__news__content"} placeholder={"Content"}
                       type="text"
                       id="content__news"
                />
            </div>
            <div>
                <button  className={"add__news__submit"} onClick={() => alert("NO FUNC")} id="submit__news"> Отправить форму</button>
            </div>
        </form>
    )
}

export default AddNews