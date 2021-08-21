import userPhoto from '../../image/userPhoto.jpg'
import { apiCabinet } from '../../apiDAL/DAL'
import ComputerContainer from './Computer/ComputerContainer'

let Cabinet = (props) => {
    console.log("Draw Cabinet")
    let stateCab = props.stateCabinet
    let stateComp = props.stateComp
    let hard = stateCab.bag.hdd
    let cpu = stateCab.bag.cpu
    let mother = stateCab.bag.mother
    let power = stateCab.bag.powersupply
    let ssd = stateCab.bag.ssd
    let video = stateCab.bag.video
    let ram = stateCab.bag.ram
    let arrRam = stateComp.ram.map((data) => data.id)
    let arrHard = stateComp.hdd.map((data) => data.id)
    let arrVideo = stateComp.video.map((data) => data.id)
    let arrSsd = stateComp.ssd.map((data) => data.id)
    let ssdSlot = {
        m2: stateComp.remainM2,
        pcie: stateComp.remainPcie4,
        sata: stateComp.remainSata,
        msata: 0
    }

    let haveSlot = (data) => {
        if (data == "SATA-III") {
            if (ssdSlot.sata) {
                return <div className="button__item">&laquo;</div>
            } else {
                return <div className="button__item disable">X</div>
            }
        } else if (data == "M2") {
            if (ssdSlot.m2) {
                return <div className="button__item">&laquo;</div>
            } else {
                return <div className="button__item disable">X</div>
            }
        } else if (data == "PCI-E 3.0 x4") {
            if (ssdSlot.pcie) {
                return <div className="button__item">&laquo;</div>
            } else {
                return <div className="button__item disable">X</div>
            }
        }
    }

    let test = ssd.map((data) => {
        return(
            <div className="bug__item">
                { 
                    data.id == stateComp.ssd[0].id ?
                        <div className="button__item enable">&raquo;</div> :
                        haveSlot(data.interface) ?
                        <div className="button__item">&laquo;</div> :
                        <div className="button__item disable">X</div>
                }
                <div className="bug__item__name">
                    {data.model} {data.brand}
                </div>
                <div className="bug__item__disc">
                    Описание Итема
                </div>
                <div className="erase_item"><b>X</b></div>
            </div>
        )
    })

    console.log(test)
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
                                    { 
                                        data.id == stateComp.mother[0].id ?
                                            <div className="button__item enable">&raquo;</div> :
                                            stateComp.remainMother ?
                                            <div className="button__item">&laquo;</div> :
                                            <div className="button__item disable">X</div>
                                    }
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
                                { data.id == props.stateComp.cpu[0].id ?
                                        <div className="button__item enable">&raquo;</div> :
                                        stateComp.remainCpu ?
                                        <div className="button__item">&laquo;</div> :
                                        <div className="button__item disable">X</div>
                                }
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
                            { data.id == props.stateComp.power[0].id ?
                                    <div className="button__item enable">&raquo;</div> :
                                    stateComp.remainPower ?
                                    <div className="button__item">&laquo;</div> :
                                    <div className="button__item disable">X</div>
                            }
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
                                    { arrVideo.some((item) => item == data.id) ?
                                            <div className="button__item enable">&raquo;</div> :
                                            stateComp.remainPcie16 ?
                                            <div className="button__item">&laquo;</div> :
                                            <div className="button__item disable">X</div>
                                    }
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
                                { 
                                    data.id == stateComp.ssd[0].id ?
                                        <div className="button__item enable">&raquo;</div> :
                                        haveSlot(data.interface) ?
                                        <div className="button__item">&laquo;</div> :
                                        <div className="button__item disable">X</div>
                                }
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
                            { arrRam.some((item) => item == data.id) ?
                                    <div className="button__item enable">&raquo;</div> :
                                    <div className="button__item">&laquo;</div>
                            }
                                <div className="bug__item__name">
                                    {data.id}. {data.model} {data.brand} 
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
                                {console.log(hard)}                   
                                {console.log(arrHard)}                   
                                { arrHard.some((item) => item == data.id) ?
                                    <div className="button__item enable">&raquo;</div> :
                                    <div className="button__item">&laquo;</div>
                                }
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