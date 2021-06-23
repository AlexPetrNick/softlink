import userPhoto from '../../image/userPhoto.jpg'
import schema from '../../image/scheme.jpg'

let Cabinet = (props) => {
    console.log(props)
    let hard = props.stateCabinet.bag.hdd
    let cpu = props.stateCabinet.bag.cpu
    let mother = props.stateCabinet.bag.mother
    return (
        <div className="cabinet__wrapper">
            <div className="info__user">
                <div className="user__logo">
                    <img src={userPhoto} />
                </div>
                <div className="user__data">
                    <div className="user__login">{props.stateUser.login}</div>
                    <div className="user__firstname">{props.stateUser.firstName}</div>
                    <div className="user__second__name">{props.stateUser.secondName}</div>  
                </div>
            </div>
            <div className="user__computer">
                <div className="computer__schema">
                    <img src={schema}  />
                </div>
                <div></div>
                <div className="computer__data">
                    <div className="computer__data__name">Материнка</div>
                    <div className="computer__data__item"></div>
                    <div className="computer__data__name">Процессор</div>
                    <div className="computer__data__item"></div>
                    <div className="computer__data__name">Видеокарта</div>
                    <div className="computer__data__item"></div>
                    <div className="computer__data__name">Оперативная</div>
                    <div className="computer__data__item"></div>
                    <div className="computer__data__name">SSD</div>
                    <div className="computer__data__item"></div>
                    <div className="computer__data__name">Жесткий диск</div>
                    <div className="computer__data__item"></div>
                </div>
            </div>
            <div className="user__bug">
                <div className="bug__name">Материнка
                    {mother.map((data) => {
                            return(

                                <div className="bug__item">
                                    <div className="bug__item__name">
                                        {data.model} {data.brand}
                                    </div>
                                    <div className="bug__item__disc">
                                        Описание Итема
                                    </div>
                                </div>
                            )
                        })}
                </div>
                <div className="bug__name">Процессор
                    {cpu.map((data) => {
                            return(

                                <div className="bug__item">
                                    <div className="bug__item__name">
                                        {data.model} {data.brand}
                                    </div>
                                    <div className="bug__item__disc">
                                        Описание Итема
                                    </div>
                                </div>
                            )
                        })}
                </div>
                <div className="bug__name">Видеокарта</div>
                <div className="bug__name">Оперативная</div>
                <div className="bug__name">SSD</div>
                <div className="bug__name"><span>Жесткий</span>
                    {hard.map((data) => {
                        return(

                            <div className="bug__item">
                                <div className="bug__item__name">
                                    {data.model} {data.brand}
                                </div>
                                <div className="bug__item__disc">
                                    Описание Итема
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}

export default Cabinet