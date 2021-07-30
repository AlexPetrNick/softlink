import userPhoto from '../../image/userPhoto.jpg'
import { apiCabinet } from '../../apiDAL/DAL'
import ComputerContainer from './Computer/ComputerContainer'

let Cabinet = (props) => {
    let hard = props.stateCabinet.bag.hdd
    let cpu = props.stateCabinet.bag.cpu
    let mother = props.stateCabinet.bag.mother
    let power = props.stateCabinet.bag.powersupply
    let ssd = props.stateCabinet.bag.ssd
    let video = props.stateCabinet.bag.video
    let ram = props.stateCabinet.bag.ram


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
            <ComputerContainer />
            <div className="user__bug">
                <div className="bug__name">Материнка
                    {mother.map((data) => {
                            return(
                                <div className="bug__item">
                                    <div className="button__item">&laquo;</div>
                                    <div className="bug__item__name">
                                        {data.model} {data.brand}
                                    </div>
                                    <div className="bug__item__disc">
                                        Описание Итема
                                    </div>
                                    <div className="erase_item"><b>X</b></div>
                                </div>
                            )
                        })}
                </div>
                <div className="bug__name">Процессор
                    {cpu.map((data) => {
                            return(
                                <div className="bug__item">
                                    <div className="button__item">&laquo;</div>
                                    <div className="bug__item__name">
                                        {data.model} {data.brand}
                                    </div>
                                    <div className="bug__item__disc">
                                        Описание Итема
                                    </div>
                                    <div className="erase_item"><b>X</b></div>
                                </div>
                            )
                        })}
                </div>
                <div className="bug__name">Блок питания
                    {power.map((data) => {
                        return( 
                            <div className="bug__item">
                                <div className="button__item">&laquo;</div>
                                <div className="bug__item__name">
                                    {data.model} {data.brand}
                                </div>
                                <div className="bug__item__disc">
                                    Описание Итема
                                </div>
                                <div className="erase_item"><b>X</b></div>
                            </div>
                        )
                    })}     
                </div>
                <div className="bug__name">Видеокарта
                    {video.map((data) => {
                        return(
                            <div className="bug__item">
                                <div className="button__item">&laquo;</div>
                                <div className="bug__item__name">
                                    {data.model} {data.brand}
                                </div>
                                <div className="bug__item__disc">
                                    Описание Итема
                                </div>
                                <div className="erase_item"><b>X</b></div>
                            </div>
                        )
                    })}        
                </div>
                <div className="bug__name">SSD
                    {ssd.map((data) => {
                        return(
                            <div className="bug__item">
                                <div className="button__item">&laquo;</div>
                                <div className="bug__item__name">
                                    {data.model} {data.brand}
                                </div>
                                <div className="bug__item__disc">
                                    Описание Итема
                                </div>
                                <div className="erase_item"><b>X</b></div>
                            </div>
                        )
                    })} 
                </div>
                <div className="bug__name">Оперативная
                    {ram.map((data) => {
                        return(
                            <div className="bug__item">
                                <div className="button__item">&laquo;</div>
                                <div className="bug__item__name">
                                    {data.model} {data.brand}
                                </div>
                                <div className="bug__item__disc">
                                    Описание Итема
                                </div>
                                <div className="erase_item"><b>X</b></div>
                            </div>
                        )
                    })}
                </div>
                <div className="bug__name">Жесткий
                    {hard.map((data) => {
                        return(
                            <div className="bug__item">                    
                                <div className="button__item enable">&raquo;</div>
                                <div className="bug__item__name">
                                    {data.model} {data.brand}
                                </div>
                                <div className="bug__item__disc">
                                    Описание Итема
                                </div>
                                <div className="erase_item"><b>X</b></div>
                            </div>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}

export default Cabinet